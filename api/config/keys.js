if (process.env.NODE_ENV === 'production'){
    console.log('Exporting production mongoURI');
    module.exports = require('./keys_prod');
}
else{
    console.log('Exporting dev mongoURI');
    module.exports = require('./keys_dev');
}
