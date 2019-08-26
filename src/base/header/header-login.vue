<template>
  <div class="container">
    <ul class="header-box">
      <li class="app-download">下载APP</li>
      <li class="shop-car"><i class="iconfont icon-gouwuche"></i>购物车</li>
      <li class="header-sign">
        <span class="sign-text">登录</span>
        <span> / </span>
        <span class="sign-text">注册</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'HeaderLogin'
}
</script>
<style lang="stylus" scoped>
.container
  float: right;
  height: 72px;
  color: #71777d !important
  font-size: 14px;
  .header-box
    display: flex;
    align-items: center;
    .app-download
      padding: 0 15px;
    .shop-car
      padding: 0 18px;
      width: auto;
      box-sizing: border-box;
      border-radius: 18px;
      height: 36px;
      line-height: 32px;
      color: #787d82;
      text-align: center;
      border: 1px solid #D9DDE1 !important;
      .iconfont
        font-size: 16px;
        margin-right: 8px;
        color: #71777d;
    .header-sign
      margin: 0 12px;
      color: #D9DDE1;
      .sign-text
        padding: 0 12px;
        height: 72px;
        line-height: 72px;
        font-size: 14px;
        color: #4D555D;
</style>