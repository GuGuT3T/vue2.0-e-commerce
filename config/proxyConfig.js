module.exports = {
    proxy: {
        '/api': { //将http://localhost:8888印射为/apis
            target: 'http://localhost:8888', // 接口域名
            changeOrigin: true, //是否跨域
            pathRewrite: {
                '^/api': '' //需要rewrite的,
            }
        }
    }
}