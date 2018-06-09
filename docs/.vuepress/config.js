const path = require('path')
const webpack = require('webpack')
let baseConfig = require('../../build/webpack.base.conf')

function resolve(dir) {
    return path.join(__dirname, '../../', dir)
}

module.exports = {
    title: 'Hello My VuePress',
    description: 'Just playing around',
    host: 'localhost',
    scss: {
        includePaths: [resolve('src/style'), resolve('node_modules')]
    },
    configureWebpack: (config, isServer) => {
        let tsRules = baseConfig.module.rules.find(v => {
            return v.loader === 'ts-loader'
        })
        return {
            resolve: {
                alias: baseConfig.resolve.alias
            },
            module: {
                rules: [tsRules]
            },
            plugins: [
                // define process.env.version
                baseConfig.plugins[1]
            ]
        }
    },
    chainWebpack: (config, isServer) => {
        config.resolve.extensions.prepend('.ts')
        config.resolve.modules.prepend(resolve('src'))
        console.log(config.toConfig())
    }
}
