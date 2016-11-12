<template>
     <div class="index">
         <com-img-scroll :img-data="imgData"></com-img-scroll>
        <div class="center">
          <a class="list"><span class="icon-sheshixiaomao iconfont icon"></span><p>猫</p></a>
          <a class="list"><span class="icon-sheshixiaogou iconfont icon"></span><p>狗</p></a>
          <a class="list"><span class="icon-yangyouchongwu iconfont icon"></span><p>其他</p></a>
        </div>
         <com-list v-bind:list-data="resData"></com-list>
         <com-loading v-if="loading"></com-loading>
    </div>
</template>



<script>
import imgScroll from '../components/imgScroll.vue';
import list from '../components/list.vue';
import loading from '../components/loading.vue';

require('../css/index.scss');
    export default{
        data:function(){
            return{
                data:'index',
                num:1,
                resData:{},
                imgData:{}
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            this.fetchData();
            //head的修改

            this.$store.commit('changeIndexConf',{
                isFooter:true,
                isSearch:true,
                isBack:false,
                isShare:false,
                title:''
            })
        },
        components:{
          comImgScroll:imgScroll,
          comList:list,
          comLoading:loading
        },
        computed:{
          loading:function () {
              return this.$store.state.comm.loading
          }
        },
        methods:{
            randomNum:function () {
                return {}
           },
            fetchData:function () {

                var vm = this;

                vm.$store.commit('isLoading',true);

                /*
                 * 获取图片列表信息
                 *
                 * */
                this.$http.get('/index/getImgList').then(function (res) {
                    let a = JSON.parse(res.body);
                    vm.imgData = a.data;


                });
                /*
                 * 获取首页列表信息
                 * */
                this.$http.get('/index/getList').then(function (res) {
                    let a = JSON.parse(res.body);
                    vm.resData = a.data;
                    vm.$store.commit('isLoading',false);
                });




            }

        }
    }


    console.log(app.$set);

    </script>