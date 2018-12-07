---
title: 'js1,0与true,false互转'
date: 2018-12-04 00:02:25
tags:
---
#JS的一點點寫法普及

我們通常會遇到這樣的情況,
當checkbox為true時傳1,為false時傳0到後臺;

這時候我們需要這樣處理:
if (selected) {
    selected = 1;
}else{
    selected = 0;
}

更好的寫法是用三目運算符:
selected = selected?1:0;
估計這是很多人的做法

有沒有更簡單的寫法呢?
有:
selected = +selected;

這是利用js的強制类型轉換(ToNumber)

同樣的
當後臺傳回0,1我們需要轉為false,true時
if (selected) {
    selected = true;
}else{
    selected = false;
}

用三目運算符:
selected = selected?true:false;

更簡單的寫法:
selected = !!selected;
同樣是利用js的強制类型轉換(ToBoolean)