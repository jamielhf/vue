<template>
    <div class="footer">
        <div>
          
            <router-link to="/index" >首页</router-link>
            <router-link to="/page1" >页面1</router-link>
            <router-link to="/page2/123" >页面2</router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import "min";

.footer{
  position: fixed;
  bottom:0;
  left: 0;
  width: 100%;
  height:px2rem(120);

  div{
    position: relative;
    display: flex;
    border-top:1px solid #999;
  }
  a{
    position: relative;
    height: px2rem(120);
    width:33.33%;
    flex:auto;
    color:#999;
    font-size:px2rem(28);
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
    line-height:px2rem(120);
    &.active{
      color:#3a9e50;
      font-size:px2rem(36);
    }

    &:last-child{
      border-right:0
    }

  }
}

</style>

<script>
    //require('../css/footer.scss');


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