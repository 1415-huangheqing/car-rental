<template>
    <div class="jumbotron" v-if="!demo">
   <h1 class="display-4">Car rental!</h1>
  <p class="lead">租车自驾，为的就是随地停留，享受时间流逝</p>
  <hr class="my-4">
  <p>The whole point of a car rental is to stay and enjoy the passage of time
 </p>
  <a class="btn btn-primary btn-lg" href="#" role="button" v-on:click="change">了解更多</a>
 </div>
  <div id="nav" v-if="demo">
    <button type="button" class="btn btn-info"><router-link to="/login">登录</router-link></button>
    <button type="button" class="btn btn-primary"><router-link to="/home">首页</router-link></button>
    <button type="button" class="btn btn-danger"><router-link to="/about">汽车种类选择</router-link></button>
  </div>
  <div v-if="demo">
  <Banner/>
  </div>
  <div>
  <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
import About from './pages/About.vue'
import Home from './pages/Home.vue'
import Banner from './components/Banner.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    About,
    Home,
    Banner,
  },
  data(){
    return{
      demo:false
    }
  },
  methods:{
    change(){
      this.demo=true;
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
  padding: 0px;
}
/* html,body,#app{
      height: 100%;
      background-color:turquoise;
    } */
</style>
