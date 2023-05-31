
import CalendarMain from '../components/calendarMain.vue'
import { mergeOptions } from './util'
import   '../css/style.scss'
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

    Vue.prototype.$calendar.show  = (settings={})=>{
        instance.show = true;
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
                    console.log(d)
                if(d[0]<settings.year[0]||d[1]>settings.year[1]){
                    d[0] = settings.year[0]
                }
            }



        [settings.curYear,settings.curMonth,settings.curDay] = d;
        mergeOptions(instance, settings)

        console.log(instance)

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


