<template>
    <div class="course-wrap">
        <div class="wrap-item" v-for="(item,index) in courseList" :key="index">
            <course-script class="course-script" :script="item.script" v-if="item.script"></course-script>
            <course-rate class="course-rate" :rate="item.process" v-if="item.process"></course-rate>
            <div class="course-img">
                <img :src="item.img" alt />
                <div class="course-label">
                    <label v-for="(itemtag,index) in item.tags" :key="index">{{itemtag}}</label>
                </div>
            </div>
            <div class="course-card">
                <h3 class="course-card-name">{{item.name||item.title}}</h3>
                <div class="course-card-bottom">
                    <div class="course-card-info">
                        <span v-if="showItem(item.type)">{{item.type}}</span>
                        <span v-if="showItem(item.rank)">{{item.rank}}</span>
                        <span v-if="showItem(item.number)">
                            <i class="iconfont icon-ren"></i>
                            {{item.number}}
                        </span>
                        <span>
                            <course-star :score="item.star" v-if="item.star"></course-star>
                        </span>
                    </div>
                    <div class="course-card-desc" v-if="showItem(item.desc)">{{item.desc}}</div>
                    <div class="course-card-price">
                        <span>{{item.price==0?"免费":"¥ "+item.price}}</span>
                        <div class="course-card-like"  :style="getIsLikeColor(item.isLike)" v-if="item.isLike!=null">
                            <i class="iconfont icon-shoucang"></i>
                            <span>{{item.isLike?"已收藏":"收藏"}}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CourseScript from '@/base/common/script.vue'
import CourseRate from '@/base/common/rate.vue'
import CourseStar from '@/base/common/star.vue'
export default {
    name: 'CourseList',
    props: ['courseList'],
    components: {
        CourseScript,
        CourseRate,
        CourseStar
  },
  methods:{
    //是否显示
    showItem(value){
        if(value==null){
            return false
        }
        return true
    },
    // 获取收藏颜色
    getIsLikeColor(islike){
        if(islike){
            return {
                'color':'rgba(240, 20, 20, 0.6)'
            }
        }
    }
  }
}
</script>

<style lang="stylus" scoped>
.course-wrap 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    .wrap-item 
        position: relative;
        margin-bottom: 12px;
        width: 216px;
        border-radius: 4px;
        cursor: pointer;
        &:hover 
            .course-card .course-card-name 
                color: #F20D0D !important; 
        .course-script
            position: absolute;
            top: 8px;
            left: -8px;
            padding: 0 8px;
            border: 2px solid #FFFFFF;
            border-radius: 12px;
            font-family: 'dincondm';
            line-height: 20px;
            background-color: #FFAA00;
            background-image: linear-gradient(90deg, #ffaa00 17%, #f76b1c 100%);
            z-index: 4;
        .course-rate
            position: absolute;
            right: -7px;
            top: 8px;
            width: 42px;
            text-align: center;
            line-height: 20px;
            background-image: linear-gradient(-90deg, #65da98 0%, #0cba4d 100%);
            border: 2px solid #FFFFFF;
            border-radius: 12px;
            box-sizing: border-box;
            z-index: 1;
        .course-img 
            width: 216px;
            height: 120px;
            position: relative;
            border-radius: 8px;
            img 
                width: 100%;
                height: 100%;
                border-radius: 8px;
                background-color: #f3f5f7;   
            .course-label
                position: absolute;
                bottom: 6px;
                left: 8px;
                font-size: 12px;
                color: #FFFFFF;
                line-height: 16px;  
                label 
                    display: inline-block;
                    background: rgba(28, 31, 33, 0.6);
                    border-radius: 4px;
                    padding: 4px 8px;
                    margin-right: 4px;
                    margin-bottom: 2px;
                    font-weight: 200;    
                    &:nth-last-child
                        margin-right: 0;               
        .course-card 
            padding: 8px;
            .course-card-name 
                height: 46px;
                font-size: 16px;
                font-weight: bold;
                color: #07111B;
                line-height: 24px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                display: -webkit-box;
                -webkit-box-orient: vertical;
            .course-card-bottom 
                .course-card-info 
                    // display: flex;
                    // justify-content: space-between;
                    margin-top: 8px;
                    font-size: 12px;
                    color: #93999F;
                    line-height: 24px;
                    font-weight: 400;
                    span  
                        margin-right: 11px;
                        &:nth-last-child(1)
                            margin-right: 0;
                        .iconfont 
                            font-size: 12px;
                            color: #93999F;
                .course-card-desc
                    margin-top: 4px;
                    margin-bottom: 4px;
                    font-size: 12px;
                    font-weight: 300;
                    color: #9199a1;
                    height: 36px;
                    line-height: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                .course-card-price 
                    line-height: 24px;
                    font-size: 12px;
                    color: #4d555d;
                    span 
                        font-weight: 700;
                        // display: inline-block;
                        // vertical-align: unset;
                    .course-card-like
                        // display: inline-block;
                        float: right;
                        color: #b7bbbf;
                        &:hover 
                            color: #4d555d !important;
                        .iconfont
                            float: left;
                            font-size: 16px;
                        span 
                            float: left;
                            font-size: 12px;
                            margin-left: 2px;
                            font-weight: 700;
</style>