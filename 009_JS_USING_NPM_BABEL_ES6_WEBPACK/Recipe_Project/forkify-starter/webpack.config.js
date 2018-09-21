const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry : ['babel-polyfill','./src/js/index.js'],
    output : {
        path: path.resolve(__dirname,'dist'),
        filename : 'js/bundle.js'
    },
    resolve: {
        alias:{
            test$ :path.resolve(__dirname,'src/js/test.js'),
            base$:path.resolve(__dirname,'src/js/views/base.js'),
            searchView$:path.resolve(__dirname,'src/js/views/searchView.js'),            
            Search$:path.resolve(__dirname,'src/js/models/Search.js'),
            listView$:path.resolve(__dirname,'src/js/views/listView.js'),            
            List$:path.resolve(__dirname,'src/js/models/List.js'),
            likesView$:path.resolve(__dirname,'src/js/views/likesView.js'),            
            Likes$:path.resolve(__dirname,'src/js/models/Likes.js'),            
            recipeView$:path.resolve(__dirname,'src/js/views/recipeView.js'),            
            Recipe$:path.resolve(__dirname,'src/js/models/Recipe.js')            
        },
        extensions:['.js']
    },
    devServer:{
        contentBase : './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        })
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    }
};