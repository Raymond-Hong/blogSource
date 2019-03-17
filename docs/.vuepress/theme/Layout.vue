<template>
  <div class="theme-container" :style="{height:height}">
    <nav class="nav">
      <button @click="openBlog">blog</button>
      <button @click="goHome">home</button>
      <button @click="showGame">game</button>
    </nav>
    <div class="flex" v-if="slider">
      <div class="slider">
        <slider-list></slider-list>
      </div>
      <Content class="content"/>
    </div>
    <template v-if="content">
      <button @click="handleWelcome" style="position:fixed;top:0;right:0">{{buttonName}}</button>
      <main-content v-show="mainContent"></main-content>
      <calendar></calendar>
    </template>
    <div class="game" v-if="game">
      <a href='#tfe'>2048</a>
      <a href='#tfp'>24点</a>
      <div id='tfe'>
        <twenty-fourty-eight></twenty-fourty-eight>
      </div>
      <div id='tfp'>
        <twenty-four-point></twenty-four-point>
      </div>
    </div>
    <div class="footer">
      <!-- <span>{{$site.pages[0].lastUpdated}}</span> -->
      <!-- <span>{{$title}}</span> -->
    </div>
  </div>
</template>
<script>
import twentyFourtyEight from '../components/game/twentyFourtyEight'
import sliderList from '../components/text/sliderList'
import mainContent from '../components/text/mainContent'
import twentyFourPoint from '../components/game/24point'
import calendar from '../components/calendar/Calendar'
import {tools} from '../public/js/tools.js'
export default {
  data(){
    return{
      number:5,
      height:0+'px',
      slider:false,
      content:true,
      game:false,
      gameShow:'',
      mainContent:true,
      buttonName:'隐藏'
    }
  },
  components:{
    sliderList,
    twentyFourtyEight,
    mainContent,
    twentyFourPoint,
    calendar
  },
  mounted(){
    this.height = window.screen.height + 'px';
  },
  methods:{
    closeAll(){
      this.slider=false;
      this.content=false;
      this.game=false;
    },
    goHome(){
      this.closeAll();
      this.content=true;
    },
    showGame(){
      this.closeAll();
      this.game=true;
    },
    openBlog(){
      this.closeAll();
      this.slider=true;
    },
    handleWelcome(){
      this.mainContent = !this.mainContent;
      if(this.mainContent){
        this.buttonName = '隐藏';
      }else{
        this.buttonName = '显示'
      }
    }
  }
}
</script>

<style scoped>
.nav{
  background: linear-gradient( #abc, #def);
  opacity: 0.6;
}
button,
.nav button{
  padding: 5px;
  border-radius: 50%;
  background-color: blueviolet;
  color: #fff;
  cursor: pointer;
}
.nav button:hover{
  color:blueviolet;
  background-color: #fff;
}
.theme-container{
  border:1px solid bisque;
  /* background: linear-gradient(pink, greenyellow); */
  width: 100%;
  text-align: center;
  background-color: bisque;
}
.flex{
  display: flex;
}
.slider{
  font-size: 10px;
  flex-grow: 4;
  width: 20%;
}
.footer{
   position: absolute;
   width: 95%;
   bottom: 0;
   text-align:right;
   opacity: .7;
}
.game>div:not(:target){
  display: none;
}
.game a{
  display: inline-block;
  text-decoration: none;
  margin: 10px auto;
  width: 100px;
  height: 30px;
  color: #f40;
  background-color: #def;
  text-align: center;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.game a:hover{
  background-color: #f40;
  color: #def;
}
</style>

