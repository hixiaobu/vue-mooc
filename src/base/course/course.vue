<template>
    <div class="course-wrap">
        <div class="wrap-item" :style="getCourseStyle(index)" v-for="(item,index) in courseList" :key="index">
            <course-script class="course-script" :script="module=='home'?item.script:item.type" v-if="module=='home'?showItem(item.script):showItem(item.type)"></course-script>
            <course-rate class="course-rate" :rate="module=='home'?item.process:item.rate" v-if="module=='home'?showItem(item.process):showItem(item.rate)"></course-rate>
            <!-- 课程图片 -->
            <div class="course-img" :style="getImgStyle()">
                <!-- 阴影 实战课程才显示-->
                <div class="course-gradient" v-if="module=='practice'"></div>
                <!-- 课程图片 -->
                <img :src="item.img" alt />
                <!-- 免费课程tap -->
                <div class="course-label" v-if="showItem(item.tags)">
                    <label v-for="(itemtag,index) in item.tags" :key="index">{{itemtag}}</label>
                </div>
                <!-- 实战课程teacher -->
                <div class="lecturer-info" v-if="module=='practice'">
                    <img :src="item.teacher.avatar" alt="">
                    <span>{{item.teacher.name}}</span>
                    <div class="course-update" v-if="showItem(item.lastUpdate)">更新于<br>{{item.lastUpdate}}</div>
                </div>
            </div>
            <!-- 课程内容 -->
            <div class="course-card">
                <!-- 名称 -->
                <h3 class="course-card-name">{{item.name||item.title}}</h3>
                <!-- 底部 -->
                <div class="course-card-bottom">
                    <div class="course-card-info">
                        <span v-if="showItem(item.type)">{{item.type}}</span>
                        <span v-if="showItem(item.rank)">{{item.rank}}</span>
                        <span v-if="showItem(item.number)">
                            <i class="iconfont icon-ren"></i>
                            {{item.number}}
                        </span>
                        <!-- 星级评分(首页) -->
                        <span v-if="showItem(item.star)">
                            <course-star :score="item.star"></course-star>
                        </span>
                        <!-- 评价(实战课程) -->
                        <span class="right" v-if="showItem(item.comment)">{{item.comment}}人评价</span>
                        <!-- 评价内容 -->
                        <div class="evaluation-desc-box" v-if="module=='practice'">
                            <div class="left-box">
                                <p>好评度</p>
                                <p class="big-text">100%</p>
                                <p>{{item.comment}}人评价</p>
                            </div>
                            <div class="right-box">
                                <p>内容实用<span>10</span></p>
                                <p>通俗易懂<span>10</span></p>
                                <p>逻辑清晰<span>10</span></p>
                            </div>
                        </div>
                    </div>
                    <!-- 课程你描述 -->
                    <div class="course-card-desc" v-if="showItem(item.desc)">{{item.desc}}</div>
                    <!-- 课程报价 -->
                    <div class="course-card-price">
                        <span class="price" v-if="showItem(item.price)">{{item.price==0?"免费":"¥ "+item.price}}</span>
                        <span class="newprice" v-if="showItem(item.newPrice)">¥ {{item.newPrice}}</span>
                        <span class="oldprice" :style="getTextDecoration(item.newPrice)" v-if="showItem(item.oldPrice)">¥ {{item.oldPrice}}</span>
                        <div class="course-card-like"  :style="getIsLikeColor(item.isLike)" v-if="item.isLike!=null">
                            <i class="iconfont icon-shoucang"></i>
                            <span>{{item.isLike?"已收藏":"收藏"}}</span>
                        </div>
                    </div>  
                    <div class="bot-discount" v-if="item.isDiscount">
                        <span class="sales-tip">限时优惠</span>
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
    props: ['courseList','module'],
    components: {
        CourseScript,
        CourseRate,
        CourseStar
  },
  methods:{
    //是否显示
    showItem(value){
        if(value==null||value==""||value=="undefined"){
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
    },
    // 获取oldPrice样式
    getTextDecoration(newprice){
        if(newprice!=""){
            return {
                'text-decoration': 'line-through'
            }
        }
    },
    // 单个课程样式
    getCourseStyle(index){
        if(this.module=="home"){
            if((index+1)%5==0){
                return {
                    'width':'216px',
                    // 'height':'286px',
                    'margin-bottom':'12px'
                }
            }
            else{
                return {
                    'width':'216px',
                    // 'height':'286px',
                    'margin-bottom':'12px',
                    'margin-right': '18px'
                }
            }
        }
        if(this.module=="free"){
            if((index+1)%6==0){
                return {
                    'width':'216px',
                    // 'height':'286px',
                    'margin-bottom':'18px'
                }
            }
            else{
                return {
                    'width':'216px',
                    // 'height':'286px',
                    'margin-bottom':'18px',
                    'margin-right': '18px'
                }
            }
        }
        if(this.module=="practice"){
            if((index+1)%4==0){
                return {
                    'width':'270px',
                    // 'height':'336px',
                    'margin-bottom':'36px'
                }
            }
            else{
                return {
                    'width':'270px',
                    // 'height':'336px',
                    'margin-bottom':'36px',
                    'margin-right': '24px'
                }
            }
        }
        
    },
    // 图片样式
    getImgStyle(){
        if(this.module=="free"){
            return {
                'height':'120px'
            }
        }
        if(this.module=="practice"){
            return {
                'height':'148px'
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
    // justify-content: space-between;
    position: relative;
    .wrap-item 
        position: relative;
        margin-bottom: 12px;
        width: 216px;
        border-radius: 4px;
        cursor: pointer;
        &:hover 
            .course-card 
                .course-card-name 
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
            position: relative;
            width: 100%;
            height: 120px;
            border-radius: 8px;
            .course-gradient
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: 0;
                background-image: linear-gradient(-180deg,rgba(7,17,27,0) 0,rgba(7,17,27,.6) 97%);
                border-radius: 12px;
                height: 74px;
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
            .lecturer-info
                position: absolute;
                left: 16px;
                right: 16px;
                bottom: 16px;
                height: 36px;   
                img 
                    float: left;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    margin-right: 12px;  
                span 
                    float: left;
                    padding-top: 18px;
                    font-size: 14px;
                    color: #fff;
                    line-height: 18px;
                    text-shadow: 0 2px 4px rgba(7,17,27,.5);
                    font-weight: 700;
                    max-width: 114px;     
                    ellipsis() 
                .course-update
                    line-height: 18px;
                    padding-top: 1px;
                    text-align: right;
                    font-size: 12px;
                    color: #fff;
                    text-shadow: 0 1px 2px rgba(7,17,27,.5);  
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
                margin-top: 8px;
                &:hover 
                    .course-card-info,.course-card-desc 
                        color: #4d555d !important;
                .course-card-info 
                    // display: flex;
                    // justify-content: space-between;
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
                    .right
                        float: right;
                        position: relative;
                        margin-right: 0;
                        &:hover +.evaluation-desc-box
                            display: block;
                    .evaluation-desc-box
                        display: none;
                        position: absolute;
                        top: 240px;
                        width: 246px;
                        padding: 16px 0;
                        background: #f90;
                        border-radius: 4px;
                        z-index: 1;
                        &:after
                            content:"";
                            position: absolute;
                            top: -6px;
                            right: 18px;
                            width: 0;
                            height: 0;
                            border-left: 6px solid transparent;
                            border-right: 6px solid transparent;
                            border-bottom: 6px solid #f90;
                        p
                            font-size: 12px;
                            line-height: 12px;
                            color: #fff;
                        .left-box
                            float: left;
                            width: 126px;
                            text-align: center;
                            border-right: 1px solid rgba(255,255,255,.4);
                            box-sizing: border-box;
                            .big-text
                                font-size: 20px;
                                line-height: 20px;
                                margin: 4px 0;
                        .right-box
                            float: left;
                            width: 120px;
                            text-align: center;
                            span 
                                margin-left: 4px;
                            p:nth-child(2)
                                margin: 8px 0;
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
                    .price 
                        font-weight: 700;
                    .newprice
                        margin-right: 4px;
                        color: #f01414;
                    .oldprice
                        color: #4d555d;
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
                .bot-discount
                    padding-top: 4px;
                    .sales-tip
                        float: left;
                        padding: 0 4px;
                        background: rgba(240,20,20,.6);
                        border-radius: 2px;
                        font-size: 12px;
                        color: #fff;
                        line-height: 20px;
                        height: 20px;

</style>