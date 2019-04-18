<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//
import Footer from "./components/public/Footer.vue";

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style>
html,
body {
  width: 100%;
  background: #f5f5f5f5;
  line-height: normal;
}
</style>
