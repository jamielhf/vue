/**
 * Created by linhaifeng on 2016/11/18.
 */
import * as types from '../mutation';
/*
* 通用的配置，例如顶部的配置跟地址菜单
*
*
* */
const state = {
    comm:{
        isSearch:true,  //是否显示搜索
        isBack:false,   //是否显示返回
        isShare:false,  //是否显示分享
        title:'',  //显示标题内容
        isFooter:false,  //是否显示底部
        loading:false  //是否显示loading
    }
};

const actions  = {
    commConf({commit},settings){
        commit(types.COMM_CONF,settings);
    }
};


const getters = {
    commConf : state => state.comm,
    loading : state => state.comm.loading
};

const mutations = {
    [types.COMM_CONF](state,settings){
        state.comm = Object.assign(state.comm,settings);

    },
    [types.COMM_LOADING_SHOW](state){

        state.comm.loading = true
    },
    [types.COMM_LOADING_HIDDEN](state){

        state.comm.loading = false
    }
};


export default {
    state,
    actions,
    getters,
    mutations
}