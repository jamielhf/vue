<template>
  <div id="app">
    <p @click = "setDate" >点击设置日期（默认今天）</p>
    <p @click = "setDate2" >设定指定的日期（20150220）</p>
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

   setDate(){
      this.$calendar({
          onOk(data){
              console.log(data)
              console.log('确定')
          },
          onCancel(){
              console.log('取消')
          }
//        year:2015,
//        month:2,
//        day:20,
      })
    },
      setDate2(){
          this.$calendar({
              onOk(data){
                  console.log(data)
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
