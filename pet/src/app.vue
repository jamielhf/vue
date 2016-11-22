
<template>
    <div class="com-app">

        <com-header :commData = "commConf" ></com-header>
         <transition :name="transitionName" >

                  <router-view class="child-view"></router-view>
         </transition>
        <com-footer v-show="commConf.isFooter"></com-footer>

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
        },
        components:{
            comHeader:Header,
            comFooter:Footer,
            comIndex:Index
        }
    }
</script>
