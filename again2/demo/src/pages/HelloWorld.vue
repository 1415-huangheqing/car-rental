<template>
  <div id="app">
   <div v-if="!loggedIn">
      <h1>{{ msg }}</h1>
    <input v-model="userName" placeholder="请输入姓名" autocomplete>
    <input v-model="password" placeholder="请输入密码" autocomplete>
    <button v-on:click="addUser">注册</button>
     </div>
     <p>已有账号？<a href="#" v-on:click="hide">登录</a></p>
      <div v-if="showLogin">
        <form >
          <label for="userName">用户名</label>
          <input id="userName" v-model="userName" required>
          <label for="password">密码</label>
          <input id="password" v-model="password" type="password" required>
          <button v-on:click="login">登录</button>
        </form>
      </div>
    <p>这是查询按钮</p>
        <p>
            <button @click="changeMsg">点击</button>
        </p>

    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
export default{
    data() {
      return {
        msg: 'Welcome to Your car rental App',
        userName: '',
        password: '',
        loggedIn:false,
        showLogin:false,
      }
    },
    methods: {
      addUser() {
        var name = this.userName;
        var password = this.password;
        axios.post('http://localhost:3000/api/user/addUser', {
          userName: name,
          password: password
        }, {}).then((response) => { console.log(response); })
      },
  
      changeMsg () {
        axios.get('http://localhost:3000/api/user/query').then((response) => {
            console.log(response)
            console.log('--------')
        })
      },
      login() {
      // 使用axios发送POST请求到后端的登录路由，传递用户名和密码
      axios.post('http://localhost:3000/api/user/login', {
          userName: this.userName,
          password: this.password,
        })
        .then((res) => {
          // 如果成功，显示成功信息，并设置登录状态为true
          alert(res.data);
          this.loggedIn = true;
        })
        .catch((err) => {
          // 如果失败，显示错误信息
          alert(err.response.data);
        });
    },
    hide(){
      this.loggedIn=true;
      this.showLogin=true;
    }
    }

}
</script>

<style>

</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
