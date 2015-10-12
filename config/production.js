'use strict';

//dependencies
var defer = require('config/defer').deferConfig;

/**
 * @description default configurations
 * @type {Object}
 */
module.exports = {
    /**
     * @description default application base url
     * @type {String}
     */
    baseUrl: defer(function() {
        return 'http://' + this.ip + ':' + this.port;
    }),


    /**
     * @description application port
     * @type {Number}
     */
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002,


    /**
     * @description application ip address
     * @type {String}
     */
    ip: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",


    /**
     * @description mongoose database configurations
     * @type {Object}
     */
    mongoose: {
        database: 'elimu',
        host: process.env.OPENSHIFT_MONGODB_DB_HOST,
        user: process.env.OPENSHIFT_MONGODB_DB_USERNAME,
        password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
        port: process.env.OPENSHIFT_MONGODB_DB_PORT,
        options: {
            db: {
                safe: true
            },
            server: {
                socketOptions: {
                    keepAlive: 1
                }
            },
            replset: {
                socketOptions: {
                    keepAlive: 1
                }
            }
        }
    },


    /**
     *@description logger configurations
     */
    logger: {
        dir: 'logs',
        level: 'silly',
        file: 'logs.json'
    }

};