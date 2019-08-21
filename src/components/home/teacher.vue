<template>
  <div class="teacher-container">
    <div class="teacher-box">
      <!-- 标题 -->
      <title-module  title="慕／课／精／英／名／师" left="center -432px" right="center -468px" color="#ffffff"></title-module>
      <div class="wrapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(pitem,index) of pages" :key="index">
            <div class="swiper-item" v-for="item in pitem" :key="item.name">
              <img class="headimg" :src="item.avatar" alt="">
              <p class="name">{{item.name}}</p>
              <p class="label">{{item.label}}</p>
              <p class="introduction">{{item.introduction}}</p>
            </div>
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
    </div>
  </div>
</template>
<script>
import TitleModule from './title.vue'
const SWIPER_LEN=5;//每页swiper显示的数量
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
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay:true,
      }
    }
  },
  computed:{
    pages () {
      const pages=[]
      this.teacherList.forEach((item,index) => {
        // 向下取整 0到4(前5个的pindex都为0) 
        let pindex=Math.floor(index/SWIPER_LEN)
        // 如果当前索引项不存在，则置一个空项
        if(!pages[pindex]){
          pages[pindex]=[]
        }
        pages[pindex].push(item)
      })
      return pages;
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
      .wrapper
        position: relative;
        width: 100%;
        height: 325px;
        >>> .swiper-pagination
          padding-top: 16px;
          bottom: 10px;
          width: 100%;
          text-align: center;
          box-sizing: border-box;
        >>> .swiper-pagination-bullet
          background: #000;
          opacity: 0.2;
        >>> .swiper-pagination-bullet-active
          background: #fff !important; 
          opacity: 1 !important;
        >>> .swiper-button-prev
          position: absolute;
          left: -50px;
          width: 48px;
          height: 48px;
          cursor: pointer;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);          
          background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l4.2%2C4.2L8.4%2C22l17.8%2C17.8L22%2C44L0%2C22z'%20fill%3D'%239199A1'%2F%3E%3C%2Fsvg%3E");
          background-size: 16px 16px;
          &:hover
            background-color: #fff;
            box-shadow: 0 2px 4px 0 rgba(28, 31, 33, 0.1);
        >>> .swiper-button-next
          position: absolute;
          right : -50px;
          width: 48px;
          height: 48px;
          cursor: pointer;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);   
          background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L5%2C44l-4.2-4.2L18.6%2C22L0.8%2C4.2L5%2C0z'%20fill%3D'%239199A1'%2F%3E%3C%2Fsvg%3E");
          background-size: 16px 16px;
          &:hover
            background-color: #fff;
            box-shadow: 0 2px 4px 0 rgba(28, 31, 33, 0.1);
        .swiper-container
          position: unset;
          height: 100%;
          .swiper-wrapper
            position: unset;
          .swiper-slide
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
            .swiper-item
              position: relative;
              width: 216px;
              height: 248px;
              box-sizing: border-box;
              text-align: center;
              background: rgba(255, 255, 255, 0.8);
              box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.05);
              border-radius: 12px;
              &:hover
                background-color: #fff;
                box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
                .headimg
                  transform-origin: top;
                  width: 60px;
                  height: 60px;
                  // transform: scale(0.6);
                .name,.label
                  display: none;
                .introduction
                  // margin-top: -20px;
                  height: 168px;
                  color: #07111B;
              p
                display: block;
                font-size: 12px;
                color: #4D555D;
                line-height: 24px;
              .headimg
                margin-top: -20px;
                width: 96px;
                height: 96px;
                border-radius: 50%;
                transition: transform 0.5s ease-in-out;
              .name
                display: block;
                margin-top: 12px;
                padding: 0 36px;
                font-size: 16px;
                color: #07111b;
                font-weight: 700;
                line-height: 24px;
                white-space: nowrap;
                text-overflow: ellipsis;
                word-break: break-all;
                word-wrap: break-word;
                overflow: hidden;
              .label
                display: block;
              .introduction
                margin-top: 16px;
                height: 72px;
                padding: 0 36px;
                text-overflow: ellipsis;
                word-wrap: break-word;
                overflow: hidden;
                text-overflow: -o-ellipsis-lastline;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                text-align: justify;
                word-break: break-all;
                font-weight: 400;
                transition: all  0.5s liner;
</style>
