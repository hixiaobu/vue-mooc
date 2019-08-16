<template>
    <div class="allstar-container">
      <div class="allstar-box">
        <!-- 标题 -->
        <title-module title="吊／炸／天／全／明／星" left="center -504px" right="center -540px"></title-module>
        <!-- best内容 -->
        <div class="best-wrap">
          <div class="best-item" v-for="(itembest,index) in allstarList.best" :key="index">
            <div class="item-top">
              <!-- 皇冠 -->
              <span></span>
              <img :src="itembest.avatar" alt="">
            </div>
            <p class="item-center">{{itembest.name}}</p>
            <p class="item-bottom">{{itembest.type.text}}</p>
          </div>
        </div>
        <!-- 其他内容 -->
        <div class="other-wrap">
          <div class="other-item" v-for="(itemother,index) in  allstarList.data" :key="index" :class="getItemClass(itemother.type.code)">
            <img :src="itemother.avatar" alt="">
            <div class="pop-item">
              <p class="title">="{{itemother.type.text}}"=</p>
              <p class="nickname">{{itemother.name}}</p>
              <p class="desc" v-if="itemother.type.code==1">一周获得{{itemother.number}}积分</p>
              <p class="desc" v-if="itemother.type.code==2">一周发布{{itemother.number}}篇手记</p>
              <p class="desc" v-if="itemother.type.code==3">一周解题{{itemother.number}}个</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import TitleModule from './title.vue'
export default {
    name: 'AllStar',
    props: ['allstarList'],
    components: {
        TitleModule
    },
    methods: {
        // 全明星样式
        getItemClass(code) {
            const calssMap={
                "1":"purple",
                "2":"blue",
                "3":"green"
            }
            return calssMap[code]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .allstar-container    
        display: block;
        background-color: #ffffff;
        box-shadow: 0 2px 8px 0 rgba(7, 17, 27, 0.06);
        .allstar-box
            margin: 0 auto;
            padding: 36px 0 48px;
            width: 1152px;      
            .best-wrap
                display: flex;
                justify-content: center;
                margin: 38px auto 48px;
                .best-item
                    width: 136px;
                    text-align: center;       
                    &:nth-child(1) .item-top span
                        background-position: center 0;       
                    &:nth-child(2) .item-top span
                        background-position: center -18px;
                    &:nth-child(3) .item-top span
                        background-position: center -36px;
                    &:nth-child(4) .item-top span
                        background-position: center -54px;
                    .item-top
                        position: relative;
                        margin: 0 auto;
                        width: 56px;
                        height: 56px;
                        span 
                            position: absolute;
                            top: -16px;
                            left: 15px;
                            width: 26px;
                            height: 18px;
                            background: url("https://www.imooc.com/static/img/index/champion.png") no-repeat
                            background-size: 100%;
                        img 
                            position: relative;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                            box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
                            cursor: pointer;
                    .item-center
                        margin-top: 8px;
                        font-size: 14px;
                        color: #07111B;
                        line-height: 16px;
                    .item-bottom
                        font-size: 12px;
                        color: #93999F;
                        font-weight: 400;
            .other-wrap
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: 0 auto;
                width: 888px;
                & .green:hover
                    border: 2px solid #00b46d;
                    .pop-item
                        display: block;
                        background-color: #00b46d;
                        &:before
                            border: 8px solid transparent;
                            border-top-color: #00b46d;
                & .purple:hover
                    border: 2px solid #653ddd;
                    .pop-item
                        display: block;
                        background-color: #653ddd;
                        &:before
                            border: 8px solid transparent;
                            border-top-color: #653ddd;
                & .blue:hover
                    border: 2px solid #008cc8;
                    .pop-item
                        display: block;
                        background-color: #008cc8;
                        &:before
                            border: 8px solid transparent;
                            border-top-color: #008cc8;
                .other-item
                    position: relative;
                    margin-right: 28px
                    margin-bottom: 24px;
                    border: 2px solid #fff;
                    border-radius: 48px;
                    &:nth-child(11n)
                        margin-right: 0;
                    img
                        display: block;
                        height: 48px;
                        width: 48px;
                        border-radius: 48px;
                        box-sizing: border-box;
                        background-color: #f3f5f7;
                        border: 2px solid #fff;
                    .pop-item
                        position: absolute;
                        top: -110px;
                        left: -80px;
                        display: none;
                        width: 202px;
                        height: 90px;
                        border-radius: 8px;
                        color: #FFFFFF;
                        text-align: center;
                        box-sizing: border-box;
                        padding: 13px 24px 0;
                        background-color: #ffffff;
                        &:before
                            content: '';
                            width: 0;
                            height: 0;
                            border: 8px solid transparent;
                            border-top-color: #ffffff;
                            position: absolute;
                            bottom: -16px;
                            left: 95px;
                        .title
                            font-size: 12px;
                            line-height: 16px;
                            font-weight: 400;
                        .nickname
                            font-size: 14px;
                            line-height: 24px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        .desc
                            font-size: 12px;
                            line-height: 16px;
                            margin-top: 8px;
                            font-weight: 400;
                
</style>