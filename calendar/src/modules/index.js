
import PickerCom from '../components/Picker.vue'
import { mergeOptions , getDate} from './util'
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
            startTime:'',
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
        // 有设置结束时间
        if(settings.endTime){
          let endY = (new Date(getDate(settings.endTime))).getFullYear();
          years[1] = endY;
         
        }
        // 有设置开始时间
        if(settings.startTime){
          let startY = (new Date(getDate(settings.startTime))).getFullYear();
          years[0] = startY;
        }
        // 两个都设置了
        if(settings.startTime && settings.endTime){
          if((new Date(getDate(settings.startTime))).getFullYear()>=(new Date(getDate(settings.endTime))).getFullYear()){
            years[0] = 1950;
            settings.startTime = '';
          }
        }
           
        if(settings.date){
          const setDate = new Date(getDate(settings.date));
          const end = (new Date(getDate(settings.endTime) || '2050-01-01').getTime());
          const start = (new Date(getDate(settings.startTime)|| '1950-01-01').getTime());
      
          //验证输入的年的范围是否正确
          if(setDate.getTime()>= start && setDate.getTime()<=end){
            settings.year = setDate.getFullYear();
            settings.month =  setDate.getMonth() + 1;
            settings.day =  setDate.getDate();
          
          }else{
            settings.date = '';
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

    }
    Vue.prototype.$picker.hide  = ()=>{
        instance.show = false
    }

}
export  default Picker


