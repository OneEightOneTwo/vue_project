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
            <div class="one"  v-for="(i,index) in this.$store.state.cartlist" :key="i._id" :name="i._id">
                <div class="check">
                    <input type="checkbox" v-model="selected" :value="index"/>
                    <!-- <van-checkbox v-model="checked"></van-checkbox> -->
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
                    <van-stepper 
                    v-model="i.num" 
                    @plus="updataPlus(index)"
                    @minus="updataMinus(index)"
                    />
                </div>
            </div>
        </div> 
        <footer>
            <van-submit-bar
              :price="price"
              button-text="提交订单"
            >
            <van-checkbox v-model="checked">全选</van-checkbox>
            </van-submit-bar>
        </footer>
        <!-- {{totalPrice}} -->
    </div>
</template>
<script type="text/javascript">
     // import state from 'vuex';
     import {mapState} from 'vuex';
     export default{
        data(){
            return{
                checked: false,
                selected:[],
                cartlists:'',
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
        computed:{
            //计算属性
            ...mapState([
            'cartlist' //映射computed.produccts为this.$store.state.products
            ]),
            //计算商品总价
            price(){
                var total=0;
                this.cartlist.map((item)=>{
                    //总价=单价*数量
                    total+=(item.price*1)*(item.num);
                })
                // console.log(total)
                //因为iu框架的price单位是分（看vant-ui框架的api文档），so就*了100
                return total*100;
            }
        },
        methods:{
            delgoods(id){
                var user=JSON.parse(localStorage.getItem('user'));
                // console.log(this);
                var data={tel:user,id:id};
                //没有这个删除第一条数据没有反应
                this.$store.dispatch('getcartData');
                this.$store.dispatch('delcart',data)
                this.$store.dispatch('getcartData');
            },
            //封装点击加减操作时，发送axios请求
            updata(curnum,idx){
                var data={
                    num:curnum,
                    _id:this.cartlist[idx]._id,
                    tel:JSON.parse(localStorage.getItem('user'))
                }
                this.$store.dispatch('uploadcart',data);
            },
            //点击加操作时
            updataPlus(idx){
                //传id拿值
                // console.log(this.cartlist[idx]);
                var curnum=(this.cartlist[idx].num)*1+1;
                // console.log(this.cartlist[idx]);
                // var data={
                //     num:curnum,
                //     _id:this.cartlist[idx]._id,
                //     tel:JSON.parse(localStorage.getItem('user'))
                // }
                // // console.log(data);
                // this.$store.dispatch('uploadcart',data);
                this.updata(curnum,idx);
            },
            //点击减操作时
            updataMinus(idx){
                //传id拿值
                var curnum=(this.cartlist[idx].num)*1-1;
                // console.log(curnum);
                // var data={
                //     num:curnum,
                //     _id:this.cartlist[idx]._id,
                //     tel:JSON.parse(localStorage.getItem('user'))
                // }
                this.updata(curnum,idx);
            },
        },
        async mounted(){
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
