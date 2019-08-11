<template>
  <ul class="header-nav-box">
    <li class="nav-item" v-for="item in navList" :key="item.title">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      navList: [] // 导航数据
    }
  },
  created () {
    this.navList = [
      { title: '课程', url: '' },
      { title: '实战课程', url: '' },
      { title: '就业班', url: '' },
      { title: '专栏', url: '' },
      { title: '猿问', url: '' },
      { title: '手记', url: '' }
    ]
  }
}
</script>
<style lang="stylus" scoped>
  .header-nav-box
    display: inline-block;
    .nav-item
      display: inline-block;
      padding: 0 20px;
      line-height: 72px;
      color: #4D555D;
      font-size: 16px;
      cursor: pointer;
      &:hover
        color: #07111b;
</style>