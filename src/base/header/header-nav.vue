<template>
  <ul class="header-nav-box">
    <li class="nav-item" v-for="item in navList" :key="item.title" @click="goNav(item.url)">{{item.title}}</li>
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
      { title: '免费课程', url: '/freecourse' },
      { title: '实战课程', url: '/practicecourse' },
      { title: '就业班', url: '' },
      { title: '专栏', url: '' },
      { title: '猿问', url: '' },
      { title: '手记', url: '' }
    ]
  },
  methods:{
    goNav(url){
      this.$router.push(url)
    }
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