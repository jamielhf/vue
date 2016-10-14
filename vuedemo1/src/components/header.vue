<template>
    <div class="header">

        <div >{{myPageType}}</div>

    </div>
</template>

<script>
    require('../css/header.scss');
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
         props: ['myPage'],
       computed: {
          myPageType:function(){
             let name;
             switch(this.myPage){
               case 'index': name='首页';break;
               case 'page1': name='第一页';break;
               case 'page2': name='第二页';break;
               default:name='首页';break;
             }
            return name;
          }
       }

    }


</script>