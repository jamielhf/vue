<template>
    <div class="scroller-component" data-role="component"
         @touchmove.stop.prevent= "move"
         @touchend.stop.prevent = "end"
         @touchstart.stop.prevent="start">
        <div class="scroller-mask"  ></div>
        <div class="scroller-indicator" ></div>
        <div class="scroller-content" :style="styleObject"  >
            <div class="scroller-item" v-for = "i in all" :value="i">{{i}}</div>
        </div>
    </div>
</template>

<script>

    export default{
        data: function(){
            return{
                styleObject:{
                    transform:'translate(0,0)',
                },
                startY:'0',
                endY:'0',
                moveY:'0',
                Y:'0',
                isMoving:false,  //是否正移动
                timeOut:null,
                d:0,//初始位置
                curD:'' ,//当前位置的日期
                cNum:'', //数量
                t:[],  //所有数字的数组
                sT:0, //开始时间
                eT:0, //结束时间
                tDiff:0,
                max:102,
                min:'',
                isR:false,  //是否是闰年
                dayLength:30,
                all:[],
            }
        },
        props:{
            dType:{
                type:String
            },
            select:{
                type:Boolean
            },
            startTime:{
                type:Number,
                default:1950
            },
            endTime:{
                type:Number,
                default:2020
            }
        },
        methods: {
            end:function (e) {

                let vm = this,
                    mT = 0.3;

                vm.eT = e.timeStamp;
                vm.tDiff = vm.eT - vm.sT;

               /*
               * 在短时间移动比较大的距离的时候会滑动距离变大
               * */
                if((vm.tDiff<250)&&Math.abs(vm.moveY)>80){

                    vm.moveY  = vm.moveY*3;
                    mT = 0.8;
                };

                vm.Y = parseInt(vm.moveY) + parseInt(vm.Y);
                /*
                 * 每个li的高度是34，-17 是为了改变每个li位置的区间
                 * 让数字在中间的时候光标会选择这个数字
                 * */
                vm.Y-=17;
                vm.d = Math.ceil(vm.Y/34);
                if(vm.d>=3){
                    vm.d = 3;
                }else if(vm.d<=parseInt(4-vm.cNum)){
                    vm.d = parseInt(4-vm.cNum)
                }

                vm.Y = vm.d *34;


                vm.styleObject.transform  = "translate(0,"+vm.Y+"px)";
                vm.styleObject.transition  = "all "+mT+"s linear";

                vm.isMoving = true;
                vm.timeOut = setTimeout(function () {
                    vm.isMoving = false
                },mT)

            },
            start:function (e) {

                let vm = this;
                if(vm.isMoving){
                    return false
                }
                vm.startY = e.changedTouches[0].clientY;
                vm.sT = e.timeStamp

            },
            move:function (e) {

                let vm = this;
                let aY = 0;
                vm.min = (4-vm.cNum)*34;
                vm.moveY = e.changedTouches[0].clientY -  vm.startY ;
                aY = parseInt(vm.moveY) + parseInt(vm.Y);

                if(aY>vm.max+1){
                    aY = vm.max;
                }

                if(aY<0&&aY<=vm.min){
                    aY = vm.min
                }
                vm.styleObject.transition  = "all 0s";
                vm.styleObject.transform  = "translate(0,"+aY+"px)";

            }
        },
        computed:{
            all: {
                get:function(){
                    let vm = this,s =  vm.startTime,e = vm.endTime;
                    if(this.dType =="year"&&vm.t.length==0){
                        vm.cNum = e -s+1;
                        for( ;s<=e;s++){
                            vm.t.push(s+'年');
                        }

                    }else if(this.dType =="month"&&vm.t.length==0){
                        s = 1;e = 12;
                        vm.cNum = e -s+1;

                        for( ;s<=e;s++){
                            vm.t.push(s+'月');
                        }
                    }else if(this.dType =="day"){
                        s = 1;e = this.dayLength;
                        vm.t = [];
                        vm.cNum = e -s+1;
                        for( ;s<=e;s++){
                            vm.t.push(s+'日');
                        }
                    }
                    if(vm.t[Math.abs(vm.d-3 )]!=undefined){
                        vm.curD = vm.t[Math.abs(vm.d-3 )].match(/\d+/)[0];
                    }else{
                        vm.curD = 1;
                    }
                   vm.$store.dispatch('calendarDateStatus',{type:vm.dType,d:vm.curD});
                    return vm.t
                },


            },
            year:function () {
                let vm = this;
                return this.$store.getters.getYear
            },
            month:function () {
                return this.$store.getters.getMonth
            },
            day:function () {
                return this.$store.getters.getDay
            }
        },
        watch:{
            year:function () {
                let vm = this;
                vm.isR = vm.year%4==0?true:false;
                if(vm.dType =="day"&&this.month==2){

                    if(vm.isR){
                        vm.dayLength  = 29;
                    }else if(vm.curD==29){
                        vm.curD = 1;
                        vm.Y = 102;
                        vm.dayLength  = 28;
                        vm.styleObject.transition  = "all .5s";
                        vm.styleObject.transform  = "translate(0,102px)";
                    }

                }

            },
            month:function () {

                let vm = this;
                if(vm.dType =="day"){
                    let c2 = this.month ==2;
                    let c1 = [1,3,5,7,8,10,12].join().indexOf(this.month);
                   if(c2){
                        this.dayLength = vm.isR?29:28;
                       if(vm.curD>29){
                           vm.curD = 1;
                           vm.Y = 102;
                           vm.styleObject.transition  = "all .5s";
                           vm.styleObject.transform  = "translate(0,102px)";
                       }
                    }else  if(c1>=0){
                        this.dayLength = 31;

                    }else{
                        this.dayLength = 30;
                       if(vm.curD==31){
                           vm.curD = 1;
                           vm.Y = 102;
                           vm.styleObject.transition  = "all .5s";
                           vm.styleObject.transform  = "translate(0,102px)";
                       }
                    }

                }
            }

        }

    }
</script>
