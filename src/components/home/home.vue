<template>
  <div class="home-container">
    <!-- 课程模块 -->
    <div class="course-container">
      <div  class="course-box"  v-for="(items,index) in courseDataList" :key="index">
        <div class="course-items">
          <!-- 课程标题 -->
          <div class="course-title">
            <span class="title-icon" :style="{'background-position':items.leftIcon}"></span>
            <div class="title-text">{{items.title}}</div>
            <span class="title-icon" :style="{backgroundPosition:items.rightIcon}"></span>
          </div>
          <!-- 课程banner -->
          <div class="course-banner" v-if="items.banner">
            <div class="banner-item" :style="{background:getStyle(itemb)}"  v-for="itemb in items.banner" :key="itemb.index">
              <h3 class="banner-title">{{itemb.title}}</h3>
              <p class="banner-subtitle">{{itemb.subtitle}}</p>
            </div>
          </div>
          <!-- 课程数据 -->
          <div class="course-wrap">
            <div class="wrap-item" v-for="item in items.data" :key="item.index">
              <course-script class="course-script" :script="item.script" v-if="item.script"></course-script>
              <course-rate class="course-rate" :rate="item.process" v-if="item.process"></course-rate>
              <div class="course-img">
                <img :src="item.img" alt />
                <div class="course-label">
                  <label v-for="itemtag in item.tags" :key="itemtag.index">{{itemtag}}</label>
                </div>
              </div>
              <div class="course-card">
                <h3 class="course-card-name">{{item.name}}</h3>
                <div class="course-card-bottom">
                  <div class="course-card-info">
                    <span>{{item.type}}</span>
                    <span>{{item.rank}}</span>
                    <span>
                      <i class="iconfont icon-ren"></i>
                      {{item.number}}
                    </span>
                    <span>
                      <course-star :score="item.star" v-if="item.star"></course-star>
                    </span>
                  </div>
                  <div class="course-card-price">{{item.price==0?"免费":"¥ "+item.price}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 全明星模块 -->
    <div class="allstar-container">
      <div class="allstar-box">
        <!-- 标题 -->
        <div class="allstar-title">
          <span class="title-icon left"></span>
          <div class="title-text">吊／炸／天／全／明／星</div>
          <span class="title-icon right"></span>
        </div>
        <!-- 内容 -->
        <div class="best-wrap">
          <div class="best-item" v-for="itembest in allstarDataList.best" :key="itembest.index">
            <div class="item-top">
              <!-- 皇冠 -->
              <span></span>
              <img :src="itembest.avatar" alt="">
            </div>
            <p class="item-center">{{itembest.name}}</p>
            <p class="item-bottom">{{itembest.type.text}}</p>
          </div>
        </div>

      </div>
    </div>
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
import CourseScript from '@/base/common/script.vue'
import CourseRate from '@/base/common/rate.vue'
import CourseStar from '@/base/common/star.vue'
export default {
  name: "Home",
  components: {
    CourseScript,
    CourseRate,
    CourseStar
  },
  data() {
    return {
      courseDataList: [], //课程数据
      allstarDataList: [],//全明星数据
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
    // 两种请求方式
    // 获取首页导航信息
    async getHomeNavData() {
      let { code, data } = await getHomeNav();
      if (code === ERR_OK) {
        console.log(data);
      }
    },
    // 获取首页课程信息
    getHomeCourseData() {
      getHomeCourse().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          console.log(data);
          this.courseDataList = data;
        }
      });
    },
    // 获取首页轮播数据
    getHomeSliderData() {
      getHomeSlider().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          console.log(data);
        }
      });
    },
    // 获取猿问和手记
    getHomeArticleData() {
      getHomeArticle().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          console.log(data);
        }
      });
    },
    // 获取精彩讲师接口
    getHomeTeacherData() {
      getHomeTeacher().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          console.log(data);
        }
      });
    },
    // 获取全明星接口
    getHomeAllstarData() {
      getHomeAllstar().then(res => {
        let { code, data } = res;
        if (code === ERR_OK) {
          console.log(data);
          this.allstarDataList=data
        }
      });
    },
    // 背景样式
    getStyle(item) {  return `url(${item.url}) no-repeat center center` }
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
            width: 56px;
            height: 36px;
            background: url('https://www.imooc.com/static/img/index/icon.png') no-repeat;
            background-size: cover;        
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
        .course-wrap 
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          position: relative;
          .wrap-item 
            position: relative;
            margin-bottom: 12px;
            width: 216px;
            height: 252px;
            border-radius: 4px;
            cursor: pointer;
            &:hover 
              .course-card .course-card-name 
                color: #F20D0D !important; 
            .course-script
              position: absolute;
              top: 8px;
              left: -8px;
              padding: 0 8px;
              border: 2px solid #FFFFFF;
              border-radius: 12px;
              font-family: 'dincondm';
              line-height: 20px;
              background-color: #FFAA00;
              background-image: linear-gradient(90deg, #ffaa00 17%, #f76b1c 100%);
              z-index: 4;
            .course-rate
              position: absolute;
              right: -7px;
              top: 8px;
              width: 42px;
              text-align: center;
              line-height: 20px;
              background-image: linear-gradient(-90deg, #65da98 0%, #0cba4d 100%);
              border: 2px solid #FFFFFF;
              border-radius: 12px;
              box-sizing: border-box;
              z-index: 1;
            .course-img 
              width: 216px;
              height: 120px;
              position: relative;
              border-radius: 8px;
              img 
                width: 100%;
                height: 100%;
                border-radius: 8px;
                background-color: #f3f5f7;   
              .course-label
                position: absolute;
                bottom: 6px;
                left: 8px;
                font-size: 12px;
                color: #FFFFFF;
                line-height: 16px;  
                label 
                  display: inline-block;
                  background: rgba(28, 31, 33, 0.6);
                  border-radius: 4px;
                  padding: 4px 8px;
                  margin-right: 4px;
                  margin-bottom: 2px;
                  font-weight: 200;    
                  &:nth-last-child
                    margin-right: 0;               
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
                  display: flex;
                  justify-content: space-between;
                  margin-top: 8px;
                  font-size: 12px;
                  color: #93999F;
                  line-height: 24px;
                  font-weight: 400;
                  span                 
                    .iconfont 
                      font-size: 12px;
                      color: #93999F;
                .course-card-price 
                  font-size: 12px;
                  font-weight: bold;
                  color: #4D555D;

  
  
  
  
  
  .allstar-container    
    display: block;
    .allstar-box
      margin: 0 auto;
      padding: 36px 0 48px;
      width: 1152px;
      .allstar-title
        position: relative;
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
          width: 56px;
          height: 36px;
          background: url("https://www.imooc.com/static/img/index/icon.png") no-repeat;
          background-size: cover;
        .left
          background-position: center -504px;
        .right
          background-position: center -540px;
      .best-wrap
        display: flex;
        justify-content: center;
        margin: 38px auto 48px;
        .best-item
          width: 136px;
          text-align: center;       
          & .item-top span:nth-child(1)
            background-position: center 0;       
          & .item-top span:nth-child(2)
            background-position: center -18px;
          & .item-top span:nth-child(3)
            background-position: center -36px;
          & .item-top span:nth-child(4)
            background-position: center -54px;
          .item-top
            position: relative;
            margin: 0 auto;
            width: 56px;
            height: 56px;
            span 
              position: absolute;
              top: -16px;
              left: 15px;
              width: 26px;
              height: 18px;
              background: url("https://www.imooc.com/static/img/index/champion.png") no-repeat
              background-size: 100%;
            img 
              position: relative;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
          .item-center
            margin-top: 8px;
            font-size: 14px;
            color: #07111B;
            line-height: 16px;
          .item-bottom
            font-size: 12px;
            color: #93999F;
            font-weight: 400;








</style>