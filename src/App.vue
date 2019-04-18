<template>
  <div id="app">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//
import Footer from './components/public/Footer.vue';
export default {
  name: 'app',
  components: {
       Footer, 
  }
}
</script>

<style>

/*盖住底部的*/
/*html, body {
    height: 100%;
}
#app {
    height: 100%;
}*/
*{
    margin: 0;
    padding: 0;
}
img{
    border:0;
}
ol, ul ,li{list-style: none;} 
</style>
