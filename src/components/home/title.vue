<template>
    <!-- 标题 -->
    <div class="module-title">
        <span class="title-icon" :style="getPositionStyle(left)"></span>
        <div class="title-text">{{title}}</div>
        <span class="title-icon" :style="getPositionStyle(right)"></span>
    </div>
</template>
<script>
export default {
    name: 'Title',
    props: {
        title: String,
        left: String,
        right: String
    },
    methods: {
        // 获取图片位置
        getPositionStyle(data){
            return {
                'background-position':`${data}`
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .module-title
        position: relative;
        letter-spacing: 0.6px;
        line-height: 36px;
        text-align: center;
        .title-text
          display: inline-block;
          margin: 0 24px;
          font-size: 20px;
          font-weight: 600;
          color: #4D555D;
        .title-icon
          display: inline-block;
          vertical-align: bottom;
          width: 56px;
          height: 36px;
          background: url("https://www.imooc.com/static/img/index/icon.png") no-repeat;
          background-size: cover;
        .left
          background-position: center -504px;
        .right
          background-position: center -540px;
</style>