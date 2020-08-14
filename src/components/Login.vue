<template>
  <div>
      用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
      <br><br>
      密码:<input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
      <br><br>
      <button v-on:click="login">登录</button>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            loginForm:{
                userName:"",
                userPasswd:""
            },
            // 存储响应结果
            responseResult:[]
        }
    },
    methods: {
        login(){
            // post请求，login路径，axios自带Promise
            this.$axios.post("/login",{
                // 携带的数据
                username: this.loginForm.userName,
                userPasswd: this.loginForm.userPasswd
            })
            // 异步,返回成功执行then里的函数，successResponse返回来的结果
            .then(successResponse => {
                if(successResponse.data.code === 200){
                    // 执行路由跳转，跳转到首页
                    this.$router.replace({path: "/index"})
                }
            })
            // 发送请求失败处理
            .catch(failResponse=>{})
        }
    }
}
</script>

<style scoped lang="less">

</style>