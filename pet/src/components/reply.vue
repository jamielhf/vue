<template>
    <div v-show="isComment" class="b-reply">
        <input class="r-input" type="text" :placeholder="reply">
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
        updated:function () {
             document.querySelector('.r-input').value = '';
        },
        computed:{
            isComment:function () {
                return this.$store.state.reply.isComment
            },
            reply:function () {
                if(this.$store.state.reply.name!=''){
                    return '回复 '+this.$store.state.reply.name
                }else{
                    return '评论'
                }

            }
        },
        methods: {
            //提交回复或评论
            submit:function (e) {
                let vm = this;
//                let name = this.$store.state.reply.name;
                let val = e.target.parentNode.querySelector('input').value;



                    this.$http.get('/json1.json',{val:val,uid:this.$store.state.reply.articleId}).then(function (res) {
                        vm.resData = res.body.data;

                        if(vm.resData.code==1000){
                            e.target.parentNode.querySelector('input').value = '';

                            vm.$store.state.reply.comment = vm.resData.data[0].comment;

                        }

                    })


            }
        }




    }
</script>
