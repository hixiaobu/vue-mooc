import axios from 'axios'
import { ERR_OK, isLocalMock } from '@/api/config.js'

const baseUrl =  isLocalMock ? '' : 'https://wangtunan.github.io/vue-mooc'
const service = axios.create({
  baseURL: baseUrl,
  timeout: 10000
})

// 请求拦截
service.interceptors.request.use(
  config => {
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
      return Promise.reject('网络异常!')
    }
    if (data.code != ERR_OK) {
      return Promise.reject(data.msg || '接口异常!')
    }
    return Promise.resolve(data)
  },
  error => {
    return Promise.reject(error)
  }
)


export default service
