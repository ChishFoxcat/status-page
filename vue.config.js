const HtmlWebpackPlugin = require('html-webpack-plugin'),
    dayjs = require('dayjs');

module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch')
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