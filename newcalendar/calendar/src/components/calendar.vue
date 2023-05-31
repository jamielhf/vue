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
                        <com-date-scroll @setDate="setDate" :cur="dateData.year"  :startTime="dateData.startYear" :dType = "'year'" :endTime ="dateData.endYear"></com-date-scroll>
                  </div>
                    <div class="dp-item" >
                        <com-date-scroll @setDate="setDate"  :cur="dateData.month" :dType = "'month'"  ></com-date-scroll>

                    </div>
                    <div class="dp-item" >
                        <com-date-scroll @setDate="setDate"  :cur="dateData.day"  :dType = "'day'"  ></com-date-scroll>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss">

</style>

<script>
   import dateScroll from './dateScroll.vue';
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
                let vm = this;
                this.$emit('hide')
                this.dateData.onOk({
                    year:vm.year||vm.dateData.year,
                    month:vm.month||vm.dateData.month,
                    day:vm.day||vm.dateData.day,
                })
            },
            hiddenCalendar:function () {
                this.$emit('hide')
                this.dateData.onCancel()
            },
            setDate(d,v){
                switch (d){
                    case 'year':this.year = v;break;
                    case 'month':this.month = v;break;
                    case 'day':this.day = v;break;
                }

            }
        }
    }


</script>