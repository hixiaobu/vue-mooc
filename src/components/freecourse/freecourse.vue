<template>
  <div class="course-container">
    <!-- 头部筛选列表 -->
    <div class="header-box">
      <div class="top-box">
        <div class="top-logo"><img src="https://www.imooc.com/static/img/course/logo-course.png" alt=""></div>
        <div class="top-banner"><img src="https://www.imooc.com/static/img/course/course-top.png" alt=""></div>
        <div class="search-box">
          <input type="text" placeholder="搜索感兴趣的内容" autocomplete="off" @focus="getFocus" @blur="getBlur">
          <i class="iconfont icon-sousuo"></i>
          <ul v-if="isShow">
            <li v-for="(item,index) in CommonSearchList" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="classify-box" v-if="classifyList && classifyList.length>0">
        <div class="nav-row" v-for="(items,index) in classifyList" :key="index">
          <span>{{items.type}}：</span>
          <ul>
            <li v-for="(item,index) in items.data" :key="index" :class="{active: index===(items.type=='方向'?directionindex:(items.type=='分类'?categoryindex:difficultindex))}" @click="handleNavClick(items.type,index)">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 课程工具栏 -->
    <div class="tool-bar">
      <span class="change-btn" :class="{active:checkbar==='最新'}" @click="handleBarClick('最新')">最新</span>
      <span class="change-btn" :class="{active:checkbar==='最热'}" @click="handleBarClick('最热')">最热</span>
    </div>
    <!-- 课程列表 -->
    <div class="course-box">
      <course-module :courseList="courseList" module="free"></course-module>
    </div>
  </div>
</template>
<script>
import { getCourseNav,getCourseList } from '@/api/course.js'
import { getCommonSearch } from '@/api/common.js'
import { ERR_OK } from '@/api/config.js'
import CourseModule from '@/base/course/course.vue'
export default {
  name:'FreeCourse',
  components:{
    CourseModule
  },
  data () {
    return {
      oldClassifyList:[],//接口获取数据
      classifyList:[],//头部分类数据(组合)
      directionindex:0,
      categoryindex:0,
      difficultindex:0,
      courseList:[], //课程数据
      checkbar:"最新",//工具栏
      CommonSearchList:[],//搜索历史
      isShow:false
    }
  },
  mounted (){
    this.getCourseNavData();
    this.getCourseListData();
    this.getCommonSearchData();
  },
  methods:{
    // 获取课程导航
    getCourseNavData(){
      getCourseNav().then(res=>{
        let { code, data }=res
        if(code==ERR_OK){
          this.oldClassifyList=data.slice()
          this.classifyList= data.slice()
          // 数据处理
          this.getTypeData(this.directionindex);
        }
      })  
    },
    // 获取课程列表数据
    getCourseListData(){
      getCourseList().then(res=>{
        let { code, data }=res
        if(code==ERR_OK){
          this.courseList=data
          // 最热数据
          if(this.checkbar==="最热"){
            this.courseList.sort(this.sortNumber)
          }
        }
      })
    },
    //组合导航数据
    getTypeData(index){
      //浅拷贝 
      let templist= Object.assign({}, this.oldClassifyList[1])   
      let category=[]
      templist.data.forEach((items,indexs) => {
        if(index==0){
          items.data.forEach(item => {
            category.push(item)
          })
        } 
        else if(index==indexs){
          category.push("全部")
          items.data.forEach(item => {
            category.push(item)
          })
        }  
      });
      templist.data=category
      this.classifyList[1]=templist
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
    // 导航点击
    handleNavClick(type,index){
      if(type=="方向"){
        this.directionindex=index
        this.getTypeData(index)
      }
      else if(type=="分类"){
        this.categoryindex=index
      }
      else{
        this.difficultindex=index
      }
    },
    // 课程工具栏点击
    handleBarClick(type){
      this.checkbar=type
      this.getCourseListData()
    },
    // 最热数据排序
    sortNumber(a,b)
    {
      return b.number - a.number
    },
    // input获取焦点
    getFocus(){
      this.isShow=true
    },
    // input失去焦点
    getBlur(){
      this.isShow=false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .course-container
    background-color: #f3f5f7;
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
          position: relative;
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
          ul
            position: absolute;
            left: 0;
            top: 40px;
            width: 100%;
            margin-bottom: 20px;
            border-top: none;
            background-color: #fff;
            box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
            font-size: 12px;
            z-index: 800;
            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
            li
              width: 100%;
              height: 45px;
              line-height: 45px;
              padding: 0 16px;
              box-sizing: border-box;
              cursor: pointer;
              color: #4d555d;
              font-size: 14px;
              &:hover
                background-color: #f3f5f6;
                color: #07111b;
      .classify-box  
        margin: 0 auto;
        max-width: 1386px;
        .nav-row
          position: relative;
          padding: 16px 0 5px;
          border-bottom: 1px solid #edf1f2;
          &:nth-child(2) ul
            max-height: 132px;
            overflow: hidden;
            z-index: 1;
          &:hover:nth-child(2)
            top: -1px;
            margin: 0 -10px;
            padding: 16px 9px;
            background: #fff;
            border: 1px solid rgba(28,31,33,.1);
            box-shadow: 0 8px 16px 0 rgba(28,31,33,.2);
            border-radius: 8px;
            ul
              max-height: unset;
              overflow: auto;
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
              &.active
                background: rgba(242,13,13,.06);
                border-radius: 6px;
                font-weight: 700;
                color: #f20d0d;
    .tool-bar
      position: relative;
      margin: 0 auto;
      padding-top: 26px;
      padding-bottom: 16px;
      overflow: hidden;     
      width: 1386px;
      height: 14px !important;
      font-size: 12px;
      .change-btn
        margin-right: 12px;
        padding: 4px 12px;
        font-size: 12px;
        color: #545c63;
        line-height: 16px;
        background: #fff;
        border-radius: 12px;
        cursor: pointer;
        background: #f3f5f7;
        &.active
          color: #FFFFFF;
          background: #9199a1;
          cursor: default;
    .course-box
      margin: 0 auto;
      width: 1386px;

</style>