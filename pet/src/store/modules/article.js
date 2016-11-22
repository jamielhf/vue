/**
 * Created by linhaifeng on 2016/11/15.
 */

/*
* 文章内容
*
* */
import * as types from '../mutation';
import api from '../../api/api';

const state = {
        reply:{
            isComment: false,  //是否显示评论框,
            cId:'',
            name:'',
            type:'comment',  // reply or comment
            content:null
        },

        article:{
            comment:{}
        }
};


const actions =  {
    articleGetContent({commit},id){
        // "use strict";
        api.articleGetContent(id,function (res) {
            commit(types.ARTICLE_GET_CONTENT,res)
        })
    },
    commonStatus({commit},s){
      commit(types.ARTICLE_REPLY_STATUS,s)
    },
    /*
     * 提交评论的信息
     * */
    submitCommon({commit}){
        let r = state.reply;
        api.articleSubmit(r.content,'123',r.name,state.article.articleId,r.commentId,function (res) {
            commit(types.ARTICLE_SUBMIT_COMMENT,res);
            
        })
    },
    /*
    * 设置提交评论的信息
    * */
    setReply({commit},settings){
        // "use strict";
        commit(types.ARTICLE_SET_REPLY,settings)
    }

};


const mutations = {
      [types.ARTICLE_GET_CONTENT](state,res){

            state.article = res
      },
    [types.ARTICLE_REPLY_STATUS](state,s){
        // "use strict";
        state.reply.isComment = s
    },
   
    [types.ARTICLE_SUBMIT_COMMENT](state,res){
        state.article = Object.assign(state.article,res)
    },

    [types.ARTICLE_SET_REPLY](state,settings){
        state.reply = Object.assign(state.reply,settings)
    }
};

const getters = {
    articleContent:state => state.article,
    isComment:state => state.reply.isComment,
    getReply:state => state.reply
};

export default {
    state,
    actions,
    mutations,
    getters
}