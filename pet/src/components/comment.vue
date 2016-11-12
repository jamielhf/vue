<template>
    <div class="com-comment">
        <div class="title">评论区</div>
        <div class="content">
            <ul class="c-list clearfix">


                <li v-for="(v,k) in replyData">
                    <div class="c-top clearfix">
                        <img :src="v.userIcon">
                        <p class="name">{{v.name}}</p>
                        <time>{{v.time}}</time>
                        <a @click="doReply" :commentId="v.commentId" :name="v.name"  class="reply"><span class="iconfont icon icon-more2"></span>回复</a>
                    </div>
                    <div class="c-bottom">

                       <p>{{v.content}}</p>
                       <p  v-for="d in v.reply" class="r-p" >
                           <span  @click="doReply" :commentId="v.commentId" :uid="d.r_userId" :name="d.r_name">{{d.r_name}} 回复 {{d.name}}</span> {{d.content}}
                       </p>
                    </div>
                </li>

            </ul>
            <a @click="doComment" class="comment-btn btn-b">评  论</a>
        </div>


    </div>


</template>




<script>
require('../css/comment.scss');



export default {
    data:function () {


      return{

      }
    },

    props:['content'],
    computed:{
         replyData:function () {
             return this.$store.state.reply.comment;
         }
    },
    methods:{
        doReply:function (event) {
            let p = event.target;
            let name = p.getAttribute('name');
            let id = p.getAttribute('commentId');


            this.$store.commit('reply',{name:name,commentId:id})
        },
        doComment:function () {

            this.$store.commit('reply',{name:'',commentId:''})
        }

    },
    watch:{

    }


}
</script>