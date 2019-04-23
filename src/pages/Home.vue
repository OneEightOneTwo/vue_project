<template>
  <!--头部搜索 -->
  <div style="height:100%;margin-bottom:53px;background:#f5f5f5 !important">
    <Header/>
    <!-- 轮播图 -->
    <van-swipe
      style=" width: 100%;margin-top:41px;height:220px"
      :autoplay="3000"
      indicator-color="white"
    >
      <!-- <van-swipe-item v-for="(item,index) in lunbo" :key="index">
        <img class="autoImg" :src="item.img" alt>
      </van-swipe-item> -->
       <van-swipe-item>
        <img class="autoImg" src="../assets/9288737764615820_1125x652.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img class="autoImg" src="../assets/9288737621255798_1125x652.jpg" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img class="autoImg" src="../assets/9288737472652897_1125x652.jpg" alt>
      </van-swipe-item>
    </van-swipe>
    <!-- 广告 -->
    <div class="first-screen-ad">
      <img
        src="https://img14.yiguoimg.com/d/items/2019/190412/9710950229714572_1125x344.gif?w=1125&amp;h=344"
      >
    </div>
    <!-- 类型菜单 -->
    <div class="first-screen-menu">
      <li v-for="(t,index) in list" :key="index" @click="goToDetails">
        <a href="javascript:;">
          <img :src="t.img" alt>
        </a>
        <span v-text="t.txt"></span>
      </li>
    </div>
    <!-- 易果快报 -->
    <div class="first-screen-news">
      <i></i>
      <div class="shu"></div>
      <div class="News">营业资质公示，详情请点击查询</div>
    </div>
    <!-- 推荐 -->
    <div class="group-floor clearfix">
      <a href="javascript:;" class="floor-img">
        <img src="../assets/9288737491592804_1125x652.jpg" alt>
      </a>
      <div class="product-list clearfix">
        <div class="proitem">
          <div class="pic">
            <a href="javascript:;">
              <img src="../assets/9288737015506488_300.jpg" alt>
            </a>
          </div>
          <div class="info">
            <p class="name">云南新鲜羊肚菌500g</p>
            <span class="saletip">单品包邮</span>
            <div class="price">
              <strong>￥165</strong>
              /500g
            </div>
          </div>
        </div>
        <div class="proitem">
          <div class="pic">
            <a href="javascript:;">
              <img src="../assets/9288734941652355_300.jpg" alt>
            </a>
          </div>
          <div class="info">
            <p class="name">马家沟芹菜2kg</p>
            <span class="saletip">单品包邮</span>
            <div class="price">
              <strong>￥39.9</strong>
              /2kg
            </div>
          </div>
        </div>
        <div class="proitem">
          <div class="pic">
            <a href="javascript:;">
              <img src="../assets/9288736387704355_300.jpg" alt>
            </a>
          </div>
          <div class="info">
            <p class="name">福建水果玉米2kg</p>
            <span class="saletip">单品包邮</span>
            <div class="price">
              <strong>￥49.9</strong>
              /2kg
            </div>
          </div>
        </div>
        <a href="javascript:;" class="Show">
          <p class="hot">
            查看更多
            <i></i>
          </p>
        </a>
      </div>
    </div>
    <!-- 新品 人气 -->
    <div class="two-image">
      <div class="link-img1">
        <img src="../assets/9288737670538877_658x819.jpg" alt>
      </div>
      <div class="link-img1">
        <img src="../assets/9288737492051556_658x819.jpg" alt>
      </div>
    </div>
    <!-- 懒加载/类型 -->
    <div v-show="show" v-for="(item,index) in lei" :key="index" class="prolist">
      <div class="tt">
        <h3 v-text="item.title"></h3>
      </div>
      <ul>
        <li v-for="(i,index) in item.trade" :key="index">
          <div class="pic">
            <a href="javascript:;">
              <img :src="i.img" alt>
            </a>
          </div>
          <div class="info">
            <p class="name" v-text="i.tradeName"></p>
            <span class="saletip">单品包邮</span>
            <div class="price">
              <strong v-text="i.price"></strong>
              <span v-text="i.weight">/2kg</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 懒加载/类型 -->
    <div class="loader" v-if="showLoader">
      <p>加载更多数据中...</p>
    </div>
    <!-- 回到顶部 -->
    <div @click="goTop" class="goBalck" v-show="bool">
      <img src="../assets/top.png" alt>
    </div>
    <!-- 底部 -->
    <div class="pagefooter" v-show="show">
      <p>沪IPC备09008015号</p>
      <p>上海易果电子商务有限公司</p>
    </div>
    <!-- 加载中 -->
    <Loading/>
  </div>
</template>
<script type="text/javascript">
// 头部搜索
import Header from "../components/public/Header.vue";
// 加载中
import Loading from "../components/public/Loading.vue";
// 封装axios引入
import request from "../request/request.js";

export default {
  data() {
    return {
      // 控制回到顶部
      bool: false,
      length: 0,
      list: [
        {
          txt: "新鲜水果",
          img: require("../assets/9570212329498196_144.png")
        },
        {
          txt: "精选肉类",
          img: require("../assets/9570212329432660_144.png")
        },
        {
          txt: "海鲜水产",
          img: require("../assets/9570212329465428_144.png")
        },
        {
          txt: "快手料理",
          img: require("../assets/9570212329498196_144.png")
        },
        {
          txt: "会员福利",
          img: require("../assets/9570212329530964_144.png")
        },
        {
          txt: "精品原箱",
          img: require("../assets/9570212329563732_144.png")
        },
        {
          txt: "银行活动",
          img: require("../assets/9570212329596500_144.png")
        },
        {
          txt: "即烹美食",
          img: require("../assets/9570212329629268_144.png")
        }
      ],
      lei: [
        {
          title: "水产海鲜",
          trade: [
            {
              tradeName: "青岛大虾",
              price: "￥54",
              weight: "/400g",
              img: require("../assets/9288707550749353_300.jpg")
            },
            {
              tradeName: "百年渔港蒜蓉粉丝扇贝",
              price: "￥19",
              weight: "/500g",
              img: require("../assets/9288733757351272_300.jpg")
            }
          ]
        },
        {
          title: "禽类蛋类",
          trade: [
            {
              tradeName: "苏北散养l老母鸡",
              price: "￥49",
              weight: "/950g",
              img: require("../assets/170418092538034_1236867_300.jpg")
            },
            {
              tradeName: "广东黄油鸡",
              price: "￥37.5",
              weight: "/950g",
              img: require("../assets/170508094922561_104154_300.jpg")
            }
          ]
        }
      ],
      // 默认滚动到指定值出现回到顶部
      scrollTo: 500,
      //滚动值
      scroll: 0,
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      scrollTop: 0,
      //变量windowHeight是可视区的高度
      windowHeight: 0,
      //变量scrollHeight是滚动条的总高度
      scrollHeight: 0,
      showLoader: false,
      show: false,
      // 轮播图初始化
      lunbo: []
    };
  },
  // 头部搜索组件
  components: {
    Header,
    Loading
  },
  // ajax请求渲染轮播图
  async created() {
    let {data} = await request.post('http://118.89.21.169/user/api/getwheel',{
    });
    this.lunbo = data.data
    // console.log(data.data)
  },
  methods: {
    // 点击缓慢回到顶部
    goTop() {
      let timer = setInterval(() => {
        if (this.scroll > 0) {
          this.scroll -= 100;
          window.scrollTo(0, this.scroll);
        } else {
          clearInterval(timer);
        }
      }, 30);
    },
    // 跳到列表页
    goToDetails() {
      this.$router.push({ name: "list" });
    }
  },
  mounted() {
    //滚动事件
    window.onscroll = () => {
      this.scroll = window.scrollY;
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      //变量windowHeight是可视区的高度
      this.windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      this.scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      //滚动条到底部的条件
      if (this.scrollTop + this.windowHeight == this.scrollHeight) {
        this.showLoader = true;
        this.show = true;
        this.showLoader = false;
      }
      if (this.scroll >= this.scrollTo) {
        this.bool = true;
      } else {
        this.bool = false;
      }
    };
  },
  watch: {
    scroll() {}
  }
};
</script>
<style scoped>
body {
  height: 100%;
}
* {
  box-sizing: border-box;
  list-style: none;
  font-size: 12px;
}
.autoImg {
  width: 100%;
  height: 100%;
}
.first-screen-ad {
  height: 120px;
}
.first-screen-ad img {
  width: 100%;
  height: 120px;
}
.first-screen-menu {
  background: #fff;
  height: 179px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1px;
}
.first-screen-menu a {
  width: 50%;
  height: 51px;
  display: flex;
}
.first-screen-menu a img {
  width: 100%;
}
.first-screen-menu li {
  width: 25%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.first-screen-news {
  width: 100%;
  height: 30px;
  background: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.first-screen-news .shu {
  width: 1px;
  height: 20px;
  background: #f0ececf5;
  margin-right: 10px;
}
.first-screen-news i {
  background: url(../assets/news.png) no-repeat;
  display: inline-block;
  background-size: 60% 60%;
  width: 100px;
  height: 23px;
  background-position: center center;
}
.group-floor {
  width: 100%;
  background: #fff;
}
.floor-img {
  width: 100%;
  height: 217px;
}
.floor-img img {
  width: 100%;
}
.product-list {
  width: 100%;
  height: 100%;
  padding: 10px 0px 10px 2%;
  background: #fff;
}
.proitem {
  float: left;
  width: 28%;
}
.pic img {
  width: 100%;
}
.info {
  padding: 0px 5px 0 5px;
  text-align: center;
}
.info .name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.Show {
  width: 50px;
  display: inline-block;
}
.hot {
  width: 10px;
}
.saletip {
  color: #45b575;
  display: inline-block;
  border: 1px solid;
  border-radius: 50px;
  width: 60px;
  text-align: center;
  font-size: 8px;
  margin: 2px 0;
}
.price {
  color: #8d8ab1;
}
.price strong {
  color: #fd623d;
}
.Show {
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  width: 10%;
  height: 150px;
}
.Show .hot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  transform: translate(-50%, -50%);
  color: #8d8ab1;
}
.hot i {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(../assets/aa.png);
  background-size: 100% 100%;
  margin-top: 4px;
}
.two-image {
  height: 232px;
  width: 100%;
}
.link-img1 {
  width: 50%;
  height: 100%;
  display: inline-block;
}
.link-img1 img {
  width: 100%;
  height: 232px;
}
.loader {
  width: 100%;
  height: 20px;
  text-align: center;
  margin-bottom: 5px;
}
.loader p {
  font-size: 15px;
  color: #b3b3b3;
}
.prolist {
  margin: 10px 0;
  height: 321px;
  width: 100%;
  background: #fff;
}
.prolist .tt {
  height: 38px;
  line-height: 38px;
  text-align: center;
}
.prolist .tt h3 {
  position: relative;
  display: inline-block;
  padding: 0 5px;
  font-size: 13px;
  font-weight: bold;
}
.prolist .tt h3:after,
.prolist .tt h3:before {
  position: absolute;
  top: 50%;
  display: block;
  width: 100%;
  height: 10px;
  margin-top: -3px;
  /* transform: translate(0,-50%); */
  content: "";
  background: url(../assets/lei.png) no-repeat;
  background-size: 50% 50%;
}
.prolist .tt h3:after {
  right: -32px;
  transform: rotate(180deg);
  top: 14px;
}
.prolist .tt h3:before {
  left: -32px;
}
.prolist ul {
  display: flex;
}
.prolist ul li {
  flex: 1;
}
.pagefooter {
  margin: 10px 0;
  text-align: center;
  color: #8d8a8a;
}
.goBalck {
  position: fixed;
  bottom: 120px;
  right: 15px;
  width: 30px;
}
.goBalck img {
  width: 100%;
}
</style>