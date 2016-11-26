<template>
  <div class="my-pet">
        <ul class="clearfix">
            <li>

                <img src="http://dummyimage.com/150x150">
                <p class="p1">名字</p>
                <div class="info">
                    <span class="kinds">什么种类</span>
                    <span class="ages">1个月</span>
                </div>
                <span class="iconfont icon-xiangyoujiantou icon-right"></span>
            </li>
        </ul>
      <router-link to="/home/mypet/addpet" class="add-pet">添加宠物</router-link>
  </div>
</template>



<script>
    require('../css/myPet.scss');
    export default{
        data:function(){
            return{

            }
        },
        created:function () {
            //head的修改

            this.$store.commit('COMM_CONF',{
                isFooter:false,
                isSearch:false,
                isBack:true,
                isShare:false,
                title:'我的宠物'
            })
        }
    }

    </script>