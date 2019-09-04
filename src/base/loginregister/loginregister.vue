<template>
  <div class="signin-box">
    <!-- header -->
    <div class="header-box">
      <span class="sign-title" :class="{active:type==='signin'}" @click="handleChangeSign('signin')">登录</span>
      <span class="sign-title" :class="{active:type==='signup'}" @click="handleChangeSign('signup')">注册</span>
      <span class="closebtn" @click="handleClose"></span>
    </div>
    <!-- 登录 -->
    <template  v-if="type=='signin'">
      <template v-if="!showqrcode">
        <!-- login -->
        <div class="login-wrap">
          <div class="oneline">
            <input type="text" maxlength="37" placeholder="请输入登录手机号/邮箱">
            <p class="prompt">请输入正确的邮箱或手机号</p>
          </div>
          <div class="oneline">
            <i class="iconfont icon-yanjingyincang yincang"></i>
            <input type="password" maxlength="16" placeholder="请输入密码">
            <p class="prompt">请输入6-16位密码,区分大小写,不能用空格</p>
          </div>
          <div class="control-box">
            <span>
              <input type="checkbox" checked class="auto-cbx">7天内自动登录
            </span>
            <span class="right">无法登录</span>
            <span class="line"></span>
            <span class="right">找回密码</span>
          </div>
          <p class="prompt"></p>
          <input type="button" value="登录" class="btn-sign">
        </div>
        <!-- footer -->
        <div class="footer-box">
          <div class="pop-login">
            <span class="showphonesignin">手机短信登录</span>
            <p>
              <span class="icons"><i class="iconfont icon-weibo"></i></span>
              <span class="icons"><i class="iconfont icon-weixin"></i></span>
              <span class="icons"><i class="iconfont icon-QQ"></i></span>
            </p>
          </div>
          <div class="showqrcode" @click="showQRCode('qrcode')"></div>
        </div>
      </template>
      <template v-if="showqrcode">
        <div class="qrcode">
          <img src="https://www.imooc.com/static/img/common/appload.png" alt="">
        </div>
        <p class="qrcode_title">扫描二维码登录慕课网</p>
        <p class="qrcode_mark">请使用新版<a>慕课网手机APP</a> 扫码完成登录</p>
        <div class="footer">
          <div class="pclogin" @click="showQRCode('pclogin')"></div>
        </div>
      </template>
    </template>
    <!-- 注册 -->
    <template v-if="type=='signup'">
      <div class="login-wrap">
        <div class="oneline">
          <input type="text" maxlength="37" placeholder="请输入注册手机号">
          <p class="prompt">请输入正确手机号</p>
        </div>
        <div class="oneline">
          <i class="iconfont icon-shuaxin-copy shuaxin"></i>
          <input type="text" maxlength="16" placeholder="验证码">
          <p class="prompt">验证码错误</p>
        </div>
        <div class="control-box">
          <span>
            <input type="checkbox" class="auto-cbx">同意<a class="agreement">《慕课网注册协议》</a>
          </span>
        </div>
        <p class="prompt"></p>
        <input type="button" value="注册" class="btn-sign">
      </div>
      <!-- footer -->
      <div class="footer-box">
        <div class="pop-login">
          <span class="showothersignin">其它方式登录：</span>
          <p class="right">
            <span class="icons"><i class="iconfont icon-weibo"></i></span>
            <span class="icons"><i class="iconfont icon-weixin"></i></span>
            <span class="icons"><i class="iconfont icon-QQ"></i></span>
          </p>
        </div>
      </div>
    </template>    
  </div>
</template>
<script>
export default {
  name: 'LoginRegister',
  props:{
    ftype:String
  },
  data () {
    return {
      type:"",
      showqrcode:false
    }
  },
  created(){
    this.type=this.ftype
  },
  methods:{
    // 登录注册切换
    handleChangeSign (type) {
      this.type=type
    },
    // 二维码登录
    showQRCode (type) {
      if(type==="qrcode"){
        this.showqrcode=true
      }else if(type==="pclogin"){
        this.showqrcode=false
      }
    },
    // 关闭
    handleClose () {
      this.$emit('close','')
    }
  }
}
</script>
<style lang="stylus" scoped>
.signin-box
  position: fixed;
  left: 50%;
  top: 50%;
  margin: -192px 0 0 -192px;
  padding-top: 10px;
  padding-bottom: 30px;
  background: #fff;
  z-index: 100000;
  width: 384px;
  box-shadow: 0 12px 24px 0 rgba(28,31,33,.1);
  border-radius: 12px;
  .header-box
    display: flex;
    position: relative;
    padding: 0 20px 25px;
    .sign-title
      width: 80px;
      text-align: center;
      height: 49px;
      line-height: 49px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
      color: #787d82;
      &:hover
        color: #f20d0d;
        &::after
          content: " ";
          width: 16px;
          height: 4px;
          line-height: 4px;
          background: #f20d0d;
          border-radius: 2px;
          display: block;
          margin: 0 auto;
      &.active
        color: #f20d0d;
        &::after
          content: " ";
          width: 16px;
          height: 4px;
          line-height: 4px;
          background: #f20d0d;
          border-radius: 2px;
          display: block;
          margin: 0 auto;
    .closebtn
      position: absolute;
      top: 17px;
      right: 20px;
      width: 17px;
      height: 17px;
      cursor: pointer;
      background: url('https://www.imooc.com/static/img/nlogin.png') no-repeat 0 0;
  .qrcode
    position: relative;
    margin: 10px 80px 30px;
    img
      display: block;
      margin: 0 auto;
      width: 160px;
      height: 160px;
  .qrcode_title
    font-size: 16px;
    color: #717a84;
    font-weight: 700;
    text-align: center;
    line-height: 24px;
  .qrcode_mark
    color: #717a84;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    a
      color: #EF1300;
      cursor: pointer;
  .footer
    padding: 20px 30px 4px;
    .pclogin
      position: absolute;
      bottom: 0;
      right: 0;
      width: 60px;
      height: 60px;
      background: url('https://www.imooc.com/static/img/pcLogin.png') no-repeat 0 0;    
      cursor: pointer;
      border-radius: 0 0 12px 0;
  .login-wrap
    padding: 0 32px;
    .oneline
      position: relative;
      input 
        width: 100%;
        height: 48px;
        line-height: 20px;
        box-sizing: border-box;
        padding: 14px;
        box-shadow: 2px 0 5px 0 #fff;
        background: rgba(28,31,33,.06);
        border-radius: 8px;
        outline: none;
      .prompt
        font-size: 12px;
        height: 20px;    
        clear: both;
        line-height: 20px;
        color: #EF1300;
      .iconfont
        position: absolute;
        top: 12px;
        right: 14px;
        font-size: 23px;
        color: #b5b9bc;
      .yincang
        top: 10px;
        font-size: 28px;
        &:hover
          color: #717a84;
      .shuaxin
        top:14px;
        font-size: 20px;
        &:hover
          color: #787d82;
          transform: rotate(360deg);
    .control-box
      position: relative;
      color: #9199a1;
      span 
        .auto-cbx
          margin-right: 10px;
          vertical-align: middle;
        .agreement
          color: #37f;
          cursor: pointer;
          &:hover
            color: #04c;
      .right
        float: right;
        cursor: pointer;
        &:hover
          color: #545c63;
      .line
        float: right;
        margin: 0 16px;
        background: rgba(28,31,33,.1);
        width: 1px;
        height: 14px;
    .btn-sign
      padding: 11px 32px;
      width: 100%;
      box-sizing: border-box;
      font-size: 16px;
      line-height: 24px;
      border-radius: 24px;
      color: #fff;
      background-color: #f20d0d;
      border-color: #f20d0d;
      opacity: 1;
      cursor: pointer;
      &:hover
        color: #fff;
        border-color: #c20a0a;
        background: #c20a0a;
        opacity: 1;
    .prompt
      font-size: 12px;
      height: 20px;    
      clear: both;
      line-height: 20px;
      color: #EF1300;
  .footer-box
    padding: 20px 30px 4px;
    .pop-login
      text-align: center;
      font-size: 14px;
      & > p
        display: inline-block;
      .showphonesignin
        margin-left: 30px;
        margin-right: 24px;
        padding-right: 24px;
        display: inline-block;
        font-size: 14px;
        color: #f20d0d;
        text-align: left;
        line-height: 24px;
        border-right: 1px solid #1a1C1F21;
        cursor: pointer;
        &:hover
          color: #c20a0a;
      .icons
        margin-right: 21px;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
        &:nth-child(1):hover i
          color: #f01400;
        &:nth-child(2):hover i
          color: #00b33b;
        &:nth-child(3):hover i
          color: #08c;
        .iconfont
          font-size: 24px;
          vertical-align: -3px;
          color: #b5b9bc;
      .showothersignin
        float: left;
        color: #9199a1;
      .right
        float: right;
    .showqrcode
      position: absolute;
      bottom: 0;
      right: 0;
      background: url('https://www.imooc.com/static/img/erweima.png') no-repeat 0 0;
      width: 60px;
      height: 60px;
      cursor: pointer;
      border-radius: 0 0 12px 0;     
</style>