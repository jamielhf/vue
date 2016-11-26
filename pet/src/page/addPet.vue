<template>
  <div class="add-pet">
      <div class="pet-icon" >
          <form id="form1"   method="post" enctype="multipart/form-data" >
             <img :src="imgSrc?imgSrc:'http://dummyimage.com/120x120'" />
            <input @change="uploadImg" type="file" class="op0" />
          </form>
      </div>
      <div class="user-link">

          <ul>
              <li>
                  <a   class="link-box">
                      <span  class="txt">宠物名字</span>
                      <input type="text" placeholder="宠物名称" v-model="petName">
                  </a>
              </li>
              <li>
                  <a  class="link-box">
                      <span  class="txt">宠物性别</span>
                      <div class="sex">
                          <span @click="choice" sex="gg" :class="{act:isChoice}" class="gg iconfont  icon-xiaochongon"></span>
                          <span class="p3">GG</span>
                          <span @click="choice" sex="mm" :class="{act:!isChoice}" class="mm iconfont icon-xiaochongon"></span>
                          <span class="p3">MM</span>
                      </div>

                  </a>
              </li>
              <li>
                  <router-link to="/index"  class="link-box">
                      <span  class="txt">宠物品种</span>
                      <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                  </router-link>
              </li>
              <li>
                  <a  class="link-box" @click="petBirthday">
                      <span  class="txt">宠物生日</span>
                      <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                      <span class="dateNum">{{birthday}}</span>
                  </a>
              </li>
              <li>
                  <a  class="link-box">
                      <span  class="txt">到家时间</span>
                      <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                  </a>
              </li>
          </ul>
      </div>

      <a @click="submitInfo" class="btn-b">确 定</a>

  </div>
</template>



<script>

    require('../css/addPet.scss');
    export default{
        data:function(){
            return{
                petName:'',
                sex:'gg',
                isChoice:true,
                imgSrc:'',

            }
        },

        created:function () {
            //head的修改
            this.$store.commit('COMM_CONF',{
                isFooter:false,
                isSearch:false,
                isBack:true,
                isShare:false,
                title:'添加宠物'
            })
        },
        computed:{
            birthday:function () {
                return this.$store.getters.getCalendarDate;
            }
        },
        components:{

        },
        methods:{
            submitInfo:function () {

            },
            choice:function (e) {
                let s = e.target.attributes.sex.value;
                if(s!=this.sex){
                    this.isChoice = !this.isChoice;
                    this.sex = s;
                }

            },
            petBirthday:function () {
                this.$store.dispatch('calendarStatus',true);
            },
            uploadImg:function (e) {
                let vm = this;
                let f  = e.target.files[0];
                if(f){

                    if(window.FileReader) {
                        var fr = new FileReader();
                        fr.readAsDataURL(f);
                        fr.onloadend = function(e) {
                            vm.imgSrc  = e.target.result
                        };

                    }

                }


            }
        }
    }

    </script>