import axios from '@/utils/axios.js'

// 公共热搜关键词
export function getCommonHot (){
  return axios.get('/mock/common/hot.json')
}

export function getCommonSearch (){
  return axios.get('/mock/common/hot.json')
}