import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant';
import config from '@/config'
import { router } from '@/router'

const configEnv = require("../../config");

const http = axios.create({
  // withCredentials: true,  配置默认跨域访问凭证(Cookie)
  baseURL: configEnv.baseApi, // 配置默认接口地址
  timeout: config.timeout // 配置默认请求超时
})

// 获取用户TOKEN
const user = JSON.parse(localStorage.getItem('userM'))
if (user) {
  http.defaults.headers.common['Authorization'] = `${user.token}`
}
http.defaults.headers.common['platform'] = config.headers.Platform
http.defaults.headers.common['apiVersion'] = config.headers.ApiVersion
// 配置默认请求头
// http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 配置版本号
// http.defaults.headers.common['Accept'] = config.headers.Accept
// http.defaults.headers.post['Accept'] = config.headers.Accept

// 添加请求拦截器
http.interceptors.request.use(config => {
  // config['headers']['common']['platform'] = 1
  /* const user = JSON.parse(localStorage.getItem('userM'))
  if (user) {
    config['headers']['common']['token'] = user.token
  } */
  // 参数序列化
  if (config['headers']['Content-type'] && config['headers']['Content-type'].indexOf('application/json') !== -1) {
    config.data = JSON.stringify(config.data)
  } else {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  const env = process.env.NODE_ENV
  // 控制台输出响应数据
  if (env !== 'production' && env !== 'release') {
    // console.log(response.data)
  }
  // 返回正确响应数据
  const {code, msg} = response.data
  if (code === 200) {
    return response.data
  } else if (code === 500) {
    Toast(msg)
    return response.data
  } else if (code === 401) {
    router.push('/login') // 登陆超时 重新登录
    Toast(msg)
  } else if (code === 402) {
    router.push('/login') // 别处登陆  重新登录
    Toast(msg)
  } else if (code === 403) {
    Toast(msg)
  } else {
    Toast(msg) // 提示错误信息
  }
}, error => {
  const {status, timeout} = error.request
  if (status === 0 && timeout === config.timeout) {
    Toast('服务器断开连接 或 请求超时 请检查网络状态')
  } else {
    const env = process.env.NODE_ENV
    if (env === 'development') {
      console.log(error)
    }
  }
  return Promise.reject(error)
})

export {
  http,
  config
}
