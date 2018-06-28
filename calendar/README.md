# calendar vue日期选择组件

## 重要

> 最新的版本可能跟之前的调用方法有点不同，升级的时候请看下面的调用方法

## 介绍

>一个选择日期的vue组件

基于vue2.0

修改了之前版本依赖vuex，插件化  支持npm

github地址 https://github.com/jamielhf/vue/tree/master/calendar

我的博客地址 http://jamielhf.cn

## demo展示&&项目中的使用

在线demo地址：https://jamielhf.github.io/vue/calendar/dist/

## 目录结构

demo 用vue-cli 的webpack构建的，加了publish的文件,在发布npm的时候

```bash
　|--dist　build生成的目录
　|--doc   展示图片
  |--lib   publish 之后的文件，发布到npm用
　|--src
　　　|--assets 资源
　　　|--components
　　　　　|--Picker    日期组件
　　　　　|--PickerItem  滚动的子组件
      |--modules 插件的js
　　　|--css
　　　|App.vue   入口
　　　|main.js
```

## 组件使用

>安装

```bash
npm i vue2-datepick --save
```

>初始化

```js
import Calendar from 'vue2-datepick';
Vue.use(Calendar);
```

>使用

```js
 <script>

 export default {
   name: 'App',
   data(){
       return{
           date:'',
         date2:'2010-3-2'
         }
   },
   methods:{
     setDate(){

       this.$picker.show({
         type:'datePicker',
         onOk: (date) =>{
           this.date = date
         }
       });

     },
     setDate2(){

       this.$picker.show({
         type:'datePicker',
         date:this.date2,  //初始化时间
         endTime:'2015-02-11',  //截至时间
         onOk:(e)=>{
           this.date2 = e;
         },

       })

     },

   },

 }
 </script>




```

### 版本

3.0.5 修改bug  
3.0.4 修改样式不居中的问题  
3.0.0 修复之前的部分bug，还有样式的问题，现在是用vw做单位所以可能在低版本的手机会不兼容  
2.1.0 添加了endTime终止的时间，更新了vue的版本  
2.0.4 点击背景可以关闭  
2.0.0 修复之前的日期没有联动的bug，重构了一次  
1.0.4 更改初始化的代码  
