<template>
    <div class="com-comment">
        <a @click="doComment" 　class="comment-btn btn-b">评  论</a>
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
                         <a  @click="doReply" :commentId="v.commentId" :uid="d.r_userId" :name="d.r_name">
                              <span >{{d.r_name}} 回复 {{d.name}}</span> {{d.content}}
                         </a>
                        </p>
                    </div>
                </li>

            </ul>

        </div>


    </div>


</template>




<script>
require('../css/comment.scss');



export default {
    data:function () {
      return{
         commentStatus:'',
         replyName:'',
          replyStatus:false,

      }
    },

    props:{
        replyData:{
            type:Array
        }

    },

    methods:{
        doReply:function (e) {

            let attr = e.target.attributes;
            let commentId = attr.commentId.value;
            let name =  attr.name.value;

            if(this.commentStatus == '' ||this.commentStatus == "comment"){
                this.commentStatus = 'reply';
                this.replyName =  attr.name.value;
                this.$store.dispatch('setReply',{
                    isComment: true,  //是否显示评论框,
                    name: name,  //是否显示评论框,
                    cId:commentId ,
                    type:'reply',  // reply or comment
                    content:null
                });
            }else if(this.replyName != attr.name.value && this.commentStatus == "reply"){
                this.replyName =  attr.name.value;
                this.$store.dispatch('setReply',{
                    isComment: true,  //是否显示评论框,
                    name: name,  //是否显示评论框,
                    cId:commentId ,
                    type:'reply',  // reply or comment
                    content:null
                });
            }else{
                this.commentStatus = '';
                this.replyName =  '';
                this.$store.dispatch('setReply',{
                    isComment: false,  //是否显示评论框,
                    name: '',  //是否显示评论框,
                    cId:'' ,
                    type:'reply',  // reply or comment
                    content:null
                });
            }




        },
        doComment:function (e) {
                if(this.commentStatus == '' ||this.commentStatus == "reply"){
                    this.commentStatus = 'comment';
                    this.$store.dispatch('setReply',{
                        isComment: true,  //是否显示评论框,
                        name:'',
                        cId:'',
                        type:'comment',  // reply or comment
                        content:null
                    });
                }else if(this.commentStatus=="comment"){
                    this.commentStatus = '';
                    this.$store.dispatch('setReply',{
                        isComment: false,  //是否显示评论框,
                        name:'',
                        cId:'',
                        type:'comment',  // reply or comment
                        content:null
                    });
                }




        }

    },
    watch:{

    }


}
</script>