# Taggis

## Description

An application generating a tagcloud based upon hashtag search in Twitter.

## Dependencies

- express (web server)
- express-session (store sessions sever-sided)
- body-parser (parsing incoming requests)
- dotenv (for handling credientials)
- node-fetch (instead of http/https to support promises)
- node-sass (compiling sass styles to css)
- oauth (used to authenticate with Twitter API)
- pug (template engine for views)
- wordcloud (rendering the actual tagcloud)

## Credentials for Twitter API

When using the Twitter API you need to have credentials put in a `.env` file
that should lie in the root of the project. Please update it with accordingly
values.

## Running locally

Make sure you have Node.js installed (preferably latest LTS, 8.9.4).
Application requires at least v8.5.8 due to use of promises...
and trailing commas. Oops. :-)

```
$ git clone git@github.com:markusbergh/taggis.git
$ cd taggis
$ npm install
$ npm start
```

Now you can see the running application in a browser at http://localhost:3000/

## Running in development mode

When running in development mode you will have `node-sass` listening
for changes in styles, and `nodemon` restarting server upon changes
to the server code base.

```
$ npm run dev
```
