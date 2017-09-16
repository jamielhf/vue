<template>

            <div class="scroller-component" >
                <div class="scroller-mask" @touchstart="start"  @touchmove="move"   @touchend="end"></div>
                <div class="scroller-indicator" ></div>
                <div class="scroller-content" :style="style" >
                    <div class="scroller-item " v-for = "i in 200">{{i}}</div>

                </div>

            </div>


</template>


<script>
    export default{
        data(){
            return{
                activeItem:0,
                activeItemValue:0,
                style:{}, //样式对象
                Y:0, //
                t:0.1, //时间
                touchStartTime:0,
                touchEndTime:0,
                eY:34*3, //
                sY:34*3,  //开始的位置
                isMoving:false,  //是否正在滚动
                itemHeight:34  //每个item的高度
            }
        },
        mounted(){
            this.style =  {
                transform:'translate3d(0px, '+this.sY+'px, 0px)',
            }
        },
        methods:{
            start(e){
                this.sY = e.touches[0].clientY;
                this.touchStartTime = e.timeStamp;
                console.log(this.sY)
            },
            move(e){
                this.Y =this.eY+ e.touches[0].clientY  - this.sY;
//                console.log('m___'+this.Y)
                this.t = 0.2;
                this.style =  {
                    transform:'translate3d(0px, '+this.Y+'px, 0px)',
                    transition:'all ease '+this.t+'s'
                }

            },
            end(e){

                let m = this.Y;

                this.touchEndTime = e.timeStamp  - this.touchStartTime;

                this.t = 0.1;

                console.log(e.changedTouches[0].clientY)

                //没有移动
                if(this.sY ==e.changedTouches[0].clientY){
                    return
                }





                /*
                 * 在短时间移动比较大的距离的时候会滑动距离变大
                 * */



                if((this.touchEndTime<250)&&Math.abs(e.changedTouches[0].clientY-this.sY)>100){
                    this.eY  = this.eY+(e.changedTouches[0].clientY-this.sY)*5;
                    this.t = 0.7;
                };
                //跳转对位
                if(Math.abs(m%34)<=17){
                    this.eY =  parseInt(m/34)*34
                }else{
                    if(m>0){
                        this.eY =  parseInt(m/34)*34+34
                    }else{
                        this.eY =  parseInt(m/34)*34-34
                    }

                }
                this.activeItem = Math.abs((this.eY-102)/34)

                console.log( this.activeItem )

                //超出范围，滚回去
                if(this.Y>102){
                    this.Y= 102
                    this.eY = 102
                    this.activeItem = 0;
                }

                this.style =  {
                    transform:'translate3d(0px, '+this.eY+'px, 0px)',
                    transition:'all ease '+this.t+'s'
                }
                console.log('e___'+e.changedTouches[0].clientY)
            }
        }
    }


</script>