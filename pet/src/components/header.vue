<template>
    <div class="header">
        <div v-show="isShowSearch">
            <div class="place">位置</div>
            <com-search></com-search>
        </div>
        <div class="title" v-show="!isShowSearch">
                <a  v-show="isBack" class="back t-icon" @click="goBack"><span class="iconfont icon icon-xiangzuojiantou"></span></a>
                <a  v-show="isShare" class="share t-icon" ><span class="iconfont icon icon-fenxiang-1"></span></a>
             <p>{{title}}</p>
        </div>
    </div>
</template>

<script>
    import Search from './search.vue';
    require('../css/header.scss');
    export default{
        data:function(){
            return{

            }
        },

        computed:{
           isShowSearch:function () {
             return this.$store.state.comm.indexConf.isSearch
           },
            title:function () {
                return this.$store.state.comm.indexConf.title
            },
            isBack:function () {
                return this.$store.state.comm.indexConf.isBack
            },
            isShare:function () {
                return  this.$store.state.comm.indexConf.isShare
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