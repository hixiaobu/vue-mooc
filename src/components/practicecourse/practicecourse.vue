<template>
  <div class="course-container">
    <!-- header -->
    <div class="header-box">
      <div class="header-wrap">
        <div class="header-icon">
          <img src="https://coding.imooc.com/static/module/index/img/header-icon1.png" alt="">
        </div>
        <div class="header-desc">
          <img src="https://coding.imooc.com/static/module/index/img/header-icon2.png?222" alt="">
        </div>
        <div class="header-search">
          <div class="search-box">
            <input type="text" placeholder="搜索感兴趣的实战课程内容" @focus="getFocus" @blur="getBlur">
            <span><i class="iconfont icon-sousuo"></i></span>
            <ul class="search-result" v-if="isShow">
              <li class="search-item" v-for="(item,index) in CommonSearchList" :key="index">{{item}}</li>
            </ul>
          </div>
          <div class="hot-box">
            <span>热搜：</span>
            <ul class="hot-warp">
              <li class="hot-item" v-for="(item,index) in CommonHotList" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- header-nav -->
    <div class="header-nav">
      <div class="nav-box">
        <ul class="nav-wrap" v-if="LessonNav && LessonNav.length>0">
          <li class="nav-item" :class="{active:navindex===index}" v-for="(item,index) in LessonNav[0].data" :key="index" @click="handleChangeNav(index,item)">{{item}}</li>
        </ul>
      </div>
      <div class="skill-box" :class="{boxhover:ishover===true}">
        <div  class="skill-wrap" :class="{skillhover:ishover===true}" @mouseenter="handleMouseEnter($event)" @mouseleave="handleMouseLeave">
          <ul>
            <li class="skill-item" :class="{active:categoryindex===index}" v-for="(item,index) in categoryList" :key="index">{{item}}</li>
          </ul>
        </div>
        
      </div>
    </div>
    <!-- 课程列表 -->
    <div class="course-box">
      <!-- screening-box -->
      <div class="screening-box">
        <ul>
          <li :class="{active:coursetoolindex===index}" v-for="(item,index) in toolList" :key="index" @click="handleBarClick(index)">{{item}}</li>
        </ul>
        <span>课程上新预告</span>
      </div>
      <!-- 课程模块 -->
      <course-module :courseList="LessonList" module="practice"></course-module>     
      <!-- footer-course -->
      <div class="footer-box">
        <span class="footer-item python" title="python"></span>
        <span class="footer-item vue" title="vue"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { getCommonHot, getCommonSearch } from '@/api/common.js'
import { ERR_OK } from "@/api/config.js"
import { getLessonNav, getLessonList } from '@/api/course.js'
import CourseModule from '@/base/course/course.vue'
export default {
  name:'PracticeCourse',
  components:{
    CourseModule
  },
  data () {
    return {
      CommonHotList:[],//热门数据
      CommonSearchList:[],//搜索历史
      LessonNav:[],//导航数据
      LessonList:[],//课程列表数据
      isShow:false,//搜索历史数据
      navindex:0,//导航选中项
      categoryList:[],//分类数据
      categoryindex:0,//分类索引
      toolList:[],//课程工具栏
      coursetoolindex:0,//课程工具栏索引
      ishover:false
    }
  },
  created(){
    this.toolList=["默认排序","最新","销量","升级"]
  },
  mounted(){
    this.getCommonHotData()
    this.getCommonSearchData()
    this.getLessonNavData()
    this.getLessonListData()
  },
  methods:{
    // 热门数据
    getCommonHotData(){
      getCommonHot().then(res=>{
        let { code, data }=res
        if(code===ERR_OK){
          this.CommonHotList=data
        }
      })
    },
    // 历史搜索数据
    getCommonSearchData(){
      getCommonSearch().then(res=>{
        let { code, data }=res
        if(code===ERR_OK){
          this.CommonSearchList=data
        }
      })
    },
    // 获取实战课程导航
    getLessonNavData(){
      getLessonNav().then(res=>{
        let { code, data }=res
        if(code===ERR_OK){
          this.LessonNav=data
          this.handleChangeNav(0,'全部')
        }
      })
    },
    // 获取实战课程列表 
    getLessonListData(){
      getLessonList().then(res=>{
        let { code, data }=res
        if(code==ERR_OK){
          this.LessonList=data
          if(this.toolList[this.coursetoolindex]=="最新"){

          }else if(this.toolList[this.coursetoolindex]=="销量"){
            this.LessonList.sort(this.sortNumber)
          }else if(this.toolList[this.coursetoolindex]=="升级"){
            // this.LessonList.sort(this.rank)
          }
        }
      })
    },
    // input获取焦点
    getFocus(){
      this.isShow=true
    },
    // input失去焦点
    getBlur(){
      this.isShow=false
    },
    // 切换导航
    handleChangeNav(index,category){
      this.navindex=index
      let navtitle=this.LessonNav[0].data
      let navskill=this.LessonNav[1].data
      navskill.forEach(item=>{
        if(index==0){
          item.data.forEach(oneitem=>{
            this.categoryList.push(oneitem)
          })
          return
        }
        else if(category==item.direction){
          this.categoryList=item.data
          // 向队首添加
          this.categoryList.unshift('不限')
          return
        }
      })
    },
    // 技能 鼠标移入事件
    handleMouseEnter($event){
      if(this.navindex==0){
        this.ishover=true
      }
    },
    // 鼠标离开事件
    handleMouseLeave(){
      this.ishover=false
    },
    // 销量数据排序
    sortNumber(a,b)
    {
      return b.number - a.number
    },
    // 排序事件
    handleBarClick(index){
      this.coursetoolindex=index
      this.getLessonListData()
    }
  }
}
</script>
<style lang="stylus" scoped>
.course-container
  display: block;
  .header-box
    height: 132px;
    background: url('https://coding.imooc.com/static/module/index/img/sz-header-bk.png') no-repeat;
    background-size: cover;
    box-sizing: border-box;
    .header-wrap
      margin: 0 auto;
      width: 1152px;
      .header-icon
        margin-top: 17px;
        float: left;
        width: 196px;
        height: 96px;
        cursor: pointer;
        img 
          width: 100%;
          height: 100%;
      .header-desc
        float: left;
        margin-top: 17px;
        margin-left: 24px;
        height: 96px;
        min-width: 48px;
        max-width: 360px;
        img 
          height: 96px;
      .header-search
        float: right;
        position: relative;
        margin: 36px auto 0;
        width: 560px;
        border-radius: 8px;
        .search-box
          width: 560px;
          height: 48px;
          input 
            float: left;
            width: 512px;
            height: 48px;
            padding: 0 16px;
            font-size: 16px;
            color: #07111b;
            line-height: 48px;
            box-sizing: border-box;
            border-radius: 8px 0 0 8px;
            outline: none;
          span 
            float: left;
            background: #c80;
            width: 48px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            font-size: 16px;
            color: #fff;
            border-radius: 0 8px 8px 0;
            .iconfont
              font-size: 24px;
              color: #fff;
              line-height: 48px;
          .search-result
            position: absolute;
            top: 49px;
            left: 0;
            right: 48px;
            padding-bottom: 16px;
            background: #fff;
            box-shadow: 0 8px 16px 0 rgba(7,17,27,.1);
            border-radius: 6px;
            z-index: 2;
            .search-item
              display: block;
              width: 100%;
              height: 48px;
              transition: .3s background linear;
              padding: 12px 16px;
              box-sizing: border-box;
              font-size: 14px;
              color: #4d555d;
              line-height: 24px;
              cursor: pointer;
              z-index: 1;
              &:hover
                background: #f3f5f7;
                color: #07111b;
        .hot-box
          margin-top: 8px;
          font-size: 12px;
          color: rgba(255,255,255,.8);
          line-height: 18px;
          span 
            margin-right: 12px;
          .hot-warp
            display: inline-block;  
            .hot-item
              display: inline-block;
              margin-right: 24px;
              &:nth-last-child(1)
                margin-right: 0;
  .header-nav
    position: relative;
    .nav-box
      padding: 16px 0;
      height: 72px;
      background: #fff;
      box-shadow: 0 8px 16px 0 rgba(28,31,33,.1);
      box-sizing: border-box;
      z-index: 1;
      .nav-wrap
        display: block;
        margin: 0 auto;
        padding-left: 12px;
        width: 1152px;
        height: 40px;
        box-sizing: border-box;
        .nav-item
          position: relative;
          display: inline-block;
          float: left;
          margin-right: 46px;
          font-size: 16px;
          color: #07111b;
          line-height: 40px;
          height: 40px;
          font-weight: 700;
          &:hover
            color: #c80;
          &:nth-last-child(1)
            margin-right: 0;
          &.active
            color: #c80;
            &:before
              content: ' ';
              position: absolute;
              left: 50%;
              bottom: 0;
              background: #c80;
              width: 16px;
              height: 3px;
              margin-left: -8px;
    .boxhover
      &:hover
        height: 132px;
    .skill-box
      position: relative;
      padding: 24px 0 10px;
      width:100%;
      .skillhover
        &:hover
          position: absolute;
          max-height: 274px;
          height: 274px;
          z-index: 5;
          box-shadow: rgba(28,31,33,0.2) 0px 16px 16px 0px;
      .skill-wrap
        display: block;
        width: 100%;
        max-height: 132px;
        overflow: hidden;
        background: #f8fafc; 
        ul
          margin: 0 auto;
          width: 1152px;
          max-height: 132px;
          .skill-item
            display: inline-block;
            margin-right: 20px;
            margin-bottom: 12px;
            padding: 0 12px;
            font-size: 14px;
            color: #4d555d;
            line-height: 32px;
            border-radius: 6px;
            cursor: pointer;
            &:hover
              background: #d9dde1;
            &:nth-last-child(1)
              margin-right: 0;
            &.active
              color: #c80;
              background: rgba(204,136,0,.1);
  .course-box
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1152px;
    padding-bottom: 70px;
    border-top: 1px solid #d9dde1;
    .screening-box
      position: relative;
      padding: 20px 12px;
      width: 100%;
      box-sizing: border-box;
      ul
        display: inline-block;
        li
          display: inline-block;
          margin-right: 12px;
          padding: 4px 12px;
          font-size: 12px;
          line-height: 16px;
          color: #4d555d;
          height: 16px;
          border-radius: 12px;
          cursor: pointer;
          &:nth-last-child(1)
            margin-right: 0;
          &:hover
            color: #07111b;
          &.active
            background: #545c63;
            color: #fff;
      span 
        float: right;
        display: inline-block;
        padding: 0 12px;
        background: rgba(204,136,0,.1);
        border-radius: 12px;
        font-size: 12px;
        color: #c80;
        text-align: left;
        line-height: 24px;
        cursor: pointer;
    .footer-box
      position: relative;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      width: 1152px;
      box-sizing: border-box;
      margin-top: 48px;
      .footer-item
        display: block;
        width: 567px;
        height: 108px;
        border-radius: 8px;
        background-size: cover;
        box-shadow: 0 8px 16px rgba(7,17,27,.1);
        cursor: pointer;
      .python
        background-image: url('https://img.mukewang.com/5b86030f0001db9e05900120.jpg');
      .vue
        background-image: url('https://img1.mukewang.com/5b568bc40001b45905900120.jpg');
</style>
