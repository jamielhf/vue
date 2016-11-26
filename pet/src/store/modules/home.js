/**
 * Created by linhaifeng on 2016/11/15.
 */
import * as types from '../mutation';
import api from '../../api/api';

const state = {
    info:{

    }
}

const actions ={
    getHomeIndex:function ({commit}, uid) {
        commit(types.COMM_LOADING_STATUS,true);
        log(state);
        api.getHomeIndex(uid,function (res) {
            commit(types.HOME_GET_INFO,res);
            commit(types.COMM_LOADING_STATUS,false)
        })
    }
}

const mutations = {
    [types.HOME_GET_INFO](state,res){
        state.info = res
    }
}

const getters  = {
    getHomeIndex : state => state.info
}

export default  {
    state,
    actions,
    mutations,
    getters
}