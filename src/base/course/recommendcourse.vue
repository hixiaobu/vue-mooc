<template>
  <div class="container">
    <h3 class="head-box">
      <span class="head-title">{{recommendList.title}}</span>
      <span class="head-more">更多<i>></i></span>
    </h3>
    <ul class="aside-course">
      <li  v-for="(item,index) in recommendList.data" :key="index">
        <div class="course-img">
          <img :src="item.url" alt="">
          <span>{{item.type}}</span>
        </div>
        <div class="course-content">

        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'RecommendCourse',
  // props:{
  //   recommendList: Object
  // },
  props:['recommendList'],
  mounted () {
    console.log(this.recommendList)
  }
}
</script>
<style lang="stylus" scoped>
.container
  width: 304px;
  .head-box
    margin-bottom: 32px;
    .head-title
      float: left;
      font-size: 16px;
      color: #07111b;
      line-height: 24px;
    .head-more
      float: right;
      font-size: 12px;
      color: #93999f;
      line-height: 24px;
  .aside-course
    background: #f8fafc;
    li
      margin-bottom: 8px;
</style>