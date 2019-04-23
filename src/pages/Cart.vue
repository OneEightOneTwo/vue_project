<template>
    <div id="cart">
        <header>
            <router-link to="/home">
                <van-icon class="back" name="arrow-left" />
            </router-link>
            <span>购物车</span>
            <span>编辑</span>
        </header>
        <div class="main" >
            <div class="one"  v-for="i in this.$store.state.cartlist" :key="i._id" :name="i._id">
                <div class="check">
                    <input type="checkbox" />
                </div>
                <div class="img">
                    <img :src="i.image" height="54" width="54" alt="" />
                </div>
                <div class="text">
                    <p class="elli2" v-text="i.goods"></p>
                    <p><strong class="red">￥<b v-text="i.price"></b></strong> </p>
                </div>
                <div class="del">
                    <van-icon class="icon" name="delete" @click="delgoods(i._id)"/>
                </div>
                <div class="num">
                    <van-stepper v-model="i.num" />
                </div>
            </div>
        </div> 
        <footer>
            <van-submit-bar
              :price="3050"
              button-text="提交订单"
            >
              <van-checkbox >全选</van-checkbox>
            </van-submit-bar>
        </footer>
    </div>
</template>
<script type="text/javascript">
     // import state from 'vuex';
     export default{
        data(){
            return{
                price:3050,
                value: 1,
                // cartLists:[{
                //     id:1,
                //     url:require('../assets/cartlist.jpg'),
                //     name:'老杜崇明草鸭900g',
                //     prices:58.00,
                //     num:1,
                // },{
                //     id:2,
                //     url:require('../assets/cartlist2.jpg'),
                //     name:'老杜崇明草鸭900g',
                //     prices:38.00,
                //     num:2,
                // },{
                //     id:3,
                //     url:require('../assets/cartlist3.jpg'),
                //     name:'海南薄皮脆甜西州蜜瓜1个约1.4kg/个',
                //     prices:18.00,
                //     num:1,
                // }]
            }
        },
        // computed:{
        //     //计算属性是和watch(非常重要非常重要)
        //     goodalls() {
        //         return this.$store.state.cartlist;
        //     }
        // },
        methods:{
            delgoods(id){
                var user=JSON.parse(localStorage.getItem('user'));
                // console.log(this);
                var data={tel:user,id:id};
                //没有这个删除第一条数据没有反应
                this.$store.dispatch('getcartData');
                this.$store.dispatch('delcart',data)
                // .then(res=>{
                //     console.log(1)
                //     console.log(res);
                // });
                this.$store.dispatch('getcartData');
            }
        },
        mounted(){
            //null是传的值
            this.$store.dispatch('getcartData',null);
        },
        
     }
</script>
<style lang="css" scoped>
    .red{
        color: red;
    }
    #cart{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .footer{
        width: 100%;
        box-sizing: border-box;
    }
    header{
        height: 40px;
        border-bottom:10px solid #f8f8f8;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        background: #fff;
        z-index: 99;
    }
    header span{
        /*display: block;*/
        text-align: center;
        line-height: 30px;
        padding-left: 35%;
        font-size: 12px;
    }
    .main{
        margin-bottom: 80px;
        margin-top: 40px;
    }
    .one{
        position: relative;
        padding: 2% 0 2% 2%;
        box-sizing: border-box;
        /*background: #ccc;*/
        display: inline-block;
        width: 100%;
        border-bottom: 1px solid #ccc;
    }
    .one div{
        float: left;
    }
    .img img{
        width: 90px;
        height: 90px;
    }
    .text{
        padding-left: 5%;
        width: 190px;
        /*height: 100%;*/

    }
    .text .elli2{
        font-size: 12px;
        height: 24px;
        margin-bottom: 20%;
    }
    .check{
        margin-right:3%;
        margin-top: 6%;
    }
     .check input{
        padding-top:20%;

     }
     .del{
        position:absolute;
        right:5%;
        top: 8%;
     }
     .del .icon{
        font-size: 25px;
     }
     .num{
        position:absolute;
        bottom:5%;
        right: 5%;
     }
</style>
