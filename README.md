# Express & ES6 REST API Boilerplate

[![Build Status](https://semaphoreci.com/api/v1/nimjetushar/express-es6-rest-api/branches/master/shields_badge.svg)](https://semaphoreci.com/nimjetushar/express-es6-rest-api)
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/nimjetushar/express-es6-rest-api)
<br/>
[![dependencies Status](https://david-dm.org/nimjetushar/express-es6-rest-api/status.svg)](https://david-dm.org/nimjetushar/express-es6-rest-api)
[![devDependencies Status](https://david-dm.org/nimjetushar/express-es6-rest-api/dev-status.svg)](https://david-dm.org/nimjetushar/express-es6-rest-api?type=dev)

This is a straightforward boilerplate for building REST APIs with ES6 and Express.

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

> Tip: If you are using [Mongoose](https://github.com/Automattic/mongoose), you can automatically expose your Models as REST resources using [restful-mongoose](https://git.io/restful-mongoose).

## Getting Started

```sh
# clone it
git clone https://github.com/nimjetushar/express-es6-rest-api.git
cd express-es6-rest-api

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm start

# Create build
npm run build

# Test application
npm test
```

## Docker Support

```sh
cd express-es6-rest-api

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port
```

## License

[![GitHub license](https://img.shields.io/github/license/nimjetushar/express-es6-rest-api.svg)](https://github.com/nimjetushar/express-es6-rest-api/blob/master/LICENSE)
