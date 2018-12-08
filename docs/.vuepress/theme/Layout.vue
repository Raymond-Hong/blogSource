<template>
  <div class="theme-container" :style="{height:height}">
    <nav class="nav">
      <button @click="openBlog">blog</button>
      <button @click="goTo({path:'/'})">home</button>
      <button @click="showGame(true)">game</button>
    </nav>
    <div class="flex">
      <div class="slider" v-if="slider">
        <slider-list></slider-list>
      </div>
      <Content v-if="content" class="content"/>
    </div>
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
import twentyFourtyEight from '../components/game/twentyFourtyEight'
import sliderList from '../components/text/sliderList'
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
    sliderList,
    twentyFourtyEight
  },
  created(){
    
  },
  mounted(){
    this.height = window.screen.height + 'px';
  },
  methods:{
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
      this.slider = false;
    },
    openBlog(){
      this.goTo({path:'/'});
      this.slider = true;
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
.flex{
  display: flex;
}
.footer{
   position: absolute;
   width: 95%;
   bottom: 0;
   text-align:right;
   opacity: .7;
}
</style>

