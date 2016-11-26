
<template>
    <div class="com-app-box">
        <com-header :commData = "commConf" ></com-header>
        <div class="com-app">


             <transition :name="transitionName" >

                      <router-view class="child-view"></router-view>
             </transition>
        </div>
        <com-footer v-show="commConf.isFooter"></com-footer>
        <com-calendar :style = "calendar"></com-calendar>
        <com-loading v-if="loading"></com-loading>

        <div v-show  = "mark" class="mark" @touchmove.stop.prevent ="" @touchstart.stop.prevent =""  @touchend.stop.prevent =""></div>
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script >

import Header from './components/header';
import Footer from './components/footer';
import Index from './page/index';
import calendar from './components/calendar.vue';
import loading from './components/loading.vue';
require('./css/app.scss');
require('./css/style.scss');



    export default{
        data:function(){
            return {
                transitionName: 'slide-left'
            }
        },
        created:function(){

            if(this.$route.name==undefined){
                this.$router.push('index');
            }

            this.$store.commit('COMM_CONF',{isFooter:true});

        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        computed:{

                commConf:function () {
                    return  this.$store.getters.commConf
                },
                mark:function () {
                    return  this.$store.getters.markStatus
                },
                calendar:function () {
                    return this.$store.getters.getCalendarStatus?{ display:'block'}:{ display:'none'};
                },
               loading:function () {
                   return  this.$store.getters.loading
               }

        },
        components:{
            comHeader:Header,
            comFooter:Footer,
            comCalendar:calendar,
            comLoading:loading,
            comIndex:Index
        }
    }
</script>
