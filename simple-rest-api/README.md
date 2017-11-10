# Simple REST API

Here I'm using [Clarifai](https://clarifai.com/) to analyze and return concepts found in images.

I've also added linting with [ESLint](https://eslint.org) with a few rules I think are helpful for developing with Koa.

In this example, the usefulness of `async` and `await` in JavaScript becomes a little more clear. Instead of using promises, we can use a simple try / catch block and distinguish our Clarifai API call as asynchronous. We have to mark something as asynchronous because it could be a while before we hear back from the service. If you're curious about how long it takes to get a response back for this particular request, remember we are already returning that in a X-Response-Time header.

The basic premise is we can mark a function that is asynchronous with `async`.

We've marked this anonymous function as asynchronous because we are planning on calling the asynchronous Clarifai API in it.
```javascript
app.use(async ctx => { ...
```

We use `await` to indicate that we are waiting for a promise to resolve. In this case, we are going to try to get our response from calling `clarifaiApp.models.predict()` and catch any errors that might occur.
```javascript
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
```

If you want to read a little more, [this article](https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html) describes the benefits of using `async` / `await` when writing asynchronous code.

## Setup
**Important!!** 
Before you do anything else, sign up on Clarifai to get your API key. It's free! Once you have your API key, edit `.env.example` and add your API key and rename the file to `.env`.
1. `npm install`
2. `npm run dev`
3. Make a POST request to localhost:3000 with JSON structured as follows:
```json
{
  "imageURL": "IMAGE_URL"
}
```
4. Receive an array of "concepts" from the Clarifai API (See their [documentation](https://clarifai.com/developer/quick-start/) for more info)
