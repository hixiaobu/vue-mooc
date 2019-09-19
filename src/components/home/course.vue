<template>   
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
        <course-module :courseList='items.data' module="home"></course-module>
      </div>
    </div>
  </div>
</template>

<script>
import TitleModule from './title.vue'
import CourseModule from '@/base/course/course.vue'
export default {
  name:'Course',
  props:['courseList'],
  components:{
    TitleModule,
    CourseModule
  },
  methods:{   
    // 课程banner背景样式
    getStyle(item) {  return `url(${item.url}) no-repeat center center` },   
  }
}
</script>

<style lang="stylus" scoped>
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