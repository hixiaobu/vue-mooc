import axios from '@/utils/axios.js'

// 公共热搜关键词
export function getCommonHot (){
  return axios.get('/common/hot')
}

export function getCommonSearch (){
  return axios.get('/common/search/history')
}