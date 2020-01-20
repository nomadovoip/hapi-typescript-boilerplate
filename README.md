# Hapi.js and typescript scaffolding 
We @ [nomado](https://www.nomado.eu) love [hapi.js](https://www.hapi.dev). If you haven't used this beautiful, scalable and carefully crafted framework for real world application, you should check it out!

This is our official starter kit which has been tested in our production and passed all the scalability, performance and reliability expectations.

## Getting started


### Prerequisites

Clone this repo.
```
git clone https://github.com/nomadovoip/hapi-typescript-boilerplate.git`
```

### Installation

install dependencies
```js
npm install
```

### Usage

To run locally for development
```node
npm run dev
```

To build a bundled transpiled javascript app
```node
npm run build
```

You should see the output in your terminal:
```
# npm run dev

> hapi-typescript-boilerplate@1.0.0 dev /Users/alex/Documents/projects/hapi-typescript-boilerplate
> nodemon

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): src/**/* main.ts
[nodemon] watching extensions: ts
[nodemon] starting `ts-node ./main.ts`
Server running at: http://mypc.local:3000
```

### Running tests (using Jest)

```node
npm t
```

Running tests in watch mode along with coverage
```node
npm run test:watch
```

**OR** without coverage

```node
npm run test -- --watch
```

### Deployment

#### Deploying manually
Build the bundle: leveraging webpack, we can compile our code and bundle it together so you no longer need to maintain dependencies in production environment.

```node
npm run bundle
```

Above script will produce `dist` folder that contains your compiled application. you can now simply `node ./dist/main.js` or use `pm2` as your process manager `pm2 start ./dist/main.js`


#### Docker

For a devOps, you cannot ignore the contributions made by [Docker](https://www.docker.com/) to bring inner peace in their lives. 

TODO: Docker deployment guide

In progress. 

# TODO
 - [x] Stop being lazy and move the kit to opensource.
 - [x] Configure basic structure
 - [x] `Typescript`
 - [x] `@Hapi/hapi` v19
 - [x] `Webpack`
 - [x] `Jest` configuration
 - [x] LICENSE
 - [x] Folder structure
 - [ ] `supertest` integration
 - [ ] Write example test with `jest` and `supertest`
 - [x] Write Dockerfile
 - [ ] Write docker-compose.yml file
 - [ ] Write `FAQ`
 - [ ] Write `Features`
 - [ ] Configure `TravisCI`

# Features
TODO: Features
In progress.

# FAQ
TODO: FAQ
In progress.

# Support
Use any of the following medium for support:

- Raise a ticket on [github](https://github.com/nomadovoip/hapi-typescript-boilerplate/issues)
- Reach me on my email (in package.json)
- Reach me on my linkedin.
- Reach on [nomado website](https://www.nomado.eu) and ask for me on chat(Shold be used as rarely as possible!)


# Contributors
- [Asad Rizvi](https://www.linkedin.com/in/aleyrizvi/)