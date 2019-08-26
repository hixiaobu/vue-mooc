<template>
  <div class="header-box">
    <div class="logo"><img src="https://www.imooc.com/static/img/index/logo.png" alt=""></div>
    <header-nav></header-nav>
    <header-login></header-login>
  </div>
</template>

<script>
import HeaderNav from './header-nav'
import HeaderLogin from './header-login'
export default {
  components:{
    HeaderNav,
    HeaderLogin
  }
}
</script>
<style lang="stylus" scoped>
  .header-box
    position: absolute;
    width: 100%;
    height: 72px;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    background-color: #ffffff;
    z-index: 999;
    .logo
      display: inline-block;
      vertical-align: middle;
      margin: 0 20px;
      width: 140px;
      height: 72px;
      img 
        display: block;
        height: 100%;
</style>