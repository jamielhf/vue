
import PickerCom from '../components/Picker.vue'
import { mergeOptions } from './util'
import '../css/calendar.scss'

let Picker = {};


Picker.install = function (Vue) {

    let t = new Date();

    Vue.prototype.$picker= {}

    let  CalendarMainCom = Vue.extend(PickerCom)

    let instance = new CalendarMainCom({
        el: document.createElement('div')
    })

    document.body.appendChild(instance.$el);

    Vue.prototype.$picker.show  = (settings={})=>{
      let date =  new Date()
        instance =  Object.assign(instance, {
            show :true,
            type:'picker', //默认选择器
            data:[],
            year:date.getFullYear(),
            month:date.getMonth()+1,
            day:date.getDate(),
            endTime:'',
            date:'',
            onOk(e){
              console.log(e)
              console.log('选中回调')
            },
            onCancel(){
              console.log('取消回调')
            }
        })

//如果是日期模式
      if(settings.type=='datePicker'){
        let years = [1950,2050];
        let endY = (new Date(settings.endTime)).getFullYear();
        if(settings.endTime && endY>=years[0] &&  endY<=years[1]){

          if(settings.date){
            let e1 = new Date(settings.endTime).getTime();
            let e2 = new Date(settings.date).getTime();
            if(e2>e1){
              settings.endTime = ''
            }else{
              years[1] = endY;
            }
          }else{
            years[1] = endY;
          }

        }else{
          settings.endTime = ''
        }
console.log(years)
        if(settings.date){
          let t = settings.date.split('-');
          //验证输入的年的范围是否正确
          if(t[0]>= years[0]&&t[0]<=years[1]){
            settings.year = +t[0];
            settings.month = +t[1];
            settings.day = +t[2];
          }
        }


        let months = [1,12];
        let days = [1,30];
        let yearsList =[],monthsList = [],daysList = [];

        for(;years[0]<=years[1];years[0]++){
          yearsList.push(years[0]+'年')
        }
        for(;months[0]<=months[1];months[0]++){
          monthsList.push(months[0]+'月')
        }
        for(;days[0]<=days[1];days[0]++){
          daysList.push(days[0]+'日')
        }

        settings.dataList = [
          yearsList,monthsList,daysList
        ]
      }

     mergeOptions(instance, settings)
      console.log(instance)

    }
    Vue.prototype.$picker.hide  = ()=>{
        instance.show = false
    }

}
export  default Picker


