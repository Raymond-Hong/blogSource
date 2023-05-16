<template>
  <div class="wrapper">
      <input type="text" v-model="name">
      <button @click="add">添加</button>
      <button @click="clear">清空名单</button>
      <div>名单:<span>{{selectsObj.toString('name')}}</span></div>
      <button @click="start">开始抽奖</button>
      <button @click="stop">停止</button>
      <button @click="reset">重来</button>
        <div class="show">
            <ul>
                <template v-for="(select,key) in selected">
                    <li :key="key">{{select.name}}</li>
                </template>
            </ul>
            <span>{{showList.toString()}}</span>
        </div>
  </div>
</template>

<script>
const candidates = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
let obj = {};
let selectsObj = candidates.filter(key=>!obj[key]&&(obj[key]=true)).map(name=>({name,selected:false}));
Array.prototype.toString = function(name){
    if(name){
        return this.reduce((p,v)=>p&&(p+','+v[name])||v[name],'');
    }
    return this.reduce((p,v)=>p&&(p+','+v)||v,'');
}
export default {
    data(){
        return{
            selectsObj:JSON.parse(JSON.stringify(selectsObj)),
            status:false,
            selected:[],
            showList:[],
            name:''
        }
    },
    computed:{
        canSelect(){
            return this.selectsObj.filter(obj=>!obj.selected);
        }
    },
    methods:{
        generate(){
            let max = this.canSelect.length-1;
            this.selected = [];
            if(max<0){
                return ()=>{this.selected.push({name:'结束'})};
            }
            let obj = {},index;
            for(let i=0;i<3&&i<=max;i++){
                doRandom();
                this.selected.push(this.canSelect[index]);
            }
            function doRandom(){
                do{
                    index = Math.round(Math.random()*max);
                }while(obj[index]);
                obj[index] = true;
            }
            return ()=>{
                const next = ()=>{
                    this.timer = setTimeout(()=>{
                        if(this.selected.length){
                            let first = this.selected.shift();
                            this.canSelect.forEach((val,i)=>{
                                if(val.name==first.name){
                                    obj[i]=false;
                                }
                            })
                            doRandom();
                            this.selected.push(this.canSelect[index]);
                            if(this.status){
                                this.$nextTick(next);
                            }
                        }
                    },50);
                }
                next();
            }
        },
        add(){
            if(!this.selectsObj.some(s=>s.name==this.name)){
                this.selectsObj.push({name:this.name,selected:false});
            }
        },
        clear(){
            this.selectsObj = [];
        },
        start(){
            if(this.status){
                return;
            }
            this.status = true;
            this.generate()();
        },
        stop(){
            if(!this.status){
                return;
            }
            this.status = false;
            clearTimeout(this.timer);
            this.initData();
        },
        reset(){
            Object.assign(this,{
                selectsObj:JSON.parse(JSON.stringify(selectsObj)),
                status:false,
                selected:[],
                showList:[]
            });
        },
        initData(){
            let res = [];
            this.selected.forEach(sd=>{
                this.selectsObj.forEach(s=>{
                    if(s.name==sd.name){
                        s.selected=true;
                        res.push(sd.name);
                    }
                })
            })
            this.showList = [...this.showList,...res];
        }
    }
}
</script>

<style scoped>
input{
    height: 30px;
    border-radius: 20px;
    padding: 5px 10px;
    outline: none;
}
button{
    cursor: pointer;
    height: 30px;
    padding: 10px;
    line-height: 10px;
    color: azure;
    background-color: brown;
    border-radius: 15px;
    outline: none;
}
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
}
.show span{
    top: 5em;
}
.show{
    width:100vw;
    box-sizing: border-box;
    height: 50vh;
    background-color: blanchedalmond;
    color: blue;
    font-size: 30px;
}
.show li {
    height: 10vh;
    padding-top: 5vw;
}
</style>
