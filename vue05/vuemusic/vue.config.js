const path = require("path")
function resolve(dir){
  return path.join(__dirname,dir)
}
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
      },
      chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))  //src的绝对路径起一个别名叫@
        .set('api',resolve('./src/api'))
        .set('style',resolve('./src/style'))
        .set('components',resolve('./src/components'))
        // 配置分析工具
        if (process.env.NODE_ENV === 'production') {
          if (process.env.npm_config_report) {
            config
              .plugin('webpack-bundle-analyzer')
              .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
              .end();
          }
        } else {
        }
      // 配置gzip 
      },
}