<template>
    <div class="login">
        <header>
            <router-link to="/mine">
                <van-icon class="back" name="arrow-left" />
            </router-link>
            <span>会员登录</span>
        </header>
        <div class="wrap">
            <van-cell-group>
              <van-field
                required
                label="用户名"
                right-icon="question-o"
                placeholder="请输入用户名"
                ref="tel"
                v-model="username"
              />
              <van-field
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                ref="psw"
                v-model="password"
              />
              </van-cell-group>
        </div>
        <div class="btn-login">
            <van-button @click="login()" class="btn" type="primary">登录</van-button>
            <router-link to="/reg">
                <van-button class="btn" type="default">立即注册</van-button>
            </router-link>
        </div>
        <!-- <img src="../assets/eat-yiguo.jpg"  /> -->
        <div class="alert" v-show="alertshow">
            <p v-text="alertmessage"></p>
        </div>
    </div>
    
</template>
<script type="text/javascript">
     export default{
        data(){
            return{
                username:'',
                password:'',
                // 弹窗的显示
                alertshow:false,
                //弹窗的信息
                alertmessage:'',
            }
        },
        methods:{
            //点击登录按键的方法
            login(){
                let user=this.$refs.tel.value;
                let psw=this.$refs.psw.value;

                if(user&&psw){
                    //假数据
                    // if(user==123&&psw==123){
                    //     localStorage.setItem('user',JSON.stringify(user));
                    //     // console.log(this);
                    //     this.$router.push("/mine");
                    // }else{
                    //     this.alert("信息不正确");
                    // }
                    this.$axios({
                        method:'post',
                        url:'http://118.89.21.169/user/api/login_handle',
                        data:{
                            phone:user,
                            password:psw
                        }
                    }).then(res=>{
                        console.log(res);
                    });
                }else{
                    // alert("密码不能为空");
                    // console.log(user,psw);
                    // this.alertshow=true;
                    // this.alertmessage="信息不能为空";
                    // setTimeout(function(){
                    //    this.alertshow=false;
                    // }.bind(this),2000)
                    this.alert("信息不能为空");
                }
            },
            alert(mes){
                this.alertshow=true;
                this.alertmessage=mes;
                setTimeout(function(){
                   this.alertshow=false;
                }.bind(this),2000)
            }
        },
        watch:{
            alertshow(){

            }
        },
     }
</script>
<style lang="css" scoped>
    .login {
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
        /*line-height: 30px;*/
        padding-left: 35%;
        font-size: 12px;
    }
    .btn-login{
        width: 100%;
        height: 100px;
        text-align: center;
        line-height: 100px;
    }
    .btn-login .btn{
        width: 30%;
        height: 40px;
        margin-left: 10%;
    }
    .back{
        margin-top: 5%;
    }
    .alert{
        background: #ccc;
        position:fixed;
        bottom: 50%;
        left: 40%;
        border-radius: 10px;
        /*display: none;*/
    }
    .alert p{
        padding: 5px;
    }
</style>