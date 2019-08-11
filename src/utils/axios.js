import axios from 'axios'
import { ERR_OK } from '@/api/config.js'

const baseUrl = 'https://www.easy-mock.com/mock/5d2037e9336b67021a4c918e/vue-mooc'
const service = axios.create({
  baseURL: baseUrl,
  timeout: 10000
})

// 请求拦截
service.interceptors.request.use(
  config =>{
    config.headers['token'] = '635+56645456456'
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截
service.interceptors.response.use(
  response => {
    let {status, data} = response
    if (status !== 200) {
      console.log('网络异常，请刷新或者重试!')
      return Promise.reject('网络异常!')
    }
    if (data.code != ERR_OK) {
      console.log(data.msg || '接口请求异常，请重试!')
      return Promise.reject(data.msg || '接口异常!')
    }
    return Promise.resolve(data)
  },
  error => {
    return Promise.reject(error)
  }
)


export default service
