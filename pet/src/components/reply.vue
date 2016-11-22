<template>
    <div  class="b-reply">
        <input class="r-input" type="text"  :placeholder="reply">
        <span @click="submit">回复</span>
    </div>
</template>

<script>
require('../css/reply.scss');
    export default{
        data: function () {
            return {

            };
        },
        props:{
            aid:{
                type:Number
            }
        },
        updated:function () {
             document.querySelector('.r-input').value = '';
        },
        computed:{

            reply:function () {
                if(this.$store.state.article.reply.name!=''){
                    return '回复 '+this.$store.state.article.reply.name
                }else{
                    return '评论'
                }

            }
        },
        methods: {
            //提交回复或评论
            submit:function (e) {
                let vm = this;

                let val = e.target.parentNode.querySelector('input').value;

                this.$store.dispatch('setReply',{
                    content:val
                }).then(function () {
                    vm.$store.dispatch('submitCommon');
                })


            }
        }




    }
</script>
