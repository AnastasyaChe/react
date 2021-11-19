const path = require('path');
module.exports = {
    entry : {
        main : path.resolve(__dirname, 'src', 'index.jsx')
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                loader : {
                    plugins : [
                        ["@babel/plugin-proposal-class-properties",
                    {"loose" : true}]
                    ]
                }
            }
        ]
    },
    // plugins : [],
    devServer : {
        port : 3000,
        hot : true,
        open : false,
    }
}