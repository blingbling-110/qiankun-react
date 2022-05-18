const { name } = require('./package');

module.exports = {
    webpack: {
        configure: config => {
            config.output.library = `${name}-[name]`;
            config.output.libraryTarget = 'umd';
            config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;

            return config;
        }
    },

    devServer: config => {
        config.headers = {
            'Access-Control-Allow-Origin': '*',
        };

        return config;
    },
};