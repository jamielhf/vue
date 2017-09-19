<template>

            <div class="scroller-component"  >
                <div class="scroller-mask" @touchstart.prevent="start"  @touchmove.prevent="move"   @touchend.prevent="end"></div>
                <div class="scroller-indicator" ></div>
                <div class="scroller-content" :style="style" >
                    <div class="scroller-item "  v-for = "i in dateList">{{i.txt}}</div>
                </div>

            </div>


</template>


<script>
    export default{
        data(){
            return{
                activeItem:0,
                itemLength:0,
                activeItemValue:0,
                curVal:'',//选中的值
                style:{}, //样式对象
                Y:0, //
                t:0.1, //时间
                touchStartTime:0,
                touchEndTime:0,
                eY:34*3, //
                sY:34*3,  //开始的位置
                isMoving:false,  //是否正在滚动
                itemHeight:34,  //每个item的高度
                isR:false  //是否是闰年
            }
        },
        props:{
            dataList:{
               type:Array,
               default:[]
           },
            type:{
                type:String,
                default:''
            }
        },
        mounted(){
            this.style =  {
                transform:'translate3d(0px, '+this.sY+'px, 0px)',
            }
        },
        computed:{
          dateList(){
              let a = [];
              let txt = '';
              switch (this.type){
                  case 'year':txt = '年';break;
                  case 'month':txt = '月';break;
                  case 'day':txt = '日';break;
                  default:txt = '年';
              }

              for(let i =this.dataList[0];i<=this.dataList[1];i++){
                  a.push({txt:i+txt,val:i})
              }
              this.itemLength = a.length

              return a

          }
        },
        methods:{
            start(e){
                this.sY = e.touches[0].clientY;
                this.touchStartTime = e.timeStamp;

//                console.log(this.sY)
            },

            move(e){

                this.Y =this.eY+ e.touches[0].clientY  - this.sY;
//
                this.t = 0.1;
                this.style =  {
                    transform:'translate3d(0px, '+this.Y+'px, 0px)',
                    transition:'all ease '+this.t+'s'
                }


            },
            end(e){

                let m = this.Y;
                let start  = 102;
                let end  = (this.itemLength-1)*-34+102;
                this.eY = this.Y;
                this.touchEndTime = e.timeStamp  - this.touchStartTime;

                this.t = 0.1;


                //没有移动
                if(this.sY ==e.changedTouches[0].clientY){
                    return
                }

                /*
                 * 在短时间移动比较大的距离的时候会滑动距离变大
                 * */

                if((this.touchEndTime<220)&&Math.abs(e.changedTouches[0].clientY-this.sY)>100){

                    this.eY  = this.eY+(e.changedTouches[0].clientY-this.sY)*this.touchEndTime/100
                    this.t = 25/this.touchEndTime*2;

                };

                //跳转对位
                if(Math.abs(this.eY%34)<=17){
                    this.eY =  parseInt(this.eY/34)*34;

                }else{
                    if(this.eY>0){
                        this.eY =  parseInt(this.eY/34)*34+34
                    }else{
                        this.eY =  parseInt(this.eY/34)*34-34
                    }

                }

                this.activeItem = Math.abs((this.eY-102)/34);


                //超出范围，滚回去
                if(this.eY>start){
                    this.Y= 102;
                    this.eY = 102;
                    this.activeItem = 0;
                }
                if(this.eY<=end){
                    this.Y= end;
                    this.eY = end;
                    this.activeItem = this.itemLength-1;
                }

                this.style =  {
                    transform:'translate3d(0px, '+this.eY+'px, 0px)',
                    transition:'all ease '+this.t+'s'
                }


                this.curVal = this.dateList[this.activeItem]['val']


                this.$emit('changeCurVal',this.type,this.curVal)


            }
        },
        watch:{



        }
    }


</script>