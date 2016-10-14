<template>
    <div class="footer">
        <div>
          
            <router-link to="/index" >首页</router-link>
            <router-link to="/page1" >页面1</router-link>
            <router-link to="/page2/123" >页面2</router-link>
        </div>
    </div>
</template>



<script>
    require('../css/footer.scss');


    export default{
         data(){
            return{
                msg:'hello vue'
            }
        },
         methods: {
           selnav:function(e){
         
           }
         }

    }

</script>