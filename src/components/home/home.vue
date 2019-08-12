<template>
  <div class="home-container">
    <!-- 课程信息 -->
    <div class="course-container">
      <div class="course-box" v-for="items in courseDataList" :key="items.index">
        <div class="courder-items">
          <!-- 课程标题 -->
          <div class="course-title">
            <span class="title-icon" :style="{'background-position':items.leftIcon}"></span>
            <div class="title-text">{{items.title}}</div>
            <span class="title-icon" :style="{backgroundPosition:items.rightIcon}"></span>
          </div>
          <!-- 课程数据 -->
          <div class="course-wrap">
            <div class="wrap-item"  v-for="item in items.data" :key="item.index">
              <div class="course-banner">
                <img :src="item.img" alt="">
                <div>
                  <label for=""></label>
                </div>
              </div>
              <div class="course-card">
                <h3 class="course-card-name">{{item.name}}</h3>
                <div class="course-card-bottom">
                  <div class="course-card-info">
                    <span>实战</span>
                    <span>{{item.rank}}</span>
                    <span></span>
                  </div>
                  <div class="course-card-price">¥ {{item.price}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomeCourse,getHomeNav,getHomeSlider,getHomeArticle,getHomeTeacher,getHomeAllstar } from '@/api/home.js'
// import * as API from '@/api/home.js'  全部接口取别名  API.getHomeCourse
import { ERR_OK } from '@/api/config.js'
export default {
  name:"Home",
  data () {
    return {
      courseDataList:[],//内容数据
    }
  },
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
          this.courseDataList=data
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
  .home-container
    display: block;
    padding: 0;
    .course-container
      display: block;
      .course-box
        padding: 36px 0 48px;
        box-box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
        .courder-items
          margin: 0 auto;
          width: 1152px;
          .course-title    
            letter-spacing: 0.6px;
            line-height: 36px;        
            text-align: center;
            .title-text
              display: inline-block;
              margin: 0 24px;
              font-size: 20px;
              font-weight: 600;
              color: #4D555D;
            .title-icon
              display: inline-block;
              vertical-align: bottom;
              width:56px;
              height: 36px;
              background: url("https://www.imooc.com/static/img/index/icon.png") no-repeat;
              background-size: cover;
          .course-wrap
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 24px;
            position: relative;
            .wrap-item
              margin-bottom: 12px;
              width: 216px;
              height: 252px;
              border-radius: 4px;
              .course-banner
                width: 216px;
                height: 120px;
                position: relative;
                border-radius: 8px;
                & img 
                  width: 100%;
                  height: 100%;
                  border-radius: 8px;
                  background-color: #f3f5f7;
              .course-card
                padding: 8px;
                .course-card-name
                  height: 46px;
                  font-size: 16px;
                  font-weight: bold;
                  color: #07111B;
                  line-height: 24px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -webkit-line-clamp: 2;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                .course-card-bottom
                  .course-card-info                  
                    margin-top: 8px;
                    font-size: 12px;
                    color: #93999F;
                    line-height: 24px;
                    font-weight: 400;
                  .course-card-price
                    font-size: 12px;
                    font-weight: bold;
                    color: #4D555D;

              

</style>