<template>
  <div class="container">
    <ul class="header-box">
      <!-- app下载 -->
      <li class="app-download">
        <span>下载APP</span>
        <div class="app-load-box">
          <h4 class="app-title">慕课网APP - 随时随地学编程</h4>
          <img src="https://www.imooc.com/static/img/common/appload.png" alt="">
          <div class="app-right">
            <div class="app-load-btn">
              <i class="iconfont icon-pingguo"></i>
              <span>App Store下载</span>
            </div>
            <div class="app-load-btn">
              <i class="iconfont icon-anzhuo"></i>
              <span>Android下载</span>
            </div>
            <p>扫描下载慕课网APP</p>
          </div>
        </div>
      </li>
      <!-- 购物车 -->
      <li class="shop-car"><i class="iconfont icon-gouwuche"></i>购物车</li>
      <!-- 登录/注册 -->
      <li class="header-sign">
        <span class="sign-text" @click="handleLogin">登录</span>
        <span> / </span>
        <span class="sign-text" @click="handleRegister">注册</span>
      </li>
    </ul>
    <!-- 遮罩 -->
    <common-mask v-if="isShowMask"></common-mask>
    <!-- 登录、注册 -->
    <login-register v-if="isShowMask"></login-register>
  </div>
</template>
<script>
import CommonMask from '@/base/common/mask.vue'
import LoginRegister from '@/base/loginregister/loginregister.vue'
export default {
  name:'HeaderLogin',
  data () {
    return {
      isShowMask: true
    }
  },
  components:{
    CommonMask,
    LoginRegister
  },
  methods:{
    // 登录
    handleLogin(){
      console.log(123)
    },
    // 注册
    handleRegister(){
      console.log(123)
    }
  }
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
      position: relative;
      &:hover
        color: red !important;
        .app-load-box
          display: block;
      span:nth-child(1) 
        padding: 0 15px;
      .app-load-box
        display: none;
        position: absolute;
        right: 0;
        top: 100%;
        width: 304px;
        padding: 10px 24px 22px;
        box-sizing: border-box;
        background-color: #fff;
        color: #4D555D;
        line-height: 16px;
        box-shadow: 0 8px 16px 0 rgba(7,17,27,0.2);
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        z-index: 99999;
        font-size: 12px;
        .app-title
          margin: 12px 0;
          font-size: 14px;
          color: #1C1F21;
          text-align: center;
          line-height: 22px;
        img 
          float: left;
          width: 108px;
          height: 108px;
        .app-right
          float: right;
          .app-load-btn
            display: block;
            margin-bottom: 8px;
            color: #fff;
            width: 132px;
            height: 36px;
            line-height: 36px;
            background: #4D555D;
            border-radius: 18px;
            &:hover
              background-color: #07111b;
            .iconfont
              font-size: 16px;
              margin: 0 8px 0 12px;
              vertical-align: -2px;
          p
            margin-top: 12px;
            text-align: center;
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
      &:hover
        color: #f01414;
        .iconfont
          color: #f01414;
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
        &:hover
          color: #f01414;
</style>