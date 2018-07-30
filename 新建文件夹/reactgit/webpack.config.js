//entry  入口
//output 出口
//module/rules(更新前是leader) 加载器
//plugins 插件
//devserver 热监听 开发服务器

var path = require('path')

module.exports  = {
    entry: './main.js',  //入口文件设置
    output:{
        path: path.resolve(__dirname,'dist'),//解析 1
        filename: 'foo.js'
    },
    module:{
        rules:[ //加载器:css/js/图片
            {   
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,//排除
                loader: 'babel-loader',
                query:{
                    presets: ['es2015','react'] //预设
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png||jpg||gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        compress: true, //压缩
        port: 9000,
        inline: true
    }
}