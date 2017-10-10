<template>
    <transition name="fade">

            <div class="com-calendar-box" v-if="show">
                <div class="com-mark"  @touchmove.prevent="stop" @click="close"  v-if="show"></div>
                <div class="com-calendar"   >
                    <div class="cal-header">
                        <div class=" dp-left "  @click="close">取消</div>
                        <div class=" dp-right " @click="chose">确定</div>
                    </div>
                    <div class="cal-content"  >
                        <picker :defaultVal=curYear  @changeCurVal=changeCurVal :dataList = year type="year"></picker>
                        <picker :defaultVal=curMonth @changeCurVal=changeCurVal :dataList = month type="month"></picker>
                        <picker :defaultVal=curDay @changeCurVal=changeCurVal :dataList = day type="day"></picker>
                    </div>

                </div>
            </div>

    </transition>

</template>


<script>
import picker from './picker.vue'
    export default{
        data(){
            return{
                show :false,
                year:[1951,2050],
                month:[1,12],
                day:[1,31],
                curYear:1951,
                curMonth:1,
                date:'',
                curDay:1,
                onOk:(e) =>{
                    console.log(this.curYear+'-'+this.curMonth+'-'+this.curDay)
                },
                onCancel: () =>{
                    console.log('close')
                }
            }
        },
        mounted(){


        },

        computed:{
          isR(){
              let isR = this.curYear%4==0?true:false;
              console.log(this.curYear%4)
              return  isR
          }
        },
        watch:{
            //初始化的值要判断下日期的范围
            date(){
                this.changeCurVal('year',this.curYear)
                this.changeCurVal('month',this.curMonth)
            },
        },
        components:{
            picker
        },
        methods:{
            stop(e){
                e.preventDefault();
            },
            close(){
               this.$calendar.hide()
                this.onCancel()
            },
            chose(){
                this.$calendar.hide();
                let d = this.curYear+'-'+this.curMonth+'-'+this.curDay;
                this.date = this.curYear+'-'+this.curMonth+'-'+this.curDay;
                this.onOk(d)
            },
            changeDataList(){
                let c2 = this.curMonth ==2;

                let c1 = [1,3,5,7,8,10,12].join().indexOf(this.curMonth);

                if(c2){
                    if(this.isR){
                        this.day = [1,29];
                    }else{
                        this.day = [1,28];
                    }
                }else if(c1<0){
                    this.day = [1,30];
                }else{
                    this.day = [1,31];
                }

            },
            changeCurVal(type,val){
                if(type=='year'){
                    this.curYear = val;
                    this.changeDataList()
                }
                if(type=='day'){
                    this.curDay = val;
                }
                if(type=='month'){
                    this.curMonth = val;
                    this.changeDataList()

              }

            }
        }
    }


</script>