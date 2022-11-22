const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

// eslint-disable-next-line func-names
module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    config.module.rules.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'node_modules/react-router-native')],
    });

    return config;
};
