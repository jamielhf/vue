<template>
  <div class="m-picker-item" >
      <div class="m-scroller-indicator"></div>
    <div class="m-scroller-mask" @touchstart="start" @touchend="end" @touchmove="move"></div>
      <div  class="m-scroller-item-box" :style="domStyle" >

        <div v-for="(i,k) in d" :key="k" class="m-scroller-item">{{i}}</div>
      </div>

  </div>
</template>

<script>

import {add,sub,mul,div,rem} from '../modules/util'

export default {
  data () {
    return {
        startY:'', //touch start Y
        endY:'', //touch end Y
        lastPoint:[],
        value:'',
        dY:0,
        itemKey:0,//第几个值
        changeY:'', //sY - eY
        domStyle:{'transform':'translate3d(0,0,0)' }
    }
  },
  computed:{
    itemHeight(){
        return (+window.getComputedStyle(document.querySelector('.m-scroller-item')).height.replace('px','')).toFixed(2);
    },
    //选项长度
    itemLen(){
        return this.d.length
    }
  },
  mounted(){
      //初始化，定位第一个
     if(this.val){
        this.moveTo(this.val);
     }else{
       this.dY = mul(this.itemHeight,4);
      
       this.domStyle =  this.style =  {
         transform:'translate3d(0px, '+this.dY+'px, 0px)'
       }
     }

  },
  methods:{
    scroll(y,t){
    //根据选项高度判断定在哪个位置
    //  y = y -y%this.itemHeight +(y%this.itemHeight>this.itemHeight/2?this.itemHeight:0)

     let cTop = rem(y,this.itemHeight) > div(this.itemHeight,2) ? this.itemHeight : 0;
      y = add(sub(y , rem(y,this.itemHeight)) , cTop);

      //最大最小情况的判断
      if(y > mul(this.itemHeight,4)){
        y = mul(this.itemHeight,4)
      }
      let sT = mul((5-this.itemLen),this.itemHeight);
      if(y < sT){
        y = sT
      }

      this.dY = y;  //记录现在的位置

      this.itemKey = div(sub(mul(this.itemHeight,4),y),this.itemHeight) //第几个值
      this.domStyle =  this.style =  {
        transform:'translate3d(0px, '+y+'px, 0px)',
        transition:"all " + t + "s cubic-bezier(0.1, 0.85, 0.25, 1) 0s"
      }
      //停止后的回调
      this.change(this.d[this.itemKey],this.itemKey,this.selType)
    },
    start(e){
      this.startY = e.touches[0].pageY;
      this.domStyle =  this.style =  {
        transform:'translate3d(0px, '+ this.dY+'px, 0px)',
        transition:"none"
      }
    },
    end(e){
      this.endY = e.changedTouches[0].pageY;
      //非线性衰减
      let  t = Math.sqrt(Math.abs(this.endY - this.startY)) / 8;
      this.scroll(this.dY+this.endY-this.startY,t);
    },
    move(e){
      e.preventDefault();
      let dY = e.touches[0].pageY - this.startY;    //差值
      //反映差值
      this.domStyle = {
        transform:'translate3d(0px, '+(dY+this.dY)+'px, 0px)',
      }

    },
    moveTo(val){
      if(this.selType=="month"||this.selType=="day"){
        //  this.itemKey = +this.val -1;
        this.itemKey = 0;
         this.d.map( (v,k) =>{
            // console.log(v)
          if(v.match(/\d*/g)[0]==val){
            this.itemKey = k
          }
        })
       
      }else if(this.selType=="year"){
        this.itemKey = 0;
         this.d.map( (v,k) =>{
          if(v.match(/\d*/g)[0]==val){
            this.itemKey = k
          }
        })

      }else{  // 日期外的 如果后面需要做成其他类型
        this.itemKey = 0;
        this.d.map( (v,k) =>{
          if(v==val){
            this.itemKey = k
          }
        })
      }
      this.dY =  mul((4-this.itemKey),this.itemHeight);
      this.scroll(this.dY,0)
    }
  },
  watch:{
    d(){
       if(this.itemKey+1>this.d.length){
         this.itemKey = this.d.length;
         this.dY =  mul((4-this.itemKey),this.itemHeight);
         this.scroll(this.dY,0)
       }
      if(this.selType=="month" || this.selType=="day"){
         this.d.map( (v,k) =>{
          if(v.match(/\d*/g)[0]==this.val){
            this.itemKey = k
          }
        })
        this.dY =  mul((4-this.itemKey),this.itemHeight);
         this.scroll(this.dY,0)
        console.log(this.itemKey,this.val);
      }

    }
  },
  props:{
    change:{

    },
    val:{

    },
    selType:{

    },
    d:{
       default:function () {
         return []
       }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

