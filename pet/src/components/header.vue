<template>
    <div class="header">
        <div class="place">位置</div>
       <com-search></com-search>

    </div>
</template>

<script>
    import Search from './search.vue';
    require('../css/header.scss');
    export default{
        data(){
            return{

            }
        },
        components:  {
            comSearch:Search
        }


    }


</script>