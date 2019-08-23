<template>
  <ul class="course-banner">
    <li class="course-item" v-for="(item,index) in banner" :key="index">
      <span class="icon"></span>
      <p class="title">{{item.title}}</p>
      <p class="desc">{{item.desc}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      banner:[]
    }
  },
  created () {
    this.banner = [
      { id: 1, title: 'Web前端攻城狮', desc: '从未接触编程也可以学好' },
      { id: 2, title: 'Java攻城狮', desc: '综合就业排名第一' },
      { id: 3, title: 'Python攻城狮', desc: '迅速崛起的主流编程语言' },
      { id: 4, title: 'Android攻城狮', desc: '移动设备市场份额第一' },
      { id: 5, title: 'PHP攻城狮', desc: '最为广泛的Web后端开发语言' }
    ]
  }
}
</script>
<style lang="stylus" scoped>
.course-banner
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 128px;
  padding: 0 18px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
  background-color: #fff;
  text-align: center;
  &::before
    content: " ";
    background: url('https://www.imooc.com/static/img/index/new/new-path.png') no-repeat;
    width: 68px;
    height: 68px;
    position: absolute;
    left: 0;
    top: 0;
  .course-item
    flex: 1;
    height: 100%;
    cursor: pointer;
    &:hover .icon
      margin-top: 18px;
    .icon
      display: block;
      margin: 22px auto 0;
      width: 36px;
      height: 36px;
      background: url('https://www.imooc.com/static/img/index/new/path-2019.png')
      background-size: 100%;
    &:nth-child(1) .icon
      background-position: center 0;
    &:nth-child(2) .icon
      background-position: center -36px;
    &:nth-child(3) .icon
      background-position: center -144px;
    &:nth-child(4) .icon
      background-position: center -72px;
    &:nth-child(5) .icon
      background-position: center -108px;
    & > p
      text-align: center;
      word-break: break-all;
    .title
      margin-top: 4px;
      color: #07111B;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 21px;
    .desc
      margin-top: 2px;
      font-size: 12px;
      color: #93999F;
      line-height: 16px;
</style>