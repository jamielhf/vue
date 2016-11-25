/**
 * Created by linhaifeng on 2016/11/24.
 */
import * as types from '../mutation';

const state = {
    dateYear:'',
    dateMonth:'',
    dateDay:'',
    date:'',     //完整的日期
    status:false,
    ok:false,      //点击ok
    mark:false  //是否显示遮罩,
}

const actions = {
    //日期组件的开关
    calendarStatus:function ({commit},status) {

        commit(types.COMM_MARK_STATUS,status);
        commit(types.CALENDAR_STATUS,status)
    },
    //遮罩的开关
    markStatus({commit},status){
        commit(types.COMM_MARK_STATUS,status);
    },
    //单个数值
    calendarDateStatus:function ({commit},date) {

        commit(types.CALENDAR_DATE_STATUS,date);

    },
    //确定日期 
    calendarOk:function ({commit},status) {
        commit(types.CALENDAR_CHOICE,status);
        if(state.dateYear&&state.dateMonth&&state.dateDay&&status){
            commit(types.CALENDAR_GET_DATE);
            commit(types.COMM_MARK_STATUS,false);
            commit(types.CALENDAR_STATUS,false);
            commit(types.CALENDAR_CHOICE,false);
        }
    }
}

const mutations = {
    [types.CALENDAR_STATUS](state,status){
        state.status = status
    },
    [types.CALENDAR_GET_DATE](state){
        state.date =  state.dateYear+'-'+state.dateMonth+'-'+state.dateDay;
      
    },
    [types.CALENDAR_DATE_STATUS](state,date){

        switch(date.type){
            case 'year':state.dateYear = date.d;break;
            case 'month':state.dateMonth = date.d;break;
            case 'day':state.dateDay = date.d;break;
        }

    },
    [types.CALENDAR_CHOICE](state,status){
        state.ok = status;
    },
    [types.COMM_MARK_STATUS](state,status){

        state.mark = status
    }
}

const getters = {
    getCalendarStatus :state => state.status,
    getCalendarDate : state => state.date,
    getCalendarOk : state => state.ok,
    getYear : state => state.dateYear,
    getMonth : state => state.dateMonth,
    getDay : state => state.dateDay,
    markStatus : state => state.mark
}



export default {
    state,
    actions,
    mutations,
    getters
}