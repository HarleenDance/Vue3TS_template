// 系统参数配置
// const version = 'v1'
let host = ''

let isTestProd = true // 是否测试环境 打包

 switch (process.env.NODE_ENV) {
  case 'production':
    host = isTestProd ? 'http://192.168.112.101:8201' : 'https://api.guanjiasport.com'
    break
  case 'release':
    host = 'http://172.29.8.45:8201' // 外网API：http://210.75.8.24:8201
    break
  case 'testing':
    host = 'http://192.168.112.101:8201' // 外网API：http://210.75.8.24:8201
    break
  default:
    host = 'http://192.168.112.101:8201' // http://192.168.37.118:8201 ZJW
} 

export default {
  headers: {
    Platform: '1',
    ApiVersion: '1'
  },
  isTestProd,
  baseURL: host, // 接口地址
  timeout: 60000, // 请求超时
  version: '1.0.0' // 应用版本
}
