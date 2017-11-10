
import CalendarMain from '../components/calendarMain.vue'
import { mergeOptions } from './util'
import '../css/calendar.scss'



let Calendar = {};


Calendar.install = function (Vue) {

    let t = new Date();

    Vue.prototype.$calendar = {}

    let  CalendarMainCom = Vue.extend(CalendarMain)

    let instance = new CalendarMainCom({
        el: document.createElement('div')
    })


    document.body.appendChild(instance.$el);


    console.log(instance)
    Vue.prototype.$calendar.show  = (settings={})=>{
        instance =  Object.assign(instance, {
            show :true,
            year:[1951,2050],
            month:[1,12],
            day:[1,31],
            curYear:1951,
            curMonth:1,
            endTime:'',
            date:'',
            curDay:1,
        })

        let d = ''

                //传入日期，或者已经有选中的日期，就会是初始值
            let date = settings.date||instance.date;
                if(date){
                    try{
                         d = date.split('-')
                    }catch (e){
                        console.log(e);
                        let time = new Date()
                        d = [time.getFullYear(),time.getMonth()+1,time.getDate()]
                    }
                }else{
                    let time = new Date()
                    d = [time.getFullYear(),time.getMonth()+1,time.getDate()]
                }


            if(settings.year){

                if(d[0]<settings.year[0]||d[1]>settings.year[1]){
                    d[0] = settings.year[0]
                }
            }
            let reg = /^(?:(?!0000)[0-9]{4}-(?:(?:[1-9]|1[0-2])-(?:[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:[13578]|1[02])-31)|(?:[0-9]{2}(?:[48]|[2468][048]|[13579][26])|(?:[48]|[2468][048]|[13579][26])00)-2-29)$/;


            if(!reg.test(settings.endTime)){
                console.log('所填的时间格式有误吧')
                settings.endTime = ''
            }


        [settings.curYear,settings.curMonth,settings.curDay] = d;

            console.log(settings)

        mergeOptions(instance, settings)


    }
    Vue.prototype.$calendar.hide  = ()=>{
        instance.show = false
    }

    Vue.prototype.$calendar.getDate  = ()=>{
        return {
            year:instance.year||(new Date).getFullYear(),
            month:instance.month||((new Date).getMonth()+1),
            day:instance.day||(new Date).getDay()
        }
    }


}
export  default Calendar


