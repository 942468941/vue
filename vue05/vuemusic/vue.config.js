module.exports={
    lintOnSave:false,//关闭eslint
    devServer: {
        proxy: {//配置代理服务器
            '/hehe':{
                target:'https://news.baidu.com',
                changeOrigin:true,
                pathRewrite:{
                    "^/hehe":''
                }
            }
        }
      }
}