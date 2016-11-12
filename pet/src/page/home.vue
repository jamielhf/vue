<template>
    <div class="com-home">
        <div class="user-info clearfix">
            <router-link to="/homeUserInfo/123" class="link-box clearfix" >
                <img src="/src/images/cc.jpg">
                <p>jamie</p>
               <span class="iconfont icon-xiangyoujiantou icon-right"></span>
            </router-link>
        </div>

        <div class="user-link">
            <ul>
                <li>
                    <router-link to="/home/mypet"  class="link-box">

                        <span class="iconfont Hui-iconfont-yiguanzhu icon-yunxuxidaichongwu"></span>
                        <span class="txt">我的宠物</span>
                        <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index"  class="link-box">

                        <span class="iconfont Hui-iconfont-feedback1 icon-detail"></span>
                        <span class="txt">我的帖子</span>
                        <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index"  class="link-box">

                        <span class="iconfont Hui-iconfont-star icon-shoucang"></span>
                        <span  class="txt">我的收藏</span>
                        <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/index"  class="link-box">

                        <span class="iconfont Hui-iconfont-comment icon-xiaoxizhongxin"></span>
                        <span  class="txt">我的消息</span>
                        <span class="iconfont icon-xiangyoujiantou icon-right "></span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>



<script>
    require('../css/home.scss');


    let data = {
        id:1
    };
    export default{
        data:function(){
            return{
                data
            }
        },
        created:function () {
            //head的修改

            this.$store.commit('changeIndexConf',{
                isFooter:true,
                isSearch:false,
                isBack:false,
                isShare:false,
                title:'个人首页'
            })
        }
    }

    </script>