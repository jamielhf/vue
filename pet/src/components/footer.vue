<template>
    <div class="footer" >
        <div>
          
            <router-link to="/index" ><span class="icon-shouye iconfont "></span><p>首页</p></router-link>
            <router-link to="/page1" ><span class="icon-xitongcaidan iconfont "></span><p>宠圈</p></router-link>
            <router-link to="/home" > <span class="icon-myline iconfont "></span><p>个人</p></router-link>
        </div>
    </div>
</template>



<script>
    require('../css/footer.scss');


    export default{
         data:function(){
            return{

            }
        }

    }

</script>