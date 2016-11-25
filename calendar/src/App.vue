<template>
  <div id="app">
    <p @click  = "setDate">点击设置日期</p>
    <p>{{date}}</p>
    <com-calendar :style = "calendar" :startTime = "start" :endTime="end"></com-calendar>

    <div v-show  = "mark" class="mark" @touchmove.stop.prevent ="" @touchstart.stop.prevent =""  @touchend.stop.prevent =""></div>

  </div>
</template>

<script>
  require('./css/style.scss');
import calendar from './components/calendar';
export default {
  name: 'app',
  data () {
    return {
      //选择日期的开始返回，默认是1900 - 2050
       start:1950,
       end:2030
    }
  },
  components:{
    comCalendar:calendar
  },
  methods:{
    setDate:function () {
      //触发日期组件
      this.$store.dispatch('calendarStatus',true);
    }
  },
    computed:{
      //遮罩状态
      mark:function () {
        return  this.$store.getters.markStatus
      },
      //组件状态
      calendar:function () {
        return this.$store.getters.getCalendarStatus?{ display:'block'}:{ display:'none'};
      },
      //返回的日期
      date:function () {
        return this.$store.getters.getCalendarDate;
      }

    }

}
</script>
