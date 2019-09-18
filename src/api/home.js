import axios from '@/utils/axios.js'
import { isLocalMock } from '@/api/config.js'

// 请求首页课程信息
export function getHomeCourse () {
  let url = isLocalMock ? '/mock/home/course.json' : '/home/course'
  return axios.get(url)
}

// 请求首页导航数据
export function getHomeNav () {
  let url = isLocalMock ? '/mock/home/nav.json' : '/home/nav'
  return axios.get(url)
}

// 请求首页轮播数据
export function getHomeSlider () {
  let url = isLocalMock ? '/mock/home/slider.json' : '/home/slider'
  return axios.get(url)
}

// 请求猿问和手记
export function getHomeArticle () {
  let url = isLocalMock ? '/mock/home/article.json' : '/home/article'
  return axios.get(url)
}

// 请求精彩讲师接口
export function getHomeTeacher () {
  let url = isLocalMock ? '/mock/home/teacher.json' : '/home/teacher'
  return axios.get(url)
}

// 请求全明星接口
export function getHomeAllstar () {
  let url = isLocalMock ? '/mock/home/allstar.json' : '/home/allstar'
  return axios.get(url)
}