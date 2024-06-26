const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
    port: 5000,
    host: '0.0.0.0',
    routes: {
        cors: true
    }
});

const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];

module.exports = {server, plugins};