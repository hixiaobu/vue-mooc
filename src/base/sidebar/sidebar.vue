<template>
  <div class="sidebar-box">
    <ul>
      <li class="sidebar-item" v-for="(item,index) in sidebarList" :key="item.title">
        <i class="iconfont" :class="item.icon"></i>
        <span class="title">{{item.title}}</span>
        <div class="qrcode" v-if="index==3||index==4"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sidebarList: []
    }
  },
  created () {
    this.sidebarList=[
      { title:'意见反馈',icon:'icon-yijian',url:''},
      { title:'邀请有奖',icon:'icon-hongbao',url:''},
      { title:'帮助中心',icon:'icon-bangzhuzhongxin',url:''},
      { title:'APP下载',icon:'icon-shouji',url:''},
      { title:'官方微信',icon:'icon-liaotian',url:''}
    ]
  }
}
</script>
<style lang="stylus" scoped>
  .sidebar-box
    position: fixed;
    top: 50%;
    right:0;
    padding: 0 16px;
    transform: translate(0,-50%);
    box-shadow: 0px 4px 12px 0px rgba(7, 17, 27, 0.1);
    background-color: #ffffff !important;
    .sidebar-item
      padding: 16px 0;
      width: 26px;
      font-size: 22px;
      cursor: pointer;
      border-bottom: 1px solid #D9DDE1;
      &:last-child
        border-bottom: none;
      &:hover
        .iconfont
          display: none;
        .title
          display: block;
        &:nth-child(4),&:nth-child(5)
          .qrcode
            animation: myScale 0.3s ease-in-out;
            animation-fill-mode: forwards;
        &:nth-child(4)  
          .qrcode
            background-position: 0 -222px;
      &:nth-child(2)
        .iconfont
          color: #f01414;
      .iconfont
        font-size: 24px;
        color: #D9DDE1;
      .title
        display: none;
        font-size: 12px;
        color: #07111b;
      .qrcode
        position: absolute;
        right: 50px;
        bottom: -13px;
        width: 180px;
        height: 222px;
        background: url("https://www.imooc.com/static/img/common/elevator.png?t=0705") no-repeat center center;
        background-position:0 0;
        opacity: 0;
        transform: scale(0);
        transform-origin: 100% 95%;
  @keyframes myScale {
    from{
      opacity: 0;
      transform: scale(0);
    }to{
      opacity: 1;
      transform: scale(1);
    }
  }
</style>