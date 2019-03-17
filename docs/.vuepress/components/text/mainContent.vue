<template>
    <div class="content">
        <p>欢迎来到RaymondHone'sNest~</p>
        <p>祝你生活愉快~</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
:root,body{
    width:100%;
    height: 100%;
}
    .content{
        position:absolute;
        text-align: center;
        top: 100px;
        width: 100%;
        height: 100%;
        font-size: 30px;
        font-weight: bold;
        color: #8fa;
        text-shadow: 1px 1px 0px #f10;
        word-wrap: break-word;
        animation: out-show 3s cubic-bezier(0.45,-0.96, 0.63, 2.16);
    }
    @keyframes out-show {
        from{
            transform: translateY(-10%);
        }
        to{
            transform: translateY(0%);
        }
    }
    .content>p{
        transition: all 1.5s;
    }
    .content>p:nth-child(1):hover{
        text-shadow: 10px -10px 10px #450,
        10px 10px 10px #ff0,
        -10px 10px 10px #aa1,
        -10px -10px 10px #00f,
        15px -15px 15px #09f,
        20px 15px 15px #0f0,
        -15px 30px 15px #0ff,
        -15px -20px 15px #ff9;
    }
    .content>p:nth-child(2):hover{
        text-shadow: 10px -10px 10px #7a0,
        -30px -30px 10px #ff0,
        -20px -20px 10px #f0f,
        -10px -10px 10px #0f0,
        -5px -5px 15px #ff9;
    }
</style>
