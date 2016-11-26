<template>
     <div class="index">
         <com-img-scroll :img-data="indexImgData"></com-img-scroll>
        <div class="center">
          <a class="list"><span class="icon-sheshixiaomao iconfont icon"></span><p>猫</p></a>
          <a class="list"><span class="icon-sheshixiaogou iconfont icon"></span><p>狗</p></a>
          <a class="list"><span class="icon-yangyouchongwu iconfont icon"></span><p>其他</p></a>
        </div>
         <com-list v-bind:list-data="indexListData"></com-list>

    </div>
</template>



<script>
import imgScroll from '../components/imgScroll.vue';
import list from '../components/list.vue';

import {mapGetters,mapActions} from 'vuex';

require('../css/index.scss');
    export default{
        data:function(){
            return{
                data:'index',
                num:1,
                imgData:{},
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了

            /*
            *
            *分发
            * */
            var vm = this;
            vm.$store.commit('COMM_CONF',{
                isFooter:true,
                isSearch:true,
                isBack:false,
                isShare:false,
                title:''
            });

             if(vm.$store.state.index.index.img.length==0){
                 vm.$store.dispatch('indexGetList').then(function () {
                     vm.$store.dispatch('indexGetImg');
                 });
             }


        },
        components:{
          comImgScroll:imgScroll,
          comList:list,
        },
        computed: mapGetters({
           // 映射 this.doneCount 到 store.getters.doneTodosCount
            indexListData: 'indexListData',
            indexImgData: 'indexImgData',


        }),

    }




    </script>