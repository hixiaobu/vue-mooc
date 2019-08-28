<template>
  <div class="search-box" :class="{active:isShow===true}">
    <div class="search-tags" v-if="!isShow">
      <span>Java入门</span>
      <span>前端入门</span>
    </div>
    <div class="search-area">
      <input type="text" @focus="getFocus" @blur="getBlur">
      <div class="search-result" v-if="isShow">
        <div class="hot">
          <h2 class="title">热搜</h2>
          <ul class="hot-box">
            <li v-for="(item,index) in CommonHotList" :key="index">{{item}}</li>
          </ul>
        </div>
        <div class="history">
          <ul class="history-box">
            <li v-for="(item,index) in CommonSearchList" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="showhide-search" :class="{active:isShow===true}">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>
<script>
import { getCommonHot, getCommonSearch } from '@/api/common.js'
import { ERR_OK } from "@/api/config.js"
export default {
  name:'HeaderSearch',
  data () {
    return {
      CommonHotList:[],//热门数据
      CommonSearchList:[],//搜索历史
      isShow:false
    }
  },
  mounted(){
    this.getCommonHotData()
    this.getCommonSearchData()
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
.search-box
  position: relative;
  display: inline-block;
  margin: 12px 0;
  margin-left: 24px;
  min-width: 32px;
  border-bottom: 1px solid #D9DDE1;
  &.active
    border-bottom-color: #F01414;
  .search-tags
    position: absolute;
    bottom: 12px;
    right: 40px;
    z-index: 100;
    span 
      margin-right: 4px;
      padding: 5px 8px;
      background-color: #f3f5f7;
      color: #4D555D;
      border-radius: 12px;
      font-size: 12px;
      line-height: 24px;
      font-weight: 400;
      cursor: pointer;
      &:nth-last-child(1)
        margin-right: 0;
  .search-area
    display: inline-block;
    position: relative;
    height: 46px;
    width: 260px;
    zoom: 1;
    input 
      padding: 12px 0;
      height: 46px;
      width: 100%;
      line-height: 22px;
      font-size: 12px;
      color: #71777d;
      background-color: transparent;
      box-sizing: border-box;
      outline: none;
    .search-result
      position: absolute;
      left: 0;
      top: 58px;
      width: 300px;
      margin-bottom: 20px;
      border-top: none;
      background-color: #fff;
      box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.2);
      font-size: 12px;
      overflow: hidden;
      z-index: 800;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      .hot
        padding: 12px 10px 8px 12px;
        box-sizing: border-box;
        .title
          margin-bottom: 8px;
          font-size: 12px;
          color: #1c1f21;
          line-height: 12px;
          font-weight: 700;
        .hot-box li
          display: inline-block;
          margin-right: 4px;
          margin-bottom: 4px;
          padding: 4px 12px;
          background: rgba(84, 92, 99, 0.1);
          border-radius: 12px;
          line-height: 16px;
          cursor: pointer;
          font-size: 12px;
          color: #545c63;
      .history
        border-top: 1px solid rgba(28, 31, 33, 0.1);
        box-sizing: border-box;
        .history-box li
          padding: 0 12px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          box-sizing: border-box;
          font-size: 12px;
          color: #4d555d;
          &:hover
            background-color: #f3f5f6;
            color: #07111b;
  .showhide-search
    display: inline-block;
    padding: 0 8px;
    width: 20px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 18px;
    &:hover
      background: rgba(240, 20, 20, 0.4);
      .iconfont
        color: #F01414;
    &.active
      background: rgba(240, 20, 20, 0.4);
      .iconfont
        color: #F01414;
    .iconfont    
      color: #757a7e;
      cursor: pointer;
      font-size: 16px;
</style>