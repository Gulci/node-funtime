'use strict';

require('dotenv').config();

const Koa = require('koa');
const body = require('koa-body');
const Clarifai = require('clarifai');

const app = new Koa();

// Use koa-body middleware to parse our request bodies
app.use(body());

// set up Clarifai
const clarifaiApp = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY,
});

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(async ctx => {
  // Reject any requests that aren't made using POST
  switch(ctx.request.method) {
    case 'POST': {
      const requestJSON = ctx.request.body;

      if(!requestJSON.hasOwnProperty('imageURL')) {
        ctx.throw(400, 'Invalid JSON: No imageURL specified.');
      }

      try {
        const response = await clarifaiApp.models.predict(
          Clarifai.GENERAL_MODEL, 
          requestJSON.imageURL
        );
        ctx.body = JSON.stringify(response.outputs[0].data.concepts);
      } catch(error) {
        console.error(error);
        ctx.throw(400, 'Invalid URL provided');
      }

      break;
    }
    default: {
      ctx.throw(400, 'Illegal HTTP method');
      break;
    }
  }
});

app.listen(3000);
