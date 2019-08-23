import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home.vue'
import FreeCourse from './components/freecourse/freecourse.vue'


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
    }
  ]
})
