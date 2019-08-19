<template>
  <div class="header-container">
    <div class="header-banner">
      <div class="menu-wrap">
        <!-- 左边menu -->
        <div class="menu-item" v-for="(item,index) in headerList" :key="index" @mouseenter="handleMouseEnter(item)" @mouseleave="handleMouseLeave">
          <span class="menu-title">{{item.title}}</span>
          <i class="iconfont icon-shurukuangxialaanniu_fuzhi-"></i>       
        </div>
      </div>
      <!-- 右边轮播 -->
      <div class="header-box">
        <home-swiper :swiperList="swiperList"></home-swiper>
        <div class="bottom-box">

        </div>
      </div>     
      <!-- menu课程数据 -->
      <div class="submenu" v-show="Object.keys(currentList).length > 0">
        <!-- 课程分类 -->
        <div class="menu-box">
          <div class="subinner-box" v-for="(itemsub,index) in currentList.tags" :key="index">
            <p class="title-box">
              <span>{{itemsub.subtitle}}</span>
              <span class="title-line"></span>
            </p>
            <div class="sub-list">
              <span v-for="(itemlist,index) in itemsub.list" :key="index">{{itemlist}}</span>
            </div>
          </div>
        </div>
        <!-- 热门推荐 -->
        <div class="recomment-box">
          <div class="course-list" v-for="(itemlist,index) in currentList.course" :key="index">
            <img :src="itemlist.img" alt="">
            <div class="course-box">
              <p class="course-title">{{itemlist.title}}</p>
              <div class="course-info">
                <span>¥ {{itemlist.money}}<i class="iconfont icon-dian"></i></span>
                <span>{{itemlist.rank}}<i class="iconfont icon-dian"></i></span>
                <span><i class="iconfont icon-ren"></i>{{itemlist.number}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeSwiper from './swiper.vue'
export default {
  name:'Header',
  props: ['headerList','swiperList'],
  components: {
    HomeSwiper
  },
  data () {
    return {
      currentList: {}
    }
  },
  methods: {
    // 鼠标进入
    handleMouseEnter (item) {
      this.currentList = item.data
    },
    // 鼠标离开
    handleMouseLeave () {
      this.currentList = []
    }
  }
}
</script>

<style lang="stylus" scoped>
.header-container
  padding-top: 32px;
  box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
  background-color: #fff !important;
  .header-banner
    display: flex;
    position: relative;
    margin: auto;
    height: 444px;
    width: 1152px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 8px;
    background-color: #93999f;
    box-shadow: 0 12px 24px 0 rgba(7, 17, 27, 0.2);
    .menu-wrap   
      padding: 12px 0;
      padding-left: 12px;
      box-sizing: border-box;
      width: 216px;
      height: 444px;
      background-color: #2b333b;
      .menu-item
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        height: 60px;
        color: rgba(255, 255, 255, 0.6);
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        cursor: pointer;
        &:hover
          color: #fff;
          background-color: rgba(255, 255, 255, 0.3);
        .menu-title
          font-size: 14px;
        .iconfont
          font-size: 12px;//谷歌最小浏览器字体12px
          transform: scale(0.7);//缩小到原来的0.7倍
    .submenu
      position: absolute;
      left: 216px;
      top: 0px;
      width: 768px;
      height: 444px;
      z-index: 581;
      background: #fff;
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      .menu-box
        padding: 12px 48px 32px;
        background-color: #fff;
        min-height: 150px;
        .subinner-box
          .title-box
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 24px;
            margin-bottom: 12px;
            font-size: 14px;
            font-weight: bold;
            color: #F20D0D;
            line-height: 24px;
            .title-line
              flex: 1;
              margin-left: 12px;
              height: 1px;
              background-color: rgba(77, 85, 93, 0.08);
          .sub-list
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            span 
              margin-right: 24px;
              margin-bottom: 16px;
              font-size: 14px;
              color: #4D555D;
              line-height: 22px;
      .recomment-box
        position: absolute;
        bottom: 0;     
        width: 100%;
        background: #F8FAFC;
        padding-top: 36px;
        box-sizing: border-box;
        .course-list
          display: inline-block;
          // width: 50%;
          height: 60px;
          padding-left: 48px;
          margin-bottom: 36px;
          box-sizing: border-box;
          img 
            display: inline-block;
            width: 64px;
            height: 42px;
            border-radius: 4px;
            background-color: #ccc;
          .course-box
            display: inline-block;
            margin-left: 16px;
            vertical-align: top;
            .course-title
              width: 232px;
              font-size: 12px;
              color: #07111B;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            .course-info
              display: inline-block;
              line-height: 20px;
              span 
                font-size: 12px;
                color: #4D555D;
                &:nth-child(1)
                  font-weight: bold;
                .iconfont
                  font-size: 14px;
                  line-height: 20px;
                .icon-ren
                  margin-right: 2px;
                  font-size: 10px;
    .header-box
      flex: 1;
      width: 936px;
      .bottom-box
        position: relative;
        height: 128px;
        padding: 0 18px;
        overflow: hidden;
        box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
        background-color: #fff;
        text-align: center;
</style>