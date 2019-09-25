import axios from '@/utils/axios.js'

// 获取免费课程导航
export function getCourseNav(){
  return axios.get('/mock/course/nav.json')
}

// 获取免费课程列表
export function getCourseList(){
  return axios.get('/mock/course/list.json')
}

// 获取免费课程详情
export function getCourseDetail(){
  return axios.get('/mock/course/detail.json')
}

// 获取实战课程导航
export function getLessonNav(){
  return axios.get('/mock/lesson/nav.json')
}

// 获取实战课程列表
export function getLessonList(){
  return axios.get('/mock/lesson/list.json')
}

// 获取实战课程详情
export function getLessonDetail(){
  return axios.get('/mock/lesson/detail.json')
}