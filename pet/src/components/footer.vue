<template>
    <div class="footer" >
        <div>
          
            <router-link to="/index" ><span class="Hui-iconfont icon">&#xe625;</span><p>首页</p></router-link>
            <router-link to="/page1" ><span class="Hui-iconfont icon">&#xe681;</span><p>分类</p></router-link>
            <router-link to="/home/123" > <span class="Hui-iconfont icon">&#xe705;</span><p>个人</p></router-link>
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