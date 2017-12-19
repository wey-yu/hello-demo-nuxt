# hello-world

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deploy it to Clever Cloud

```
git add .
git commit -m "🚀 my app"

clever create hello-world -t node --org the-plan --region par --alias hello-world
clever env set PORT 8080 --alias hello-world
clever env set HOST 0.0.0.0 --alias hello-world
clever domain add hello-clever.cleverapps.io --alias hello-world
clever env set CC_POST_BUILD_HOOK 'npm run build' --alias hello-world
clever env set ENABLE_METRICS true --alias hello-world
clever deploy
```

