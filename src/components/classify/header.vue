<template>
    <div>
        <!-- <header>
            
        </header> -->
        <div class="nav">
            <ul class="navList">
                <li v-for="(i,index) in classifys" v-text="i.name" @click="changeShow(index)" :class="{'active':index===show}" :key="index"></li>
                <!-- <li>国产水果</li> -->
            </ul>
        </div>
        <ul class="listContent">
            <!-- <div v-for="(i,index) in classifys" v-show="i.show" v-text="i.content" :key="index"> -->
            <li v-for="(i,index) in classifys" :key="index" v-show="index===show">
                <div class="con"  v-for="(item,index) in i.contents" :key="index">
                        <img :src="item.url" height="50" width="50" alt="" />
                        <!-- 全部 --><br>
                        <span v-text="item.content"></span>
                </div>
            </li>
            
        </ul>
    </div>
</template>
<script type="text/javascript">
     export default{
        data(){
            return{
                classifys:[{
                    name:'进口水果',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/c1.jpg'),
                    },{
                        content:"李",
                        url:require('../../assets/image/c2.jpg'),
                    },{
                        content:"山竹",
                        url:require('../../assets/image/c3.jpg'),
                    },{
                        content:"柑橘橙柚",
                        url:require('../../assets/image/c4.jpg'),
                    },{
                        content:"香蕉",
                        url:require('../../assets/image/c5.jpg'),
                    },{
                        content:"榴莲",
                        url:require('../../assets/image/c6.jpg'),
                    }],
                },{
                    name:'国产水果',
                    contents:[{
                       content:"山竹",
                        url:require('../../assets/image/c3.jpg'),
                    },{
                        content:"榴莲",
                        url:require('../../assets/image/c6.jpg'),
                    },{
                         content:"李",
                        url:require('../../assets/image/c2.jpg'),
                    },{
                      content:"柑橘橙柚",
                        url:require('../../assets/image/c4.jpg'),
                    }],
                    
                },{
                    name:'精选肉类',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/r1.jpg'),
                    },{
                        content:"进口牛肉",
                        url:require('../../assets/image/r2.jpg'),
                    },{
                        content:"猪肉",
                        url:require('../../assets/image/r3.jpg'),
                    },{
                        content:"牛排",
                        url:require('../../assets/image/r4.jpg'),
                    }],
                    
                },{
                    name:'乳品糕点',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/g1.jpg'),
                    },{
                        content:"奶酪",
                        url:require('../../assets/image/g2.jpg'),
                    },{
                        content:"酸奶/乳酸",
                        url:require('../../assets/image/g3.jpg'),
                    },{
                        content:"牛奶",
                        url:require('../../assets/image/g4.jpg'),
                    },{
                        content:"蛋糕",
                        url:require('../../assets/image/g5.jpg'),
                    }],
                    
                },{
                    name:'海鲜水产',
                    contents:[{
                        content:"鱼",
                        url:require('../../assets/image/r1.jpg'),
                    },{
                        content:"虾",
                        url:require('../../assets/image/r2.jpg'),
                    },{
                        content:"三文鱼",
                        url:require('../../assets/image/r3.jpg'),
                    },{
                        content:"海鲜干货",
                        url:require('../../assets/image/r4.jpg'),
                    }],
                    
                },{
                    name:'即烹美食',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/g1.jpg'),
                    },{
                        content:"奶酪",
                        url:require('../../assets/image/g2.jpg'),
                    },{
                        content:"酸奶/乳酸",
                        url:require('../../assets/image/g3.jpg'),
                    },{
                        content:"牛奶",
                        url:require('../../assets/image/g4.jpg'),
                    },{
                        content:"蛋糕",
                        url:require('../../assets/image/g5.jpg'),
                    }],
                    
                },{
                    name:'方便速食',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/r1.jpg'),
                    },{
                        content:"养生汤品",
                        url:require('../../assets/image/r2.jpg'),
                    },{
                        content:"冷冻点心",
                        url:require('../../assets/image/r3.jpg'),
                    },{
                        content:"中式主食",
                        url:require('../../assets/image/r4.jpg'),
                    },{
                        content:"火锅料",
                        url:require('../../assets/image/g5.jpg'),
                    }],
                    
                },{
                    name:'粮油杂货',
                    contents:[{
                        content:"米",
                        url:require('../../assets/image/g1.jpg'),
                    },{
                        content:"杂粮",
                        url:require('../../assets/image/g2.jpg'),
                    },{
                        content:"油",
                        url:require('../../assets/image/g3.jpg'),
                    },{
                        content:"干货",
                        url:require('../../assets/image/g4.jpg'),
                    },{
                        content:"果干/零食",
                        url:require('../../assets/image/g5.jpg'),
                    }],
                    
                },{
                    name:'饮料酒水',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/q1.jpg'),
                    },{
                        content:"果汁/饮料",
                        url:require('../../assets/image/q2.jpg'),
                    },{
                        content:"酸奶/乳酸",
                        url:require('../../assets/image/q3.jpg'),
                    },{
                        content:"牛奶",
                        url:require('../../assets/image/q4.jpg'),
                    },{
                        content:"蛋糕",
                        url:require('../../assets/image/q5.jpg'),
                    }],
                    
                },{
                    name:'礼品礼券',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/g1.jpg'),
                    },{
                        content:"礼品礼盒",
                        url:require('../../assets/image/g2.jpg'),
                    },{
                        content:"礼卡礼券",
                        url:require('../../assets/image/g3.jpg'),
                    },{
                        content:"原膳礼盒",
                        url:require('../../assets/image/g4.jpg'),
                    }],
                    
                },{
                    name:'即烹美食',
                    contents:[{
                        content:"全部",
                        url:require('../../assets/image/g1.jpg'),
                    },{
                        content:"奶酪",
                        url:require('../../assets/image/g2.jpg'),
                    },{
                        content:"酸奶/乳酸",
                        url:require('../../assets/image/g3.jpg'),
                    },{
                        content:"牛奶",
                        url:require('../../assets/image/g4.jpg'),
                    },{
                        content:"蛋糕",
                        url:require('../../assets/image/g5.jpg'),
                    }],
                    
                }],
                show:0,
            }
        },
        methods:{
            //改变show的值
            changeShow(index){
               this.show = index;
            }
        }
     }
</script>
<style scoped lang="css">
    .nav{
        width:24%;
        text-align: center;
        float: left;

    }
    .active{
        color:#11b57c;
        background:#fff !important;
    }
    .nav li{
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding:5px 5px;
        background: #f8f8f8;
    }
    .listContent{
        width:75%;
        float: left;
    }
   .con {
       padding:15px 0;
       width:33.3%;
       text-align: center;
       float: left;
       height: 100px;
   }
</style>