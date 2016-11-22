/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import index from './modules/index';
import article from './modules/article';
import home from './modules/home';
import comm from './modules/comm';

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
        comm,
        index,
        article,
        home
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
    // state: {
    //     //评论相关
    //     reply:{
    //         isComment: false,  //开启评论,
    //         name:'',
    //         articleId:'',
    //         commentId:'',
    //         type:'comment',  // reply or comment
    //         content:null,
    //         comment:{}
    //     },
    //     //公共
    //     comm:{
    //         loading:false,
    //         indexConf:{
    //             isFooter:true,  //是否显示底部
    //             isSearch:true,  //是否显示搜索
    //             isBack:false, //是否显示返回
    //             isShare:false,//是否显示分享
    //             title:''//标题
    //         }
    //     }
    //
    // },
    // mutations: {
    //     /*
    //     * 评论回复
    //     * @param name 回复的用户名
    //     * */
    //     reply:(state,data) => {
    //
    //         if(data.name==state.reply.name&&state.reply.isComment&&data.commentId==state.reply.commentId){
    //             state.reply.isComment = false;
    //         }else{
    //             state.reply.name = data.name;
    //             state.reply.commentId = data.commentId;
    //             state.reply.isComment = true;
    //         }
    //
    //     },
    //     /*
    //     * loading的显示
    //     * */
    //     isLoading:(state,status) => {
    //
    //         state.comm.loading = status;
    //     },
    //     /*
    //     * 修改header的信息
    //     *
    //     * */
    //     changeIndexConf:(state,data)=>{
    //
    //         Object.assign(state.comm.indexConf,data);
    //     },
    //
    // }
});


export default store