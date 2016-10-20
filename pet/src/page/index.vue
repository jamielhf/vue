<template>
     <div>
        <div>
            <p>{{data}}</p>
            <p>{{num}}</p>
            <a class="btn" v-on:click="randomNum">点击</a>

        </div>
    </div>
</template>



<script>

require('../css/index.scss');
    export default{
        data(){
            return{
                data:'index',
                num:1
            }
        },
        methods:{
            randomNum:function () {
              this.num = parseInt(10*Math.random());
           }

        }
    }

    </script>