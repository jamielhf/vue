<template>
    <div v-show="status">
        <com-calendar :dateData="dateData" v-on:hide="hide"></com-calendar>
        <div  class='mark'  ></div>
        <p></p>
    </div>

</template>


<script>
   import calendarComponent from '../components/calendar.vue'
   require('../css/calendar');
    export default {
        data:function () {
            return{
                status:true
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
            comCalendar:calendarComponent
        },
        methods:{
            hide(){
                this.status =false
            }
        }

    }


</script>