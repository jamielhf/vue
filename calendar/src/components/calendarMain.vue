<template>
    <transition name="fade">

            <div class="com-calendar-box" v-if="show">
                <div class="com-mark"  @touchmove.prevent="stop"   v-if="show"></div>
                <div class="com-calendar"   >
                    <div class="cal-header">
                        <div class=" dp-left "  @click="close">取消</div>
                        <div class=" dp-right " >确定</div>
                    </div>
                    <div class="cal-content"  >
                        <picker  @changeCurVal=changeCurVal :dataList = year type="year"></picker>
                        <picker @changeCurVal=changeCurVal :dataList = month type="month"></picker>
                        <picker @changeCurVal=changeCurVal :dataList = day type="day"></picker>
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
                curDay:1,

            }
        },
        created(){


        },
        computed:{
          isR(){
              let isR = this.curYear%4==0?true:false;
              console.log(this.curYear%4)
              return  isR
          }
        },
        watch:{
            show(){
                console.log(this.show)
            },
            curYear(){
                console.log(this.curYear)
            }
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