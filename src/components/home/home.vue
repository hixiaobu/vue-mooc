<template>
  <div>hello world</div>
</template>

<script>
import { getHomeCourse,getHomeNav,getHomeSlider,getHomeArticle,getHomeTeacher,getHomeAllstar } from '@/api/home.js'
// import * as API from '@/api/home.js'  全部接口取别名  API.getHomeCourse
import { ERR_OK } from '@/api/config.js'
export default {
  name:"Home",
  mounted () {
    this.getHomeNavData()
    this.getHomeSliderData()
    this.getHomeCourseData()
    this.getHomeArticleData()
    this.getHomeTeacherData()
    this.getHomeAllstarData()
  },
  methods: {
    // 两种请求方式
    // 获取首页导航信息
    async getHomeNavData () {
      let { code, data } = await getHomeNav()
      if(code===ERR_OK){
        console.log(data)
      }
    },
    // 获取首页课程信息
    getHomeCourseData () {
      getHomeCourse().then(res => {
        let {code,data}=res
        if(code===ERR_OK){
          console.log(data)
        }
      })
    },
    // 获取首页轮播数据
    getHomeSliderData () {
      getHomeSlider().then(res=>{
        let {code,data}=res
        if(code===ERR_OK){
          console.log(data)
        }
      })
    },
    // 获取猿问和手记
    getHomeArticleData () {
      getHomeArticle().then(res=>{
        let {code,data}=res
        if(code===ERR_OK){
          console.log(data)
        }
      })
    },
    // 获取精彩讲师接口
    getHomeTeacherData () {
      getHomeTeacher().then(res=>{
        let {code,data}=res
        if(code===ERR_OK){
          console.log(data)
        }
      })
    },
    // 获取全明星接口
    getHomeAllstarData () {
      getHomeAllstar().then(res=>{
        let {code,data}=res
        if(code===ERR_OK){
          console.log(data)
        }
      })
    }
  }

}
</script>

<style lang="stylus" scoped>

</style>