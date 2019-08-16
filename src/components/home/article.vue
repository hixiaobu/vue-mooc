<template>
  <div class="article-container">
    <div class="article-box">
      <!-- 标题 -->
      <title-module title="精／彩／手／记／及／猿／问" left="center -360px" right="center -396px"></title-module>
      <!-- 内容 -->
      <div class="article-wrap">
        <div
          class="article-item"
          :class="item.type=='article'?'blue':'green'"
          v-for="(item,index) in articleList"
          :key="index"
        >
          <!-- 热门话题 -->
          <div v-if="item.type=='topic'">
            <label for class="topic-label">热门话题</label>
            <div class="topic-item" v-for="(itemtopic,index) in item.data" :key="index">
              <div class="topic-title">
                <span class="title green">
                  #{{itemtopic.topic}}#
                  <br />
                  {{itemtopic.title}}
                </span>
                <img :src="itemtopic.img" alt />
              </div>
              <p class="topic-desc">{{itemtopic.desc}}</p>
              <div class="bottom-box" v-if="index==0||index==item.data.length-1">
                <template  v-if="index==0">
                  <p class="bottom-right">
                    了解详情
                    <i class="iconfont icon-arrows-4-7"></i>
                  </p>
                  <p class="line-box">
                    <span>往期回顾</span>
                    <span class="line"></span>
                  </p>
                </template>
                <p class="bottom-right" v-if="index==item.data.length-1">
                  更多往期话题
                  <i class="iconfont icon-arrows-4-7"></i>
                </p>
              </div>
            </div>
          </div>
          <!-- 手记文章 -->
          <div v-if="item.type=='article'">
            <label for>
              <i class="iconfont icon-wenzhang"></i>手记文章
            </label>
            <div class="article-title">
              <div class="title blue">{{item.title}}</div>
              <img :src="item.img" alt />
            </div>
            <div class="bottom-box">
              <p class="article-content">{{item.desc}}</p>
              <div class="bottom-info">
                <span class="bottom-right blue">
                  阅读全文
                  <i class="iconfont icon-arrows-4-7"></i>
                </span>
                <div class="bottom-left" v-if="item.type=='article'">
                  <span>浏览{{item.scan}}</span>
                  <span>推荐{{item.recommend}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 相关猿问 -->
          <div v-if="item.type=='question'">
            <label for>
              <i class="iconfont icon-tiwen"></i>相关猿问
            </label>
            <div class="article-title">
              <div class="title green">{{item.title}}</div>
            </div>
            <div class="bottom-box">
              <p class="best-lable">{{item.status.text}}</p>
              <p class="article-content">{{item.status.answer}}</p>
              <div class="bottom-info">
                <span class="bottom-right green">
                  共{{item.total}}个回答
                  <i class="iconfont icon-arrows-4-7"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleModule from "./title.vue";
export default {
  name: "Article",
  props: ["articleList"],
  components: {
    TitleModule
  },
  methods: {
    //获取标题样式
    getItemStyle(type) {
      const classMap = {
        article: { color: "blue", icon: "icon-wenzhang", title: "手记文章" },
        question: { color: "green", icon: "icon-tiwen", title: "相关猿问" }
      };
      return classMap[type];
    }
  }
};
</script>

<style lang="stylus" scoped>
.article-container
  display: block;
  box-shadow: 0 2px 4px 0 rgba(7, 17, 27, 0.06);
  .article-box
    margin: 0 auto;
    padding: 36px 0 48px;
    width: 1152px;
    .article-wrap
      position: relative;
      margin-top: 24px;
      width: 1152px;
      min-height: 560px;
      column-count: 3;
      column-gap: 18px;
      .green
        color: rgba(0, 180, 60, 0.6);
      .blue
        color: rgba(0, 140, 200, 0.6);
      .article-item
        margin-bottom: 18px;
        padding: 24px 32px 32px 32px;
        break-inside: avoid-column;
        width: 372px;
        box-sizing: border-box;
        background: #FFFFFF;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.05);
        border-radius: 8px;
        &:hover
          box-shadow: 0 8px 16px 0 rgba(7, 17, 27, 0.1);
        .topic-label
          display: inline-block;
          margin-bottom: 8px;
          padding: 0 12px;
          font-size: 12px;
          color: #FFFFFF;
          line-height: 24px;
          background: rgba(0, 180, 60, 0.5);
          border-radius: 12px;
        .topic-item
          display: block;
          &:nth-of-type(1)
            .topic-title
              span
                font-size: 16px;
                color: rgba(0, 180, 60, 0.8);
          .topic-title
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            .title
              width: 224px;
              font-size: 14px;
              color: #4D555D;
              line-height: 24px;
              cursor: pointer;
            .green:hover
              color: #00B43C;
            img
              width: 72px;
              height: 72px;
              border-radius: 8px;
              background-color: #f3f5f7;
          .topic-desc
            margin-top: 12px;
            font-weight: 400;
            font-size: 12px;
            color: #4D555D;
            line-height: 24px;
          .bottom-box
            margin-top: 12px;
            font-size: 12px;
            font-weight: 400;
            line-height: 24px;
            color: rgba(0, 180, 60, 0.6);
            cursor: pointer;
            overflow: hidden;
            .bottom-right 
              text-align: right;
              .iconfont
                margin-left: 4px;
                font-size: 12px;
            &:hover
              color: #00B43C;
            .line-box
              display: flex;
              align-items: center;
              margin: 16px 0;
              font-size: 12px;
              color: #93999F;
              background-color: #fff;
              line-height: 16px;
              .line
                flex: 1;
                margin-left: 12px;
                height: 1px;
                background-color: #D9DDE1;
        label
          display: inline-block;
          margin-bottom: 8px;
          line-height: 16px;
          font-size: 12px;
          .iconfont
            margin-right: 4px;
            vertical-align: text-top;
            font-size: 16px;
        .article-title
          display: flex;
          justify-content: space-between;
          .title
            width: 224px;
            font-size: 16px;
            color: #07111B;
            line-height: 24px;
            cursor: pointer;
          .blue:hover
            color: #008CC8;
          .green:hover
            color: #00B43C;
          img
            width: 72px;
            height: 48px;
        .bottom-box
          .article-content
            margin-top: 8px;
            font-size: 12px;
            color: #4D555D;
            line-height: 24px;
            text-align: justify;
            word-break: break-all;
            font-weight: 400;
          .best-lable
            display: inline-block;
            margin-top: 8px;
            font-size: 12px;
            color: #07111B;
            line-height: 24px;
          .bottom-info
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            margin-top: 12px;
            font-size: 12px;
            line-height: 24px;
            font-weight: 400;
            .bottom-left
              display: inline-block;
              color: #93999F;
              span
                margin-right: 24px;
                &:nth-last-child(1)
                  margin-right: 0;
            .blue:hover
              color: #008CC8;
            .green:hover
              color: #00B43C;
            .bottom-right
              cursor: pointer;
              .iconfont
                margin-left: 4px;
                font-size: 12px;
</style>