<template>
  <div class="footer-box">
    <ul class="footer-link">
        <li class="link-item" v-for="item in footerList" :key="item.title">{{item.title}}</li>
      </ul>
    <div class="footer-copyright">© 2019 imooc.com  京ICP备 12003892号-11 北京奥鹏文化传媒有限公司</div>
    <div class="footer-wrap">
      <div class="wrap-item">
        <div class="wrap-img wrap-wechat"></div>
        <p>官方公众号</p>
        <div class="warp-qrcode"></div>
      </div>
      <div class="wrap-item">
        <div class="wrap-img wrap-weibo"></div>
        <p>官方微博</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerList: []
    };
  },
  created() {
    this.footerList = [
      { title: "企业合作", url: "" },
      { title: "人才招聘", url: "" },
      { title: "联系我们", url: "" },
      { title: "讲师招募", url: "" },
      { title: "帮助中心", url: "" },
      { title: "意见反馈", url: "" },
      { title: "慕课大学", url: "" },
      { title: "代码托管", url: "" },
      { title: "友情链接", url: "" }
    ];
  }
};
</script>

<style lang="stylus" scoped>
  .footer-box
    position: relative;
    margin: 0 auto;
    padding: 36px 0;
    width: 1152px;
    .footer-link
      display: inline-block;
      .link-item
        display: inline-block;
        margin: 0 10px;
        font-size: 14px;
        color: #99a1a6;
        line-height: 28px;
        cursor: pointer;
        &:hover
          color: #07111B;
    .footer-copyright
      margin-top: 8px;
      padding-left: 10px;
      font-size: 12px;
      color: #93999F;
      line-height: 24px;
    .footer-wrap
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      .wrap-item
        position: relative;
        display: inline-block;
        margin-right: 32px;
        text-align: center;
        &:last-child
          margin-right: 0;
      .wrap-item p
        margin-top: 4px;
        font-size: 12px;
        color: #4D555D;
        line-height: 24px;
      .wrap-img
        margin: 0 auto;
        width: 32px;
        height: 32px;
        background: url("https://www.imooc.com/static/img/idx-btm.png") no-repeat;
        cursor: pointer;
      .wrap-wechat
        background-position: -52px -221px;
        &:hover
          background-position: -52px -262px;
          ~ .warp-qrcode  
            display: block;
      .wrap-weibo
        background-position: 0 -221px;
        &:hover
          background-position: 0 -262px;
      .warp-qrcode     
        display: none;
        position: absolute;
        bottom: 70px;
        right: 50%;
        transform: translateX(50%);
        width: 172px;
        height: 212px;
        background: url("https://www.imooc.com/static/img/common/elevator.png?t=0705") no-repeat 0 0;

</style>