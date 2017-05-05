<template>
    <transition name="fade">
    <div v-show="show">
        <com-calendar
                :startYear="startYear"
                :endYear="endYear"
                :month="month"
                :year="year"
                :day="day"
                :onOk="onOk"
                :onCancel="onCancel"
                v-on:hide="hide"
        ></com-calendar>
        <div  class='mark'></div>
        <p></p>
    </div>
    </transition>

</template>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
<script>
   import calendarComponent from '../components/calendar.vue'
    export default {
        data:function () {
            return {
                 show:false,
                 startYear:1900,
                 endYear:2050,
                 year:(new Date).getFullYear(),
                 month:((new Date).getMonth()+1),
                 day:(new Date).getDay(),
                 onOk:function () {},
                 onCancel:function (){},
            }
        },

        mounted(){
            console.log(this.year+'---')
        },
        components:{
            comCalendar:calendarComponent
        },
        methods:{
            hide(){
                this.show =false
            }
        }

    }


</script>