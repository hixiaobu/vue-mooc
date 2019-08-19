<template>
  <div class="home-container">
    <!-- 头部导航 -->
    <header-module :headerList="headerList"></header-module>
    <!-- <home-swiper :swiperList="swiperList"></home-swiper> -->
    <!-- 课程模块 -->
    <div class="course-container">
      <div  class="course-box"  v-for="(items,index) in courseList" :key="index">
        <div class="course-items">
          <!-- 课程标题 -->
          <title-module class="course-title" :title="items.title" :left="items.leftIcon" :right="items.rightIcon"></title-module>
          <!-- 课程banner -->
          <div class="course-banner" v-if="items.banner">
            <div class="banner-item" :style="{background:getStyle(itemb)}"  v-for="(itemb,index) in items.banner" :key="index">
              <h3 class="banner-title">{{itemb.title}}</h3>
              <p class="banner-subtitle">{{itemb.subtitle}}</p>
            </div>
          </div>
          <!-- 课程数据 -->
          <course-module :courseList='items.data'></course-module>
        </div>
      </div>
    </div>
    <!-- 精彩手记及猿问 -->
    <div class="article-container">
      <article-module :articleList="articleList"></article-module>
    </div>
    <!-- 慕课精英名师 -->
    <teacher-module :teacherList="teacherList"></teacher-module>
    <!-- 全明星模块 -->
    <allstar-module :allstarList="allstarList"></allstar-module>
  </div>
</template>

<script>
import {
  getHomeCourse,
  getHomeNav,
  getHomeSlider,
  getHomeArticle,
  getHomeTeacher,
  getHomeAllstar
} from "@/api/home.js"
// import * as API from '@/api/home.js'  全部接口取别名  API.getHomeCourse
import { ERR_OK } from "@/api/config.js"
import TitleModule from './title.vue'
import HeaderModule from './header.vue'
import CourseModule from '@/base/course/course.vue'
import AllstarModule from './allstar.vue'
import ArticleModule from './article.vue'
import TeacherModule from './teacher.vue'
import HomeSwiper from './swiper.vue'
export default {
  name: "Home",
  components: {
    TitleModule,
    HeaderModule,
    CourseModule,
    AllstarModule,
    ArticleModule,
    TeacherModule,
    HomeSwiper
  },
  data() {
    return {
      headerList: [],//头部数据
      courseList: [], //课程数据
      allstarList: [],//全明星数据
      articleList:[],//精彩讲师及猿问
      swiperList:[],//头部轮播数据
      teacherList:[]//慕课精英名师
    };
  },
  mounted() {
    this.getHomeNavData();
    this.getHomeCourseData();
    this.getHomeArticleData();
    this.getHomeTeacherData();
    this.getHomeAllstarData();
  },
  methods: {
    // 两种请求方式
    // 获取首页导航信息
    async getHomeNavData() {
      let { code, data } = await getHomeNav();
      if (code === ERR_OK) {
        console.log(data);
        this.headerList=data;
      }
    },
    // 获取首页课程信息
    getHomeCourseData() {
      getHomeCourse().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          this.courseList = data;
        }
      });
    },
    // 获取猿问和手记
    getHomeArticleData() {
      getHomeArticle().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          this.articleList=data;
        }
      });
    },
    // 获取精彩讲师接口
    getHomeTeacherData() {
      getHomeTeacher().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          this.teacherList=data;
        }
      });
    },
    // 获取全明星接口
    getHomeAllstarData() {
      getHomeAllstar().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          this.allstarList=data
        }
      });
    },
    // 课程banner背景样式
    getStyle(item) {  return `url(${item.url}) no-repeat center center` },
    
  }
};
</script>

<style lang="stylus" scoped>
.home-container 
  display: block;
  padding: 0;
  background-color: #f8fafc !important;
  .course-container 
    display: block; 
    .course-box 
      padding: 36px 0 48px;
      box-shadow: 0 2px 4px 0 rgba(7, 17, 27, 0.06);
      &:nth-child(2n+1)
        background-color: #ffffff !important;
        box-box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06) !important;   
      .course-items 
        margin: 0 auto;
        width: 1152px;
        .course-title   
          margin-bottom: 24px; 
        .course-banner
          display: flex;
          align-items:center;
          justify-content: space-between;
          margin-bottom: 36px;
          .banner-item
            display: block;
            width: 567px;
            height: 108px;
            border-radius: 8px;
            overflow: hidden;
            padding: 30px 0;
            box-sizing: border-box;
            text-align: center;
            .banner-title
              font-size: 20px;
              font-weight: 700;
              color: #FFFFFF;
              letter-spacing: 2px;
              line-height: 28px;
              text-shadow: 0 2px 2px rgba(7, 17, 27, 0.4);
            .banner-subtitle
              margin-top: 4px;
              font-size: 12px;
              color: #FFFFFF;
              line-height: 16px;
              text-shadow: 0 2px 2px rgba(7, 17, 27, 0.4);  
</style>