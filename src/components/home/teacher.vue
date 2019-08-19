<template>
  <div class="teacher-container">
    <div class="teacher-box">
      <!-- 标题 -->
      <title-module  title="慕／课／精／英／名／师" left="center -432px" right="center -468px" color="#ffffff"></title-module>
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <!-- <swiper-slide>I'm Slide 1</swiper-slide>
          <swiper-slide>I'm Slide 2</swiper-slide>
          <swiper-slide>I'm Slide 3</swiper-slide>
          <swiper-slide>I'm Slide 4</swiper-slide>
          <swiper-slide>I'm Slide 5</swiper-slide>
          <swiper-slide>I'm Slide 6</swiper-slide>
          <swiper-slide>I'm Slide 7</swiper-slide> -->
          <swiper-slide v-for="item of teacherList" :key="item.name">
            <img class="swiper-img" :src="item.avatar" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 向左箭头 -->
          <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
          <!-- 向右箭头 -->
          <!-- <div class="swiper-button-next" slot="button-next"></div> -->
          <!-- 底部滚动条 -->
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import TitleModule from './title.vue'
export default {
  name:'Teacher',
  props: {
    teacherList: Array
  },
  components: {
    TitleModule
  },
  data () {
    return {
      swiperOption: {
          pagination:".swiper-pagination",
          loop:true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .teacher-container
    height: 408px;
    background: #f3f5f7 url("https://www.imooc.com/static/img/index/eliteTbg.jpg") no-repeat center center;
    background-size: cover;
    .teacher-box
      position: relative;
      padding: 36px 0 48px;
      margin: 0 auto;
      width: 1152px;
      .title
       color: #ffffff;
      .wrapper >>> .swiper-pagination-bullet-active
        background :#fff !important
      .wrapper
        overflow :hidden
        width :100%
        height :0
        padding-bottom :31.25%
        background-color :#eee
        .swiper-img
          width :100%
          height: 100%;
</style>
