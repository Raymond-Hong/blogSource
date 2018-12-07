<template>
  <div class="theme-container" :style="{height:height}">
    <nav class="nav">
      <button @click="goTo({path:'/source/technique/js1-0%E4%B8%8Etrue-false%E4%BA%92%E8%BD%AC.html'})">技术</button>
      <button @click="goTo({path:'/source/life/%E7%94%9F%E6%B4%BB.html'})">生活</button>
      <button @click="goTo({path:'/'})">首页</button>
      <button @click="showGame(true)">游戏</button>
    </nav>
    <div class="slider" v-if="slider">

    </div>
    <Content v-if="content" class="content"/>
    <div class="game" v-if="game">
      <twenty-fourty-eight></twenty-fourty-eight>
    </div>
    <div class="footer">
      <span>{{$site.pages[0].lastUpdated}}</span>
      <span>{{$title}}</span>
    </div>
  </div>
</template>
<script>
// import helloWorld from '../components/HelloWorld.vue'
import twentyFourtyEight from '../components/game/twentyFourtyEight'
export default {
  data(){
    return{
      number:5,
      height:0+'px',
      slider:false,
      content:true,
      game:false
    }
  },
  components:{
    twentyFourtyEight
    // helloWorld
  },
  created(){
    // setInterval(()=>{
    //   this.changeNumber();
    // },1000)
  },
  mounted(){
    this.height = window.screen.height + 'px';
  },
  methods:{
    changeNumber(){
      this.number++;
    },
    goTo(url){
      this.showGame(false);
      this.$router.push(url);
    },
    showGame(flag){
      if(flag){
        this.goTo({path:'/'});
      }
      this.content = !flag;
      this.game = flag;
    }
  }
}
</script>

<style scoped>
.nav{
  background: linear-gradient( #abc, #def);
  opacity: 0.6;
}
.nav button{
  padding: 5px;
  border-radius: 50%;
  background-color: blueviolet;
  color: #fff;
}
.theme-container{
  border:1px solid bisque;
  background: linear-gradient(pink, greenyellow);
  width: 100%;
  text-align: center;
}
.content{
  margin: 0 auto;
  /* border:1px solid greenyellow; */
  color: whitesmoke;
  text-align: center;
}
.footer{
   position: absolute;
   width: 95%;
   bottom: 0;
   text-align:right;
   opacity: .7;
}
</style>

