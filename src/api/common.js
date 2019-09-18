import axios from '@/utils/axios.js'
import { isLocalMock } from '@/api/config.js'

// 公共热搜关键词
export function getCommonHot (){
  let url = isLocalMock ? '/mock/common/hot.json' : '/common/hot'
  return axios.get(url)
}

export function getCommonSearch (){
  let url = isLocalMock ? '/mock/common/hot.json' : '/common/search/history'
  return axios.get(url)
}