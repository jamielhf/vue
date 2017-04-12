<template>
  <div id="app">
    <p @click  = "setDate">点击设置日期</p>
    <p @click  = "test">点击设置日期</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>dd</p>
    <p>{{date}}</p>



  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      //选择日期的开始返回，默认是1900 - 2050
       start:1950,
       end:2030
    }
  },

  methods:{
    setDate:function () {
      //触发日期组件
//      this.$store.dispatch('calendarStatus',true);
    },
    test(){
      this.$calendar({
        year:2015,
        month:2,
        day:20,
      })
    }
  },
    computed:{
      //遮罩状态
      mark:function () {
      //  return  this.$store.getters.markStatus
      },
      //组件状态
      calendar:function () {
   //     return this.$store.getters.getCalendarStatus?{ display:'block'}:{ display:'none'};
      },
      //返回的日期
      date:function () {
      //  return this.$store.getters.getCalendarDate;
      }

    }

}
</script>
