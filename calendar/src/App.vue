<template>
  <div id="app">
      <p @click = "setDate" >点击设置日期（默认今天）</p>
      <p>选中的时间{{date}}</p>
      <p @click = "setDate2" >设定指定的日期（2018-3-31）</p>
      <p>选中的时间{{date2}}</p>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
      return{
          date:'',
          date2:'2018-3-31'
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
        endTime:'2025-9-8',  //截至时间
        startTime:'2010-06-19',  //开始时间
        onOk:(e)=>{
          this.date2 = e;
        },

      })

    },

  },

}
</script>

