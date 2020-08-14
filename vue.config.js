module.exports={
    lintOnSave: false,
    devServer: {
        open: false, // 编译完成是否打开网页
        host: "0.0.0.0", // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
        port: 8080, // 访问端口
        https: false, // 编译失败时刷新页面
        hot: true, // 开启热加载
        hotOnly: false,
        proxy: {
          "/api": {
            target: 'http://localhost:8081/api', //API服务器的地址  http://www.web-jshtml.cn/api
            changeOrigin: true, //是否开启跨域
            pathRewrite: {
            // 对 /api/users 的请求会将请求代理到 http://localhost:8081/api/users。
             // 如果不希望传递/api，则需要重写路径：
              "^/api": "" 
            }
          }
        }
    }
}