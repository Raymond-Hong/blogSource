<template>
<div>
    <button @click="initNum">换一组</button>
    <div class="container">
        <div class="img" :style="{backgroundImage:imgUrl,backgroundPosition:img1.x+'px '+img1.y+'px'}"></div>
        <div class="img" :style="{backgroundImage:imgUrl,backgroundPosition:img2.x+'px '+img2.y+'px'}"></div>
        <div class="img" :style="{backgroundImage:imgUrl,backgroundPosition:img3.x+'px '+img3.y+'px'}"></div>
        <div class="img" :style="{backgroundImage:imgUrl,backgroundPosition:img4.x+'px '+img4.y+'px'}"></div>
    </div>
    <div>
        <input type="checkbox" id="answer">
        <label for="answer">
            <span>查看答案</span>
            <span>参考答案:</span>
        </label>
        <span>{{process}}</span>
    </div>
    <div class="footer">
        <input type="text" v-model="strNum" :placeholder="noNum">
        <button @click="checkNum">查询</button>
    </div>
</div>
</template>

<script> 
const compute24 = function (...nums) {

    return !!all(nums[0],nums[1],nums[2],nums[3],nums[4]).length;
    function all(a,b,c,d,obj){
        let res = [];
        threeNum(a,b,c).forEach(x=>{
            P(d,x[0])&&res.push(24)&&(obj.process=x[1]+';'+transToString(d,x[0]));
        })
        !res.length&&deal(a,b).forEach(x=>{
            deal(c,d).forEach(y=>{
                let str = transToString(x[0],y[0]);
                if(str){
                    res.push(24);
                    obj.process = x[1]+";"+y[1]+";"+str;
                    return res;
                }
            })
        });
        !res.length&&deal(a,c).forEach(x=>{
            deal(b,d).forEach(y=>{
                let str = transToString(x[0],y[0]);
                if(str){
                    res.push(24);
                    obj.process = x[1]+";"+y[1]+";"+str;
                    return res;
                }
            })
        });
        !res.length&&deal(a,d).forEach(x=>{
            deal(b,c).forEach(y=>{
                let str = transToString(x[0],y[0]);
                if(str){
                    res.push(24);
                    obj.process = x[1]+";"+y[1]+";"+str;
                    return res;
                }
            })
        });
        !res.length&&threeNum(a,b,d).forEach(x=>{
            P(c,x[0])&&res.push(24)&&(obj.process=x[1]+';'+transToString(c,x[0]));
            if(res.length){
                return res;
            }
        })
        !res.length&&threeNum(a,c,d).forEach(x=>{
            P(b,x[0])&&res.push(24)&&(obj.process=x[1]+';'+transToString(b,x[0]));
            if(res.length){
                return res;
            }
        })
        !res.length&&threeNum(b,c,d).forEach(x=>{
            P(a,x[0])&&res.push(24)&&(obj.process=x[1]+';'+transToString(a,x[0]));
            if(res.length){
                return res;
            }
        })
        return res;
    }
    function transToString(c,d){
        c = +c;
        d = +d;
        let a = c.toFixed(2)==c?c:c.toFixed(2);
        let b = d.toFixed(2)==d?d:d.toFixed(2);
        if(Math.abs(c+d-24)<0.0001){
            return `${a}+${b}=24`;
        }else if(Math.abs(c-d-24)<0.0001){
            return `${a}-${b}=24`;
        }else if(Math.abs(d-c-24)<0.0001){
            return `${b}-${a}=24`;
        }else if(Math.abs(c*d-24)<0.0001){
            return `${a}*${b}=24`;
        }else if(Math.abs(c/d-24)<0.0001){
            return `${a}/${b}=24`;
        }else if(Math.abs(d/c-24)<0.0001){
            return `${b}/${a}=24`;
        }else{
            return false;
        }
    }
    function threeNum(a,b,c){
        let res = []
        deal(a,b).forEach(x=>{
            let newArr = deal(x[0],c);
            newArr.forEach(item=>{
                item[1] = x[1] +';'+ item[1];
            })
            res = [...res,...newArr];
        });
        deal(a,c).forEach(x=>{
            let newArr = deal(x[0],b);
            newArr.forEach(item=>{
                item[1] = x[1] +';'+ item[1];
            })
            res = [...res,...newArr];
        });
        deal(b,c).forEach(x=>{
            let newArr = deal(x[0],a);
            newArr.forEach(item=>{
                item[1] = x[1] +';'+ item[1];
            })
            res = [...res,...newArr];
        });
        return res;
    }
    function P(a,b){
        if([[],[23,25,24,1/24],[22,26,12,48,1/12],[21,27,8,72,1/8],[20,28,6,96,1/6],[19,29,24/5,120,5/24],
        [18,30,4,144,1/4],[17,31,24/7,168,7/24],[16,32,3,192,1/3],[15,33,24/9,216,9/24]][a].some(val=>Math.abs(b-val)<0.0001)){
             return 24;
        }
    }
    function deal(c,d){
        c = +c;
        d = +d;
        let a = c.toFixed(2)==c?c:c.toFixed(2);
        let b = d.toFixed(2)==d?d:d.toFixed(2);
        if(!c){
            return [[c+d,`${a}+${b}=${a+b}`],[c-d,`${a}-${b}=${(a-b).toFixed(2)==a-b?a-b:(a-b).toFixed(2)}`],[c*d,`${a}*${b}=${a*b}`],[c/d,`${a}/${b}=${(a/b).toFixed(2)==a/b?a/b:(a/b).toFixed(2)}`]];
        }
        if(!d){
            return [[c+d,`${a}+${b}=${a+b}`],[c-d,`${a}-${b}=${(a-b).toFixed(2)==a-b?a-b:(a-b).toFixed(2)}`],[d-c,`${b}-${a}=${(b-a).toFixed(2)==b-a?b-a:(b-a).toFixed(2)}`],[c*d,`${a}*${b}=${a*b}`],[d/c,`${b}/${a}=${(b/a).toFixed(2)==b/a?b/a:(b/a).toFixed(2)}`]];
        }
        return [[c+d,`${a}+${b}=${a+b}`],[c-d,`${a}-${b}=${(a-b).toFixed(2)==a-b?a-b:(a-b).toFixed(2)}`],[d-c,`${b}-${a}=${(b-a).toFixed(2)==b-a?b-a:(b-a).toFixed(2)}`],[c*d,`${a}*${b}=${a*b}`],[c/d,`${a}/${b}=${(a/b).toFixed(2)==a/b?a/b:(a/b).toFixed(2)}`],[d/c,`${b}/${a}=${(b/a).toFixed(2)==b/a?b/a:(b/a).toFixed(2)}`]];
    }
}
export default {
    data(){
        return{
            num1:1,
            num2:1,
            num3:1,
            num4:1,
            imgUrl:'url(../../img/poker.png)',
            img1:{x:0,y:0},
            img2:{x:0,y:0},
            img3:{x:0,y:0},
            img4:{x:0,y:0},
            process:'',
            strNum:'',
            noNum:'输入,如:1,2,3,4'
        }
    },
    mounted(){
        this.initNum();
    },
    methods:{
        checkNum(){
            if(!this.strNum){
                alert("输入有误!");
                return;
            }
            let nums = this.strNum.split(",");
            if(nums.some(n=>n>9||n<1)){
                alert("输入有误!");
                return;
            }
            if(!compute24(...nums,this)){
                alert("输入有误!");
                return;
            }
            nums.forEach((n,k)=>{
                this['num'+(k+1)] = n;
            });
            this.initImg(...nums);
        },
        getNumber(){
            return (Math.random()*9|0)+1;
        },
        initNum(){
            this.strNum = '';
            do{
                this.num1=this.getNumber();
                this.num2=this.getNumber();
                this.num3=this.getNumber();
                this.num4=this.getNumber();
            }while(!compute24(this.num1,this.num2,this.num3,this.num4,this));
            this.initImg(this.num1,this.num2,this.num3,this.num4);
        },
        initImg(...nums){
            nums.sort();
            const XGAP = -68,YGAP = -97;
            for(let i=0;i<4;i++){
                this['img'+(1+i)].x = (nums[i]-1)*XGAP;
                this['img'+(1+i)].y = 0;
                if(i&&nums[i-1]===nums[i]){
                    this['img'+(1+i)].y = ([...nums].filter((n,k)=>k<=i&&n===nums[i]).length-1)*YGAP;
                }
            }
        }
    }
}
</script>

<style scoped>
:root,body{
    width: 100%;
}
.container{
    display: flex;
    position: absolute;
    left: calc(50% - 144px);
    top: 30%;
    margin: 30px auto;
}
.img{
    flex-basis: 72px;
    width: 100px;
    height: 100px;
    background-color: aquamarine;
    overflow: hidden;
}
button{
    width: 150px;
    height: 100px;
    border-radius: 50%;
    font-size: 30px;
    color: #cfc;
    background-color: #fff;
    cursor: pointer;
}
button:hover{
    background-color: #cfc;
    color: #fff;
}
input,label>span{
    display: none;
    cursor: pointer;
}
input~span{
    display: none;
}
input:checked~span{
    display: inline-block;
    color: #f40;
    background-color: #fff;
    margin: 10px auto;
}
input:checked~label>span:last-child,input:not(:checked)~label>span:first-child{
    display: inline-block;
    color: #fff;
    background-color: #f40;
    margin: 10px auto;
}
.footer{
    margin-top: 30%;
}
.footer input{
    display: inline-block;
    padding: 5px;
    height: 50px;
    width: 200px;
    box-sizing: border-box;
    font-size: 20px;
    border-radius: 10px;
}
.footer button{
    width: 100px;
    height: 50px;
    color: #cfc;
    background-color: #0ee;
}
.footer button:hover{
    background-color: #cfc;
    color: #0ee;
}
</style>

