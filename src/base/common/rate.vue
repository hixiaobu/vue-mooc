<template>
    <div class="rate" :style="getStyle()">{{rate}}%</div>
</template>

<script>

export default {
    props: {
        rate: {
            type: Number,
            required: true
        },
        size: {
            type: Number,
            default: 12
        },
        color: {
            type: String,
            default: '#ffffff'
        }
    },
    methods: {
        getStyle () {
            return {
                'font-size':`${this.size}px`,
                color:this.color
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .rate
        display: inline-block;
</style>