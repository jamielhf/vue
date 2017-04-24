
import calendarMain from '../components/calendarMain.vue'
import m from  '../css/style.scss'
import s from  '../css/calendar.scss'

let Calendar = {};


Calendar.install = function (Vue, options) {


    let opt = {
        startYear:1900,
        endYear:2050,
        date:'',     //完整的日期
        status:true,
        ok:false,      //点击ok
    }

    opt = Object.assign({},opt,options);

    console.log(opt)

    Vue.component('calendar-main', calendarMain)

    Vue.prototype.$calendar = function(settings = {},type ='open'){

        if(type=='close'){
            opt.status = false
        }


        let t = new Date();

        var  calendarComponent = Vue.extend({
            template: "<calendar-main v-show='status' :dateData='dateData'  ></calendar-main>",

            data:function(){
                return {
                    dateData:{
                        startYear:opt.startYear,
                        endYear:opt.endYear,
                        year:settings.year||t.getFullYear(),
                        month:settings.month||t.getMonth()+1,
                        day:settings.day||t.getDate(),
                        onOk:settings.onOk||function () {},
                        onCancel:settings.onCancel||function (){},
                    },
                    status:opt.status
                }
            }
        })

        Vue.prototype.$calendar['close'] = function(settings) {
            return Vue.prototype.$calendar(settings,'close')
        }
        Vue.prototype.$calendar['set'] = function(settings) {

        }
        Vue.prototype.$calendar['get'] = function(settings) {

        }

        Vue.prototype.$calendarDate = function() {
            return
        }


        var tpl1 = new calendarComponent().$mount().$el;
        document.body.appendChild(tpl1);


    };

}
export  default Calendar