/**
 * Created by linhaifeng on 2016/11/15.
 */
import api from '../../api/api';
import * as types from '../mutation';


const state = {
    index:{
        list:[],
        img:[]
    },
};

const getters = {
    indexListData: state => state.index.list,
    indexImgData: state => state.index.img
};

 const actions = {
     /*
     * 获取首页列表
     * */
    indexGetList ({ commit }) {
        commit(types.COMM_LOADING_STATUS,true);
        api.indexGetList(function (res) {
            commit(types.INDEX_GET_LIST_SUCCESS, { res })
        })
    },
     /*
     * 获取首页图片列表
     * */
     indexGetImg({commit}){
         api.indexGetImg(function (res) {
             commit(types.INDEX_GET_IMG_SUCCESS, { res });
             commit(types.COMM_LOADING_STATUS,false);

         })

     }
}

const mutations = {
    [types.INDEX_GET_LIST_SUCCESS] (state, { res }) {
        state.index.list = res
    },
    [types.INDEX_GET_IMG_SUCCESS] (state, {res}) {
       state.index.img = res;
    }

};


export default{
    state,
    getters,
    actions,
    mutations
}