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
      this.$calendar.show({
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
          this.$calendar.show({
              onOk(data){
                  vm.data= data.year+'-'+data.month+'-'+data.day;
                  console.log(data)
                  console.log('确定123')
              },
              onCancel(){
                  console.log('取消123')
              },
            year:2015,
            month:2,
            day:20,
          })
      }
  },
}
</script>
