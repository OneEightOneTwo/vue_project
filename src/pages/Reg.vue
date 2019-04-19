<template>
    <div class="reg">
       <header>
            <router-link to="/mine">
                <van-icon class="back" name="arrow-left" />
            </router-link>
            <span>会员注册</span>
        </header>
        <div class="wrap">
            <van-cell-group>
              <van-field
                required
                clearable
                right-icon="question-o"
                placeholder="手机号码"
              />
              <van-field
                center
                clearable
                placeholder="验证码"
              >
                <van-button slot="button" size="small" type="primary">发送验证码</van-button>
              </van-field>
              <van-field
                type="password"
                placeholder="密码"
                required
              />
              <van-field
                type="password"
                placeholder="重置密码"
                required
              />
              </van-cell-group>
        </div>
         <div class="btn-reg">
            <van-button class="btn" type="primary">注册</van-button>
        </div>
    </div>
</template>
<script type="text/javascript">
     export default{

     }
</script>
<style lang="css" scoped>
    .reg{
        width: 100%;
        height: 100%;
        background: #f8f8f8;
        position: fixed;
        z-index: 99;
    }
     header{
        height: 30px;
        border-bottom:10px solid #f8f8f8;
    }
    header span{
        /*display: block;*/
        text-align: center;
        line-height: 30px;
        padding-left: 35%;
        font-size: 12px;
    }
      .btn-reg{
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    .btn-reg .btn{
        width: 30%;
        height: 40px;
        margin-left: 10%;
    }
    .back{
        margin-top: 5%;
    }
</style>