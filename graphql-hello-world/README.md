# GraphQL Hello World!

A very basic [GraphQL](http://graphql.org/) set-up using [Koa](koajs.com), [Apollo Server](https://github.com/apollographql/apollo-server), [better-koa-router](https://github.com/tunnckocore/koa-better-router), and [koa-better-body](https://github.com/tunnckocore/koa-better-body).

The scheme includes a very simple 'hello' query that returns the string `world!`.

## Setup

1. `npm install`
2. `npm run dev`
3. Visit [localhost:3000](http://localhost:3000)
4. Visit [http://localhost:3000/graphql?query=query{hello}](http://localhost:3000/graphql?query=query{hello})
5. POST the JSON in `testQuery.json` to `localhost:3000/graphql` and receive your reply! 
