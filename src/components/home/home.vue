<template>
  <div class="home-container">
    <!-- 头部背景 -->
    <div class="bg-mask" :style="getBackgroundImage"></div>
    <!-- 头部导航 -->
    <header-module :headerList="headerList" :swiperList="swiperList" @swiper="handleSwiper"></header-module>
    <!-- 课程模块 -->
    <course-module :courseList="courseList"></course-module>
    <!-- 精彩手记及猿问 -->
    <article-module :articleList="articleList"></article-module>
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
import CourseModule from './course.vue'
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
      teacherList:[],//慕课精英名师
      currentSwiper:'' //当前轮播图片
    };
  },
  mounted() {
    this.getHomeNavData();
    this.getHomeSliderData();
    this.getHomeCourseData();
    this.getHomeArticleData();
    this.getHomeTeacherData();
    this.getHomeAllstarData();
  },
  methods: {
    // 获取子组件header传递的背景图片
    handleSwiper(img){
      this.currentSwiper=img
    },
    // 两种请求方式
    // 获取首页导航信息
    async getHomeNavData() {
      let { code, data } = await getHomeNav();
      if (code === ERR_OK) {
        this.headerList=data;
      }
    },
    // 获取首页轮播数据
    getHomeSliderData() {
      getHomeSlider().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          this.swiperList=data;
        }
      });
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
    } 
  },
  computed:{   
    // 头部背景
    getBackgroundImage() {
      return {
        'background-image':`url(${this.currentSwiper})`
      }
    },
  }
};
</script>

<style lang="stylus" scoped>
.home-container 
  display: block;
  padding: 0;
  background-color: #f8fafc !important;
  .bg-mask
    position: absolute;
    top: 0;
    background-size: cover;
    width: 100%;
    height: 180px;
    opacity: 0.3;
    filter: blur(100px); 
</style>