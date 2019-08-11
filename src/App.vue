<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
    <side-bar></side-bar>
  </div>
</template>
<script>
import MyHeader from './base/header/header.vue'
import MyFooter from './base/footer/footer.vue'
import SideBar from './base/sidebar/sidebar.vue'
export default {
  components: {
    MyHeader,
    MyFooter,
    SideBar
  }
}
</script>
