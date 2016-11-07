<template>
    <div class="img-scroll">
        <ul class="clearfix" >
            <li v-for="item in img" @touchstart="start" @touchmove="move">
                <a><img :src=item.src></a>
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
              img : [
                  {src: '/src/images/img.jpg'},
                  {src: '/src/images/cc.jpg'},
                  {src: '/src/images/img.jpg'},
                  {src: '/src/images/cc.jpg'},
                  {src: '/src/images/img.jpg'}
              ],
              scroll:{
                  sTime:null,
                  width:document.body.clientWidth*0.35,
                  w:0,             //移动的宽度
                  t:1,          // 1是向左滑动，-1是向右滑动
                  startX:0,    //开始的x坐标,
                  oUl:null,
                  oLi:null,
                  isMove:false
              }
          }
        },
        mounted:function () {
            let vm = this,
            d = vm.scroll;
            d.oUl = document.querySelector('.img-scroll ul');
            d.oLi = d.oUl.querySelectorAll('li');
            d.oUl.style.width = d.oLi.length*100+"%";
            this.myScroll();
        },
        methods:{
            //图片滚动
            myScroll:function(l){
                let vm = this;
                let d = vm.scroll;
                /*
                * 每隔5秒自动移动，到最后一张的时候往回移动
                * */
                d.sTime =  setInterval(function(){

                   vm.circulate()
                },3000)
            },
            //循环滚动图片
            circulate:function () {
                let vm = this;
                let d = vm.scroll;
                if(d.w< d.oLi.length-1&&d.t==1||d.w==0){
                    d.t = 1;
                }else if(d.w!=0){
                    d.t = -1;
                }
                d.w = d.t+d.w;
                d.oUl.style.right = d.w*100+'%';
            },
            start:function (e) {
                let vm = this;
                vm.scroll.startX = e.touches[0].clientX;
            },
            move:function (e) {
                let vm = this,
                    d = vm.scroll,
                    s = e.touches[0].clientX - d.startX;
                //向右滑动
                if(s>=d.width&&!d.isMove){
                    d.t = -1;
                    vm.handleM(d.t);
                    //向左滑动
                }else if(parseInt(-s)>=d.width&&!d.isMove){

                    d.t = 1;
                    vm.handleM(d.t);
                }

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