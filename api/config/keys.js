if (process.env.NODE_ENV === 'production'){
    console.log('Exporting production mongoURI');
    module.exports = require('./keys_prod');
}
else if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV == 'test'){
    console.log('Exporting dev mongoURI');
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
    module.exports = require('./keys_dev');
}
else{
    console.error('Failed to export keys');
}
