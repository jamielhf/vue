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
                        <com-date-scroll @setDate="setDate" :cur="curYear||year"  :startTime="startYear" :dType = "'year'" :endTime ="endYear"></com-date-scroll>
                  </div>
                    <div class="dp-item" >
                        <com-date-scroll @setDate="setDate"  :cur="curMonth||month" :dType = "'month'"  ></com-date-scroll>

                    </div>
                    <div class="dp-item" >
                        <com-date-scroll @setDate="setDate"  :cur="curDay||day"  :dType = "'day'"  ></com-date-scroll>
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
                sYear:'',
                sMonth:'',
                sDay:'',
                curYear:'',
                curMonth:'',
                curDay:'',
            }
        },
        props:{
            startYear:{
                type:Number
            },
            endYear:{
                type:Number
            },
            year:{
                type:Number
            },
            month:{
                type:Number
            },
            day:{
                type:Number
            },
            onOk:{
                type:Function
            },
            onCancel:{
                type:Function
            },
        },
        components:{
            comDateScroll:dateScroll
        },

        methods:{
            choiceDate:function(){
                let vm = this;
                this.$emit('hide');
                this.curYear = this.sYear
                this.curMonth = this.sMonth
                this.curDay = this.sDay
                this.onOk({
                    year:vm.curYear||vm.year,
                    month:vm.curMonth||vm.month,
                    day:vm.curDay||vm.day,
                })
            },
            hiddenCalendar:function () {
                this.$emit('hide')
                this.onCancel();
            },
            setDate(d,v){
                switch (d){
                    case 'year':this.sYear = v;break;
                    case 'month':this.sMonth = v;break;
                    case 'day':this.sDay = v;break;
                }

            }
        }
    }


</script>