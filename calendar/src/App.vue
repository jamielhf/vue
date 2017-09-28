<template>
  <div id="app" >
    <p @click = "setDate" >点击设置日期（默认今天）</p>
    <p>选中的时间{{data}}</p>
    <p @click = "setDate2" >设定指定的日期（2015-2-20）</p>
    <p>选中的时间{{data2}}</p>



  </div>
</template>



<script>
import './css/style.scss'

export default {
  name: 'app',
  data () {
    return {
        data:'',
        data2:''
    }
  },

  methods:{

   setDate(){

       this.$calendar.show({
           onOk: (date) =>{
              this.data = date
           }
       });

    },
    setDate2(){

        this.$calendar.show({
            year:[1925,2015],  //年份的范围,如果初始化的年份不在这个范围，会自动选最小的年份
            date:'2015-2-20',  //初始化的日期
            onOk: (date) =>{
                this.data2 = date
            },
            onCancel:()=>{
                console.log('关闭')
            }
        });

    },

  },
}
</script>
