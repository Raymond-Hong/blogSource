<template>
    <div class="calendar">
        <div class="date-header">
            <div class="prev-month" @click="toPrevMonth"></div>
            <div class="show-date">{{`${year}年${month}月${day}日`}}</div>
            <div class="next-month" @click="toNextMonth"></div>
        </div>
        <div class="date-content">
            <div class="week-header">
                <div>日</div>
                <div>一</div>
                <div>二</div>
                <div>三</div>
                <div>四</div>
                <div>五</div>
                <div>六</div>
            </div>
            <div class="week-day">
                <div class="every-day" v-for="item in 42" :key="item">
                    <div v-if="item - beginDay<=0" style="color:#ccc">
                        {{item - beginDay + prevDays}}
                    </div>
                    <div v-else-if="item-beginDay<=curDays" 
                    :class="{'now-day':curDate === `${year}-${month}-${item-beginDay}`,
                    'active-day':activeDate === `${year}-${month}-${item-beginDay}`}"
                    @click="setCurDay(item - beginDay)">{{item - beginDay}}</div>
                    <div v-else style="color:#ccc">{{item - curDays - beginDay}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return{
            year:'',
            month:'',
            day:''
        }
    },
    created () {
       this.initDate(new Date());
    },
    computed:{
        beginDay () {
            return new Date(this.year,this.month-1,1).getDay();
        },
        curDays () {
            return new Date(this.year,this.month,0).getDate();
        },
        prevDays () {
            return new Date(this.year,this.month-1,0).getDate();
        },
        activeDate () {
            return `${this.year}-${this.month}-${this.day}`;
        }
    },
    methods: {
        initDate (date) {
            // const date = new Date();
            this.year = date.getFullYear();
            this.month = date.getMonth() + 1;
            this.day = date.getDate();
            this.curDate = `${this.year}-${this.month}-${this.day}`;
        },
        setCurDay (day) {
            this.day = day;
        },
        toPrevMonth () {
            if (this.month == 1) {
                this.month = 12;
                this.year --;
            } else {
                this.month --;
            }
            this.day = 1;
        },
        toNextMonth () {
            if (this.month == 12) {
                this.month = 1;
                this.year ++;
            } else {
                this.month ++;
            }
            this.day = 1;
        }
    }
}
</script>

<style scoped>
.calender{
    width: 500px;
    margin-left: 100px;
}
.date-header{
    width: 100%;
    display: flex;
    line-height: 30px;
}
.prev-month,
.next-month {
    border: 15px solid transparent;
    width: 0;
    height: 0;
    cursor: pointer;
}
.prev-month{
    border-right-color: #007fff;
}
.next-month{
    border-left-color: #007fff;
}
.show-date{
    flex: 1;
    text-align: center;
    color: #007fff;
}
.week-header{
    display: flex;
}
.week-header>div{
    flex: 1;
    text-align: center;
    line-height: 30px;
    background-color: #007fff;
    color: #fff;
    font-weight: 600;
}
.week-day{
    width: 100%;
}
.every-day{
    display: inline-block;
    width: 14.28%;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
}
.other-day{
    color: #ccc;
}
.now-day{
    background-color: #007fff;
    color: #fff;
    font-weight: 600;
}
.active-day:not(.now-day){
    color: #007fff;
    border: 2px solid #007fff;
    line-height: 46px;
}
</style>