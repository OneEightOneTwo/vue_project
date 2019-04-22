<template>
  <div>
    <div class="header"></div>
    <van-tabs @click="onClick" color="#11b57c">
      <van-tab title="销量">
        <div class="productContent" v-for="(i,index) in dataList" :key="index" @click="gotoDetails(i.id)" >
          <div class="img">
            <img :src="i.pic">
          </div>
          <div class="inforPro">
            <p class="title" v-text="i.name">
              <!-- 澳洲塔斯马尼亚冷冻去骨后腿和牛排(MB7+)200g -->
            </p>
            <p class="txt" v-text="i.content">
              <!-- 有筋有肉有嚼劲，厚实多汁 -->
            </p>
            <p class="price">
              <span class="priceRed" v-text="'￥'+i.price">
                <!-- ¥189 -->
              </span>
              <span class="standard" v-text="i.details">
               <!-- 200g/盒 -->
              </span>
              <van-icon name="add-o" @click.stop="addCart(i.id)" color="#11b57c" class="add"/>
            </p>
          </div>
        </div>
       <!--  <div class="productContent">
          <div class="img">
            <img src="../../assets/1-1.jpg">
          </div>
          <div class="inforPro">
            <p class="title">澳洲塔斯马尼亚冷冻去骨后腿和牛排(MB7+)200g</p>
            <p class="txt">有筋有肉有嚼劲，厚实多汁</p>
            <p class="price">
              <span class="priceRed">¥189</span>
              <span class="standard">200g/盒</span>
              <van-icon name="add-o" color="#11b57c" class="add"/>
            </p>
          </div>
        </div> -->
      </van-tab>
      <van-tab title="价格">空</van-tab>
    </van-tabs>
    <img @click="hui" src="../../assets/image/return1.png" alt class="return">
    <img @click="toTop" src="../../assets/image/top.png" alt class="go-top">
    <img @click="cart" src="../../assets/image/cart.png" alt class="cart">
  </div>
</template>
<script>
export default {
  data(){
    return{
      dataList:'',
      // dataList:[{
      //   id:1,
      //   name:'澳洲塔斯马尼亚冷冻去骨后腿和牛排(MB7+)200g',
      //   content:'有筋有肉有嚼劲，厚实多汁',
      //   price:'189',
      //   details:'200g/盒',
      //   img:require('../../assets/1-1.jpg')
      // },{
      //   id:2,
      //   name:'澳洲塔斯马尼亚冷冻去骨后腿和牛排(MB7+)200g',
      //   content:'有筋有肉有嚼劲，厚实多汁',
      //   price:'111',
      //   details:'200g/盒',
      //   img:require('../../assets/1-1.jpg')
      // },{
      //   id:3,
      //   name:'澳洲塔斯马尼亚冷冻去骨后腿和牛排(MB7+)200g',
      //   content:'有筋有肉有嚼劲，厚实多汁',
      //   price:'120',
      //   details:'200g/盒',
      //   img:require('../../assets/1-1.jpg')
      // },{
      //   id:4,
      //   name:'澳洲塔斯马尼亚冷冻去骨后腿和牛排(MB7+)200g',
      //   content:'有筋有肉有嚼劲，厚实多汁',
      //   price:'180',
      //   details:'200g/盒',
      //   img:require('../../assets/1-1.jpg')
      // }]
      // pictureList:'',
    }
  },
  methods: {
    onClick(index, title) {},
    //点击返回键返回首页
    hui() {
      this.$router.push("/home");
    },
    //点击购物车去往购物车页
    cart() {
      this.$router.push("/cart");
    },
    toTop() {

    },
    //点击详情页面去购物车页面
    gotoDetails(id){
      // console.log(id);
      this.$router.push({path:'/goods',query:{id}});
    },
    //加入购物车
    addCart(id){
      // console.log(11);
      var user=JSON.parse(localStorage.getItem('user'));
      // console.log(id);
      var data;
      this.dataList.map(function(item){
        if(item.id==id){
          data=item;
        }
      });
      // console.log(data); 
    }
  },
  created(){
        var arr=[];
        this.$axios({
          method:'get',
          url:'https://www.fastmock.site/mock/1c400c949bd89011b22378dfe07950b3/list/api',
        }).then(res=>{
          // console.log(res);
          res.data.map(function(item,idx){
            var arr2=item.picture.split("&");
            res.data[idx].pic=arr2[0];
          })
            this.dataList=res.data;
            // console.log(this.dataList);
        })
    },
};
</script>
<style scoped>
.header{
  height: 46px;
  width:100%;
}
.productContent {
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #f8f8f8;
}
.go-top {
  position: fixed;
  bottom: 65px;
  right: 5%;
  z-index: 99;
  display: inline-block;
}
.return {
  position: fixed;
  top: 60px;
  left: 2%;
  z-index: 999;
}
.cart {
  position: fixed;
  bottom: 100px;
  right: 5%;
  z-index: 99;
}
.img {
  float: left;
  padding: 25px 5% 0 2%;
}
.img img {
  width: 100px;
}
.inforPro .title {
  padding-top: 25px;
  font-size: 12px;
}
.txt {
  font-size: 10px;
  color: #777;
  height: 25px;
  line-height: 25px;
}
.price {
  position: relative;
}
.price .priceRed {
  font-size: 14px;
  color: red;
}
.price .standard {
  padding-left: 10%;
  font-size: 12px;
  color: #888;
}
.price .add {
  position: absolute;
  right: 8%;
}
</style>
