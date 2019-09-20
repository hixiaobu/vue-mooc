<template>
  <div class="container">
    <div>233</div>
    <recommend-course v-if="recommend.data && recommend.data.length > 0"  :recommendList="recommend"></recommend-course>
  </div>
</template>
<script>
import { getCourseDetail } from '@/api/course.js'
import { ERR_OK} from '@/api/config.js'
import RecommendCourse from '@/base/course/recommendcourse'
export default {
  name:'FreeDetail',
  components: {
    RecommendCourse
  },
  data () {
    return {
      freeDetail:[],//免费课程详情
    }
  },
  mounted () {
    this.getFreeDetailData()
  },
  methods:{
    getFreeDetailData(){
      getCourseDetail().then(res=>{
        let { code ,data }=res
        if( code == ERR_OK ){
          this.freeDetail=data
        }
        console.log(this.freeDetail)
      })
    }
  },
  computed: {
    recommend () {
      return this.freeDetail.recommend ? this.freeDetail.recommend : {}
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>