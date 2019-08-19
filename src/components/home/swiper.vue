<template>
  <div class="wrapper" v-if="swiperList && swiperList.length">
    <swiper :options="swiperOption">
      <!-- <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide> -->

      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.img" />
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
</template>
<script>
export default {
  props:{
    swiperList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
        loop:true
      }
    }
  },
  // computed:{
  //   showSwiper(){
  //     return this.swiperList && this.swiperList.length
  //   }
  // }

}
</script>
<style lang="stylus" scoped>
// >>> 穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background :#fff !important
  .wrapper >>> .swiper-pagination
    bottom: 20px;
    padding-right: 24px;
    width: 100%;
    text-align: right;
    box-sizing: border-box;
    line-height: 12px;
  .wrapper >>> .swiper-pagination-bullet
    background: rgba(7, 17, 27, 0.8);
    opacity: unset;
  .wrapper
    overflow: hidden;
    width: 100%;
    height: 316px;
    background-color: #eee;
    .swiper-img
      width: 100%
      height: 100%;
</style>