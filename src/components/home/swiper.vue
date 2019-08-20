<template>
  <div class="wrapper" v-if="showSwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.img" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 向左箭头 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <!-- 向右箭头 -->
      <div class="swiper-button-next" slot="button-next"></div>
      <!-- 底部滚动条 -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>
<script>
export default {
  props:{
    swiperList: Array
  },
  data () {
    let _self=this
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable :true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay :true,
        loop :true,
        on: {
          //切换结束时
          slideChangeTransitionEnd:function(){
            //  alert(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            // 向父组件header传递背景图片
             _self.$emit('swiper',_self.swiperList[this.activeIndex-1].img)
          },
        },
      }
    }
  },
  computed:{
    showSwiper(){
      return this.swiperList && this.swiperList.length
    }
  }

}
</script>
<style lang="stylus" scoped>
// >>> 穿透
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important;
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
    >>> .swiper-button-prev
      position: absolute;
      left: 0;
      width: 36px;
      height: 60px;
      border-radius: 0 4px 4px 0;
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
      background-size: 16px 16px;
      opacity: 0.6;
      &:hover
        background-color: rgba(7, 17, 27, 0.6);
        opacity: 1;
    >>> .swiper-button-next
      position: absolute;
      right : 0;
      width: 36px;
      height: 60px;
      border-radius: 4px 0 0 4px;
      background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
      background-size: 16px 16px;
      opacity: 0.6;
      &:hover
        background-color: rgba(7, 17, 27, 0.6);
        opacity: 1;
    .swiper-img
      width: 100%
      height: 100%;
</style>