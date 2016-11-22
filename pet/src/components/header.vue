<template>
    <div class="header">
        <div v-show="commData.isSearch">
            <div class="place">位置</div>
            <com-search></com-search>
        </div>
        <div class="title" v-show="!commData.isSearch">
                <a  v-show="commData.isBack" class="back t-icon" @click="goBack"><span class="iconfont icon icon-xiangzuojiantou"></span></a>
                <a  v-show="commData.isShare" class="share t-icon" ><span class="iconfont icon icon-fenxiang-1"></span></a>
             <p>{{commData.title}}</p>
        </div>
    </div>
</template>

<script>
    import Search from './search.vue';
    import {mapGetters,mapActions} from 'vuex';
    require('../css/header.scss');
    export default{
        data:function(){
            return{

            }
        },
        props:{
            commData:{
                type:Object
            }
        },

        methods:{
          goBack:function () {
             history.go(-1);
          }
        },
        components:  {
            comSearch:Search
        }


    }


</script>