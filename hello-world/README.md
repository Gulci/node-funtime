# Hello World!

Hello world application found on [Koa's website.](http://koajs.com/)

Demonstrates Koa's "cascading" effect. This is comparable to a stack. In this example, we're using the `x-response-time` and `logging` middleware, as shown in Koa's example on their website.


```javascript
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
  ctx.body = 'Hello World';
});
```

When we make a request, `x-reponse-time` is placed on the "stack". When `await next()` is called, we move on to the next async call. (in this case `logger`) It ends up looking like this:

* `x-response-time`
* `logger`
* `response`

Once we're done with response, there's nothing next! So `response` is "popped off the stack", and we continue popping stuff off:

* `x-response-time`
* `logger` (we're finishing this off now!)

We've now "popped" `logger`...

* `x-response-time` (we're finishing this off now!)


## Setup

1. `npm install`
2. `npm run dev`
3. Visit [localhost:3000](http://localhost:3000)
4. Say hello back!
