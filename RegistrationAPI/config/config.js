// check environment
var env = process.env.NODE_ENV || 'development';

// fetch environment config
var config = require('./config.json');

var envConfig = config[env];

// add environment config values to process.env

Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);
