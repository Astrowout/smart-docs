# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

[Vercel](https://vercel.com/) is used to deploy this app. Every push to the `master` branch will trigger a new deploy to production. *If something goes wrong, you can simply switch to the latest working version by promoting a previous version to production in the Vercel dashboard.*

The production URL is [https://smart-docs.vercel.app/](https://smart-docs.vercel.app/)
