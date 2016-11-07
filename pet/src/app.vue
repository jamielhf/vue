
<template>
    <div>
    
        <com-header ></com-header>
         <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        <com-footer v-show="isFooter"></com-footer>


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

var data  = {
    page:'index'
};

    export default{
        data:function(){
            return data
        },
        created:function(){

            if(this.$route.name==undefined){
                this.$router.push('index');
            }
        },
        computed:{
            isFooter:function () {
                return this.$store.state.comm.indexConf.isFooter;
            }
        },
        components:{
            comHeader:Header,
            comFooter:Footer,
            comIndex:Index
        }
    }
</script>
