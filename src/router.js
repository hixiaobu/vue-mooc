import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home.vue'
import FreeCourse from './components/freecourse/freecourse.vue'
import FreeCourseDetail from './components/freecourse/freecoursedetail.vue'
import PracticeCourse from './components/practicecourse/practicecourse.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/freecourse',
      name: 'freecourse',
      component: FreeCourse
    },
    {
      path: '/freecoursedetail',
      name: 'freecoursedetail',
      component: FreeCourseDetail
    },
    {
      path: '/practicecourse',
      name: 'practicecourse',
      component: PracticeCourse
    }
  ]
})
