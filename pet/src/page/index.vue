<template>
     <div class="index">
         <com-img-scroll></com-img-scroll>
        <div class="center">
          <a class="list"><span class="Hui-iconfont icon">&#xe648;</span><p>猫</p></a>
          <a class="list"><span class="Hui-iconfont icon">&#xe648;</span><p>狗</p></a>
          <a class="list"><span class="Hui-iconfont icon">&#xe648;</span><p>其他</p></a>
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
                resData:{}
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

                this.$http.get('/json.json?!23').then(function (res) {
                    vm.resData = res.body.data;
                    vm.$store.commit('isLoading',false);
                })


            }

        }
    }


    console.log(app.$set);

    </script>