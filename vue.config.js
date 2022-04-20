const HtmlWebpackPlugin = require('html-webpack-plugin'),
    dayjs = require('dayjs'),
    path = require('path'),
    resolve = dir => {
        return path.join(__dirname, dir)
    },
    thisLink = (arr) => {
        let link = ''
        arr.forEach(v => {
            link += '<link rel="'
                + v.rel +
                '" href="'
                + v.href +
                '" '
                + (v.type !== undefined ? 'type="' + v.type + '"' : '')
                + (v.sizes !== undefined ? 'sizes="' + v.sizes + '"' : '') +
                '>'
        })
        return link
    },
    webpack = require('webpack');

module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch')
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icon'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icon'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'CI-[name]'
            })
            .end()
    },

    configureWebpack: config => {
        config.plugins.forEach((val) => {
            if (val instanceof HtmlWebpackPlugin) {
                if (process.env.NODE_ENV === 'production') {
                    // Build 时不删掉注释
                    val.options.minify.removeComments = false;
                }

                // 标题
                val.options.title = process.env.VUE_APP_SITE_TITLE

                // Meta 标签
                val.options.meta = {
                    viewport: 'width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no',
                    'X-UA-Compatible': {
                        'http-equiv': 'X-UA-Compatible',
                        content: 'IE=Edge,chrome=1'
                    },
                    description: process.env.VUE_APP_DESCRIPTION,
                    keywords: process.env.VUE_APP_KEYWORDS,
                    "theme-color": process.env.VUE_APP_THEMECOLOR
                }

                val.options.link = thisLink([
                    { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
                    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
                    { rel: 'dns-prefetch', href: 'https://cdn.bakaomg.cn' },
                    { rel: 'stylesheet', href: 'https://cdn.bakaomg.cn/packages/mdi/font/6.5.95/css/materialdesignicons.min.css' },
                ])

                val.options.copyright =
                    '|   _____ _     _     _      _____ _        _             ' + "\n" +
                    '|  / ____| |   (_)   | |    / ____| |      | |            ' + "\n" +
                    '| | |    | |__  _ ___| |__ | (___ | |_ __ _| |_ _   _ ___ ' + "\n" +
                    '| | |    | \'_ \\| / __| \'_ \\ \\___ \\| __/ _` | __| | | / __|' + "\n" +
                    '| | |____| | | | \\__ \\ | | |____) | || (_| | |_| |_| \\__ \\' + "\n" +
                    '|  \\_____|_| |_|_|___/_| |_|_____/ \\__\\__,_|\\__|\\__,_|___/';

                val.options.buildDate = (process.env.NODE_ENV === 'production') ? dayjs().format("YYYY-MM-DD HH:mm:ss") : "Dev";
            }
        })
    }
}