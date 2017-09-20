// app.js

'use strict';

const Koa = require('koa');
const Router = require('koa-better-router');
const body = require('koa-better-body');
const { graphqlKoa } = require('apollo-server-koa');

const app = new Koa();
const router = new Router();
const schema = require('./schema');

router.addRoute('GET /',
  (ctx, next) => {
    ctx.body = 'Hello world!';
    return next();
  }
);

router.addRoute('GET /graphql',
  graphqlKoa({
    schema: schema,
  })
);

router.addRoute('POST /graphql',
  body(),
  (ctx, next) => {
    ctx.request.body = ctx.request.fields;
    return next();
  },
  graphqlKoa({
    schema: schema,
  })
);
  
app.use(router.middleware());

app.listen(3000);
