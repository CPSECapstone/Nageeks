# Cloud Haven, By Nageeks

Built using React.js as Front-end, Node.js/Express.js as Back-end, MongoDB as Database

# Getting Started. 

## Make sure you have Node.js installed locally

Check your Node.js version with the following command:  

    node --version 

Additionally check your version of npm:  

    npm --version 

If node or npm are missing or out of date:  
https://nodejs.org/en/download/  

## Create files that contain secret information

### Create your api/config/keys_dev.js file
api/config/keys_dev.js contains all of your developer secrets like:  

* Your MongoDB URI. You will need to update the URI with your given username and password 
* Any API keys necessary for development 


example:

    module.exports = {
        mongoURI: "mongoURI here",
        key: "some API key here"
    }

### Create your api/config/.env file
api/config/.env tells Cloud Haven whether its running in development or production mode through the NODE_ENV environment variable 

A NODE_ENV of development will use the secrets in your api/config/keys_dev.js file 

A NODE_ENV of production will use the secrets in your api/config/.env file

example:  

    NODE_ENV="development or production"
    MONGO_URI="mongoUri here"
    KEY: "some API key here"

## Install dependencies
node_modules should be created in Nageeks/, api/, and client/

From Nageeks/:

    npm run install-dev  

## Start Cloud Haven
From Nageeks/:  

    npm start 

client/src/App.js is the React.js front-end main module, being run on http://localhost:3000 

api/app.js is the Node.js/Express.js back-end main module, being run on http://localhost:3001

## Testing

### Back-End Testing
From api/:  

    npm test
    npm run coverage

### Front-End Testing
From client/:  

    npm test

## Continuous Integration: Travis-CI
https://travis-ci.org/github/CPSECapstone/Nageeks/pull_requests

## List of Dependenceies and Links to their Documentation 

### Back-End Dependencies
* axios: https://www.npmjs.com/package/axios
* concurrently: https://www.npmjs.com/package/concurrently
* connect-mongo: https://www.npmjs.com/package/connect-mongo
* cookie-parser: https://www.npmjs.com/package/cookie-parser
* debug: https://www.npmjs.com/package/debug
* dotenv: https://www.npmjs.com/package/dotenv
* express: https://expressjs.com/
* express-session: https://www.npmjs.com/package/express-session
* http-errors: https://www.npmjs.com/package/http-errors
* mongodb: https://docs.mongodb.com/
* mongoose: https://mongoosejs.com/ 
* morgan: https://www.npmjs.com/package/morgan

### Back-End Development Dependencies
* chai: https://www.chaijs.com/ 
* chai-as-promised: https://www.chaijs.com/ 
* cross-env: https://www.chaijs.com/ 
* mocha: https://mochajs.org/
* nodemon: https://nodemon.io/ 
* nyc: https://www.npmjs.com/package/nyc
* supertest: https://www.npmjs.com/package/supertest

### Front-End Dependencies
* axios: https://www.npmjs.com/package/axios
* jest: https://jestjs.io/docs/en/getting-started
* material-ui: https://material-ui.com/getting-started/usage/
* react: https://www.npmjs.com/package/axios