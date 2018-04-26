module.exports={
    entry:["babel-polyfill","./source/client.js"],
    output:{
        path: __dirname,
        filename:"index.js",
    },
    devServer:{
       inline:true,
        contentBase:"./public",
        port:3000,
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_module/,
                use:'babel-loader'
            }
        ]
    },
    mode:'none'

};