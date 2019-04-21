<template>
    <div class="goods">
        <Luobo :pic="pic"></Luobo>
        <Connect :goodList="goodList"></Connect>
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
    data(){
        return {
            goodList:'',
            pic:'',
        }
    },
    components:{
        Luobo,
        Connect,
        Sell,
        Num,
        GoodsAction,
    },
    created(){
        let goodId=this.$route.query.id;
        // console.log(this.$route);
        // console.log(goodId);
        this.$axios({
          method:'get',
          url:'https://www.fastmock.site/mock/1c400c949bd89011b22378dfe07950b3/list/api',
        }).then(res=>{
          // console.log(res.data)
          // this.goodList=res.data[goodId];
          // console.log(this.goodList)
          var message='';
          var arr=[];
          res.data.map(function(item,idx){
                if(item.id==goodId){
                    // console.log(item)
                   message=item;
                   // pic2=item.picture;
                   arr=item.picture.split('&');
                   // console.log(arr);
                }
          });
          // console.log(message);
          this.goodList=message;
          this.pic=arr;
          // console.log(this.pic)
          // console.log(this.goodList);
        })
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
