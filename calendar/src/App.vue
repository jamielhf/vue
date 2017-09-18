<template>
  <div id="app" @touchmove="start">
    <p @click = "setDate" >点击设置日期（默认今天）</p>
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
    start(e){
//        e.preventDefault()
    },
   setDate(){
       let vm = this;
        this.$calendar.show()
    }

  },
}
</script>
