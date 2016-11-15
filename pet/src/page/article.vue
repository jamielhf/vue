<template>
    <div>


        <div class="com-article">

                <div class="user">
                    <img :src="resData.userIcon" alt=""/>
                    <div class="name">
                        <p>{{resData.name}}</p>
                        <div class="tag">
                            <span v-for="item in resData.tag">{{item}}</span>
                        </div>
                        <time>{{resData.time}}</time>
                    </div>


                </div>

                <div class="imgbox">
                    <img :src="resData.imgGrounp[0]">
                </div>
                <div class="art-detail">
                    <p>  {{resData.detail}}</p>

                </div>
                <com-comment ></com-comment>
            </div>

        <com-reply v-on:submit="handleSubmit"></com-reply>
    </div>
</template>


<script>
    import Comment from '../components/comment.vue';
    import Reply from '../components/reply';
    import axios from 'axios';

require('../css/article.scss');
    export default {
        data:function(){
           return {
                content:null,
                resData:{}
            }
        },
        created:function () {
            let vm = this;
            //loading的是显示
            vm.$store.commit('isLoading',true);
            //head的修改

            vm.$store.commit('changeIndexConf',{
                isFooter:false,
                isSearch:false,
                isBack:true,
                isShare:true,
                title:'详情页'
            });

            let id = this.$route.params.id;
            this.$store.state.reply.articleId = id;

            axios.get('/article/getData',{
                "articleId":id
            }).then(function (res) {
                console.log(res);
                vm.resData = res.data.data.data[0];

                vm.$store.state.reply.comment = vm.resData.comment;

                vm.$store.commit('isLoading',false);
            })


        },
        components:{
            comComment:Comment,
            comReply:Reply
        },
        methods:{
            handleSubmit:function (val) {

                this.content = val;

            }
        }
    }


</script>