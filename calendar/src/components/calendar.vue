<template>
    <div class="com-calendar"  >
        <div class="dp-container">
            <div class="dp-header">
                <div class="dp-item dp-left" @click = "hiddenCalendar">cancel</div>
                <div class="dp-item dp-right" @click = "choiceDate">ok</div>
            </div>
            <div class="dp-content">
                <div class="dp-content">
                    <div class="dp-item" >
                        <com-date-scroll :cur="dateData.year"  :startTime="dateData.startYear" :dType = "'year'" :endTime ="dateData.endYear"></com-date-scroll>
                  </div>
                    <div class="dp-item" >
                        <com-date-scroll  :cur="dateData.month" :dType = "'month'"  ></com-date-scroll>

                    </div>
                    <div class="dp-item" >
                        <com-date-scroll  :cur="dateData.day"  :dType = "'day'"  ></com-date-scroll>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>



<script>
   import dateScroll from './dateScroll.vue';
   require('../css/calendar');
    export default {
        data:function () {
            return{
                status:false,
                year:'',
                month:'',
                day:''
            }
        },
        props:{
            dateData:{
                type:Object,
                default: function () {
                    return { }
                }
            }
        },
        components:{
            comDateScroll:dateScroll
        },
        computed: {
            status:function(){
//                return this.$store.getters.getCalendarOk;
            }
        },
        methods:{
            choiceDate:function(){
//               this.$store.dispatch('calendarOk',true)
            },
            hiddenCalendar:function () {
                this.$emit('hide')

            }
        }
    }


</script>