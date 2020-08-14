<template>
<div class="brackground">
     <div id="login-box">
      <h1>Login</h1>
      <div class="form">
        <div class="item">
          <i class="el-icon-user" style="font-size: 20px; color: #fff"></i>
          <input type="text" placeholder="用户名" v-model="loginForm.username"/>
        </div>

        <div class="item">
          <i class="el-icon-lock" style="font-size: 20px; color: #fff"></i>
          <input type="text" placeholder="密码" v-model="loginForm.userpassword" />
        </div>
        <button v-on:click="login()">Login</button>
    </div>
  </div>
</div>
 
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        userpassword: "",
      },
      // 存储响应结果
      responseResult: [],
    };
  },
  methods: {
    login() {

      console.log(this.loginForm);
      // post请求，login路径，axios自带Promise
      this.$axios
        .post("/login", {
          // 携带的数据
          userName: this.loginForm.username,
          userPassword: this.loginForm.userpassword,
        })
        // 异步,返回成功执行then里的函数，successResponse返回来的结果
        .then((successResponse) => {
          if (successResponse.data.code === 200) {
            // 执行路由跳转，跳转到首页
            this.$router.replace({ path: "/index" });
          }
        })
        // 发送请求失败处理
        .catch((failResponse) => {});
    },
  },
};
</script>

<style scoped lang="less">
@import "../assets/css/cssinit.css";

.brackground {
  width: 100%;
  height: 100%;
//   border: 1px solid #000;
  background: url("../assets/img/小羽未2.jpg");
  background-size: 100% auto;
   position: absolute;
}

#login-box {
  width: 30%;
  height: auto;
  margin: 0 auto;
  margin-top: 13%;
  background: #00000090;
  padding: 20px 50px;
  text-align: center;

}
#login-box  h1 {
  color: #fff;
}

#login-box .form,
.item {
  // margin-top: 2.5rem;
  margin-top: 1rem;
}

#login-box .form .item input {
  width: 180px;
  font-size: 18px;
  border: 0;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  background: #ffffff00;
  color: #fff;
}
#login-box button {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  width: 180px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);
  border-radius: 15px;
}
</style>