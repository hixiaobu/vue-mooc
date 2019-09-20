import axios from '@/utils/axios.js'
import { isLocalMock } from '@/api/config.js'

// 获取免费课程导航
export function getCourseNav(){
  let url = isLocalMock ? '/mock/course/nav.json' : '/course/nav'
  return axios.get(url)
}

// 获取免费课程列表
export function getCourseList(){
  let url = isLocalMock ? '/mock/course/list.json' : '/course/list'
  return axios.get(url)
}

// 获取免费课程详情
export function getCourseDetail(){
  let url=isLocalMock ? '/mock/course/detail.json' : '/course/detail'
  return axios.get(url)
}

// 获取实战课程导航
export function getLessonNav(){
  let url = isLocalMock ? '/mock/lesson/nav.json' : '/lesson/nav'
  return axios.get(url)
}

// 获取实战课程列表
export function getLessonList(){
  let url = isLocalMock ? '/mock/lesson/list.json' : '/lesson/list'
  return axios.get(url)
}

// 获取实战课程详情
export function getLessonDetail(){
  let url=isLocalMock ? '/mock/lesson/detail.json' : '/lesson/detail'
  return axios.get(url)
}