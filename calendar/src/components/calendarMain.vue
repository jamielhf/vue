<template>
    <div class="com-calendar">
        <div class="cal-header">
            <div class=" dp-left " >取消</div>
            <div class=" dp-right " >确定</div>
        </div>
        <div class="cal-content">
            <picker></picker>
            <picker></picker>
            <picker></picker>
        </div>

    </div>

</template>


<script>
import picker from './picker.vue'
    export default{
        data(){
            return{}
        },
        components:{
            picker
        }
    }


</script>