import axios from '@/utils/axios.js'

// 获取免费课程导航
export function getCourseNav(){
  return axios.get('/course/nav')
}

// 获取免费课程列表
export function getCourseList(){
  return axios.post('/course/list')
}


// 获取实战课程导航
export function getLessonNav(){
  return axios.get('/lesson/nav')
}

// 获取实战课程列表
export function getLessonList(){
  return axios.post('/lesson/list')
}