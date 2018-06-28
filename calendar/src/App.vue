<template>
  <div id="app">
      <p @click = "setDate" >点击设置日期（默认今天）</p>
      <p>选中的时间{{date}}</p>
      <p @click = "setDate2" >设定指定的日期（2011-3-21）</p>
      <p>选中的时间{{date2}}</p>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
      return{
          date:'',
        date2:'2011-3-21'
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
        endTime:'2020-02-11',  //截至时间
        startTime:'2010-02-11',  //开始时间
        onOk:(e)=>{
          this.date2 = e;
        },

      })

    },

  },

}
</script>

