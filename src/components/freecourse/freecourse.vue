<template>
  <div class="course-container">
    <!-- 头部筛选列表 -->
    <div class="header-box">
      <div class="top-box">
        <div class="top-logo"><img src="https://www.imooc.com/static/img/course/logo-course.png" alt=""></div>
        <div class="top-banner"><img src="https://www.imooc.com/static/img/course/course-top.png" alt=""></div>
        <div class="search-box">
          <input type="text" placeholder="搜索感兴趣的内容" autocomplete="off">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
      <div class="classify-box" v-if="classifyList && classifyList.length>0">
        <!-- 方向 -->
        <div class="nav-row" v-for="(items,index) in classifyList" :key="index">
          <span>{{items.type}}：</span>
          <ul>
            <li v-for="(item,index) in items.data" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCourseNav,getCourseList } from '@/api/course.js'
import { ERR_OK } from '@/api/config.js'
export default {
  name:'FreeCourse',
  data () {
    return {
      classifyList:[],//头部分类数据
      directioncode:"全部",
      categorycode:"全部",
      difficultcode:"全部"
    }
  },
  mounted (){
    this.getCourseNavData();
  },
  methods:{
    // 获取课程导航
    getCourseNavData(){
      getCourseNav().then(res=>{
        let { code, data }=res
        if(code==ERR_OK){
          this.classifyList=data
          // 数据处理
          this.getTypeData(this.directioncode);
        }
      })  
    },
    //组合导航数据
    getTypeData(type){
      let templist=this.classifyList[1]
      let category=[]
      templist.data.forEach(items => {
        if(type=="全部" || type==items.direction){
          items.data.forEach(item => {
            category.push(item)
          })
        }   
      });
      templist.data=category
      this.classifyList[1]=templist
    },
  }
}
</script>
<style lang="stylus" scoped>
  .course-container
    display: block;
    .header-box
      padding-bottom: 12px;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(28,31,33,.1);
      .top-box
        margin: 0 auto;
        padding: 20px 0 8px;
        max-width: 1386px;
        // clear: both;
        border-bottom: 1px solid rgba(28,31,33,.2);
        .top-logo
          display: inline-block;
          cursor: pointer;
        .top-banner
          display: inline-block;
          margin-left: 16px;
          width: 96px;
          height: 60px;
          img 
            width: 100%;
            height: 100%;
        .search-box
          margin-top: 12px;
          float: right;
          height: 36px;
          background: #f3f5f6;
          border-radius: 8px;
          border: 0;
          input 
            padding: 0 16px;
            width: 466px;
            color: #1c1f21;
            height: 36px;
            line-height: 36px;
            font-size: 14px;
            background-color: transparent;
            border: 0;
            outline: none;
            box-sizing: border-box;
          .iconfont
            display: inline-block;
            vertical-align: middle;
            padding-right 20px;
            font-size: 20px;
            color: #9199a1;
            text-align: right;
            cursor: pointer;
      .classify-box  
        margin: 0 auto;
        max-width: 1386px;
        .nav-row
          padding: 16px 0 5px;
          border-bottom: 1px solid #edf1f2;
          &:nth-child(2) ul
            max-height: 132px;
            overflow: hidden;
          span 
            width: 52px;
            line-height: 30px;
            font-weight: 700;
            font-size: 14px;
            color: #07111b;
            text-align: left;
          ul 
            display: inline-block;
            vertical-align: top;
            width: 1334px;
            li
              display: inline-block;
              margin: 0 4px 10px;
              padding: 10px;
              line-height: 14px;
              font-size: 14px;
              &:hover
                color: #ec1500;
              &:active
                background: rgba(242,13,13,.06);
                border-radius: 6px;
                font-weight: 700;
                color: #f20d0d;


</style>