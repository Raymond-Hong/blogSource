<template>
    <div class="box">
        <ul>
            <li v-for="(link,key) in list">
                <div @click="goTo(link.path)">
                {{key+1}}、{{link.title}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {textPaths} from '../../public/js/config/textPath.js'
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.list = [...textPaths];
        // this.list = this.list.concat(this.list);
        // this.list = this.list.concat(this.list);
        // this.list = this.list.concat(this.list);
        // this.list = this.list.concat(this.list);
    },
    updated(){
        this.goTo(this.list[0].path);
    },
    methods:{
        goTo(url){
            this.$router.push(url);
        }
    }
}
</script>

<style scoped>
*{
    list-style: none;
    padding: 0;
    margin: 0;
}
.box{
    margin: 25px 5px;
    width: 100%;
    height: 300px;
    background-color: azure;
    background-color: transparent;
    /* border: 1px solid blue; */
    overflow: scroll;
    opacity: .9;
}
ul li div{
    width: 100%;
    height: 25px;
    line-height: 25px;
    margin: 0;
    padding: 0;
    /* background-color: aqua; */
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: underline;
    color: #abcdef;
}
</style>
