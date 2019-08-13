<template>
    <div class="script" :style="getStyle()">{{script}}</div>
</template>

<script>
export default {
    props: {
        script: {
            type: String,
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
    .script
        display: inline-block;
</style>