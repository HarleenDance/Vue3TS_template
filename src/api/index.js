import {http} from '@/utils/axios'
// import config from '@/config/'

export const login = params => http.post('/employee/login', params) // 用户登录
export const getParams = params => http.get('', {params: params}) // 模板
export const postParams = params => http.post('', params)
export const postParamsJson = params => http.post('', params, {headers: {'Content-type': 'application/json;utf-8'}}) // 订单 对账
