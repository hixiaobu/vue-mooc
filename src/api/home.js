import axios from '@/utils/axios.js'

// 请求首页课程信息
export function getHomeCourse () {
  return axios.get('/home/course')
}

// 请求首页导航数据
export function getHomeNav () {
  return axios.get('/home/nav')
}

// 请求首页轮播数据
export function getHomeSlider () {
  return axios.get('/home/slider')
}

// 请求猿问和手记
export function getHomeArticle () {
  return axios.get('/home/article')
}

// 请求精彩讲师接口
export function getHomeTeacher () {
  return axios.get('/home/teacher')
}

// 请求全明星接口
export function getHomeAllstar () {
  return axios.get('/home/allstar')
}