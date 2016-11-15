<template>
    <div class="img-scroll">
        <ul class="clearfix" >
            <li v-for="item in doImgData" @touchstart="start" @touchmove="move" @touchend = "end">
                <a ><img :src=item.img></a>
                <!--<a :href="item.imgUrl"><img :src=item.img></a>-->
            </li>
        </ul>
        <div class="img-nav">

        </div>
    </div>
</template>



<script>

    require('../css/imgScroll.scss');
    export default {
        data:function(){
          return {
              img :{},
              scroll:{
                  sTime:null,
                  width:document.body.clientWidth,
                  w:0,             //移动的宽度
                  startX:0,    //开始的x坐标,
                  endX:0,    //开始的x坐标,
                  actIndex:0,
                  oUl:null,
                  oLi:null,
                  changeX:0,
                  imgL:0,
                  isMoving:false
              }
          }
        },
        beforeUpdate:function () {
            let vm = this,
            d = vm.scroll;
            d.oUl = document.querySelector('.img-scroll ul');
            d.oLi = d.oUl.querySelectorAll('li');
            d.oUl.style.width = vm.scroll.imgL*100+"%";
            this.myScroll();
        },
        props:['imgData'],
        computed:{
            doImgData:function () {
                let vm = this;
                if(this.imgData.code==1000){
                    this.img = this.imgData.data;
                    vm.scroll.imgL = this.img.length;
                    return this.img;
                }
            }
        },
        methods:{
            //图片滚动
            myScroll:function(){
                let vm = this;

            },
            //循环滚动图片
            circulate:function () {

            },
            end:function (e) {
                let vm = this,
                d = vm.scroll;
                d.endX = e.changedTouches[0].clientX;
                let c =  d.startX - e.changedTouches[0].clientX;
                    if(Math.abs(c)<=d.width*0.4){

                        d.oUl.style.webkitTransform = 'translate3d(-'+ d.actIndex * d.width+'px,0,0)';
                    }


            },
            start:function (e) {
                let vm = this,
                d = vm.scroll;
                d.startX = e.changedTouches[0].clientX;
            },
            move:function (e) {
                let vm = this,
                d = vm.scroll;
                let c =  d.startX - e.changedTouches[0].clientX;
                d.changeX = d.actIndex * d.width + c;
                if(!d.isMoving){
                    d.oUl.style.webkitTransform = 'translate3d(-'+ d.changeX+'px,0,0)';
                }
                if(c>=0){

                    if(Math.abs(c)>=d.width*0.4&&!d.isMoving){
                        d.isMoving = true;
                        this.next();
                    }
                }else{

                    if(Math.abs(c)>=d.width*0.4&&!d.isMoving){

                        d.isMoving = true;
                        this.prev();
                    }
                }




            },
            /*
            * 下一页
            * */
            next:function () {
                let vm = this,
                  d = vm.scroll;
                  if(d.actIndex<d.imgL-1){
                      d.actIndex ++;
                  }
                    d.changeX =  d.actIndex * d.width;
                    d.oUl.style.webkitTransform = 'translate3d(-'+d.changeX+'px,0,0)';
                    setTimeout(function () {
                        d.isMoving = false;
                    },300)

            },
            /*
             * 上一页
             * */
            prev:function () {
                let vm = this,
                 d = vm.scroll;
                if(d.actIndex>0){
                    d.actIndex --;
                }
                d.changeX =  d.actIndex * d.width;
                d.oUl.style.webkitTransform = 'translate3d(-'+d.changeX+'px,0,0)';
                setTimeout(function () {
                    d.isMoving = false;
                },300)

            },
            handleM:function (t) {
                let vm = this,
                    d = vm.scroll;
                        //取消自动滑动
                        clearInterval(d.sTime);
                        if(t==1&&d.w==d.oLi.length-1){
                            return false
                        }else if(t==-1&&d.w==0){
                            return false
                        }

                        d.w = t+d.w;
                        d.oUl.style.right = d.w*100+'%';

                        //移动结束的时候
                        d.isMove = true;
                        setTimeout(function () {
                            d.isMove = false;
                            d.sTime =  setInterval(function(){
                                vm.circulate()
                            },3000)
                        },600);

                        return false
                    }



        }


    }

</script>