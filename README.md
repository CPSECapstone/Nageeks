# Cloud Haven, By Nageeks

Built using React.js as Front-end, Node.js/Express.js as Back-end, MongoDB as Database

# Quick Start. 
## Create your api/config/keys_dev.js file

example:

    module.exports = {
        mongoURI: "mongoURI here",
        key: "None"
    }

## Create your api/config/.env file

See api/config/.sample-env for setup of .env file

## Install dependences and start (node_modules should be created in root, api, and config)
npm run install-dev\
npm start

client is the React.js, being run on http://localhost:3000
api is the Express.js, being run on http://localhost:3001
