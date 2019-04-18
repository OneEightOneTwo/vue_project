<template >
    <div class="list">
        <Nav></Nav>
    </div>
</template>
<script>
// import Nav from "../components/list/nav";
import Nav from "../components/list/nav";

export default {
    components:{
        Nav,
    }
}
</script>
<style ang="css" scoped>
.list{
    width:100%;
    height:100%;
    background: #fff;
    position:fixed;
    overflow-y:auto;
    z-index: 99;
}
</style>