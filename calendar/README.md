# calendar vue日期选择组件

## 介绍
>一个选择日期的vue组件

>基于vue2.0

>修改了之前版本依赖vuex，现在比较插件化 

>github地址 https://github.com/jamielhf/vue/tree/master/calendar

>我的博客地址 http://jamielhf.cn

## demo展示&&项目中的使用

<img width = "384" src="doc/2.gif"/>
<img width = "300" src="doc/12.png"/>

##目录结构

demo 用vue-cli 的webpack-simple构建的
```
calendar
　|--dist　build生成的目录
　|--doc   展示图片
　|--src
　　　|--assets 资源
　　　|--components
　　　　　|--calendar    日期组件
　　　　　|--dateScroll  滚动的子组件
　　　|--css
　　　|App.vue   入口
　　　|main.js   
```

##组件使用
>初始化
```javascript
import Calendar from './modules/index';
Vue.use(Calendar);
```

>默认的年份是 1900 - 2050 如果需要可以在初始化的时候传入参数。如
```javascript
Vue.use(Calendar,{
    startYear:2000,
    endYear:2010,
});
```
>使用


``` javascript
   <template>
     <div id="app">
       <p @click = "setDate" >点击设置日期（默认今天）</p>
       <p @click = "setDate2" >设定指定的日期（20150220）</p>
   
     <p>{{data}}</p>
     </div>
   </template>
   
   <script>
   
   
   export default {
     name: 'app',
     data () {
       return {
           data:'日期'
       }
     },
   
     methods:{
   
      setDate(){
          let vm = this;
         this.$calendar({
             onOk(data){
                 console.log(data)
                 vm.data= data.year+'-'+data.month+'-'+data.day;
                 console.log('确定')
             },
             onCancel(){
                 console.log('取消')
             }
         })
       },
         setDate2(){
             let vm = this;
             this.$calendar({
                 onOk(data){
                     vm.data= data.year+'-'+data.month+'-'+data.day;
                     console.log('确定')
                 },
                 onCancel(){
                     console.log('取消')
                 },
               year:2015,
               month:2,
               day:20,
             })
         }
     },
   }
   </script>

```


##运行
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

