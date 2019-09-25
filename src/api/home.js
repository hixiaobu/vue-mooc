import axios from '@/utils/axios.js'

// 请求首页课程信息
export function getHomeCourse () {
  return axios.get('/mock/home/course.json')
}

// 请求首页导航数据
export function getHomeNav () {
  return axios.get('/mock/home/nav.json')
}

// 请求首页轮播数据
export function getHomeSlider () {
  return axios.get('/mock/home/slider.json')
}

// 请求猿问和手记
export function getHomeArticle () {
  return axios.get('/mock/home/article.json')
}

// 请求精彩讲师接口
export function getHomeTeacher () {
  return axios.get('/mock/home/teacher.json')
}

// 请求全明星接口
export function getHomeAllstar () {
  return axios.get('/mock/home/allstar.json')
}