<template>
  <div id="app" >
    <p @click = "setDate" >点击设置日期（默认今天）{{data}}</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期</p>
    <p>点击设置日期d</p>
    <!--<p @click = "setDate2" >设定指定的日期（20150220）</p>-->

  <p>{{data}}</p>




  </div>
</template>



<script>
import './css/style.scss'

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
       this.$calendar.show({
           onOk:function (date) {
               console.log(date)
           }
       });

    }

  },
}
</script>
