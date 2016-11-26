<template>
    <div class="com-homeuserinfo">
        <ul class="user-link">
            <li class="user-icon">
                <router-link to="/index"  class="link-box ">
                    <span class="txt">头像</span>
                    <img src="http://dummyimage.com/150x150">
                    <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/index"  class="link-box">
                    <span class="txt">昵称</span>
                    <p>jamie</p>
                    <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/index"  class="link-box">
                    <span class="txt">性别</span>
                    <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/index"  class="link-box">
                    <span class="txt">个人说明</span>
                    <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/index"  class="link-box">
                    <span class="txt">城市</span>
                    <span class="iconfont icon-xiangyoujiantou icon-right"></span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>


require('../css/homeuserinfo');

    export default{
        data:function(){
            return{

            }
        },
        created:function () {
            //head的修改
            this.$store.commit('COMM_CONF',{
                isFooter:false,
                isSearch:false,
                isBack:true,
                isShare:false,
                title:'个人首页'
            })
        }
    }
</script>
