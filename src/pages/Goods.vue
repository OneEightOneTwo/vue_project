<template>
    <div class="goods">
        <Luobo></Luobo>
        <Connect></Connect>
        <Sell></Sell>
        <Num></Num>
        <GoodsAction></GoodsAction>
    </div>
</template>
<script>
import Luobo from "../components/goods/lunbo.vue";
import Connect from "../components/goods/connect.vue";
import Sell from "../components/goods/sell.vue";
import Num from "../components/goods/num.vue";
import GoodsAction from "../components/goods/goodsAction.vue";

export default {
    components:{
        Luobo,
        Connect,
        Sell,
        Num,
        GoodsAction,
    }
}
</script>
<style ang="css" scoped>
.goods{
    width:100%;
    height:100%;
    background: #fff;
    position:fixed;
    overflow-y:auto;
    z-index: 99;
}
</style>
