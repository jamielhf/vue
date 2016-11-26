<template>
<div class="com-list">
	<div class="title">推荐</div>
	<ul >
		<li class="list-li" v-for="(value,key) in doList">
			<div class="user">
				<img :src="value.userIcon" alt=""/>
				<div class="name">
					<p>{{value.name}}</p>
					<div class="tag">
						<span v-for="item in value.tag">{{item}}</span>
					</div>
				</div>
				<!--<a class="btn-d">详情{{value.articleId}}</a>-->
				<router-link :to="{  name: 'article', params: { id: value.articleId,uid:{a:123,b:123}}}" class="btn-d btn-s" >详情</router-link>

			</div>

			<div class="detail">
				<p>{{value.detail}}</p>
				<ul :class="['clearfix','img-box',{r3:value.imgGrounp.length>1?true:false}]">
					<li v-for="item in value.imgGrounp">
						<img :src="item">
					</li>
				</ul>
			</div>
		</li>

	</ul>
</div>


</template>


<script>
	require('../css/list.scss');

	let data = {
		doListData:{}
	};

	export default{
		data:function(){
			return data
		},
		props:{
			listData:{
				type: Array,
				default: function () {
					return []
				}
			}
		},
		computed:{
			doList:function () {
				return this.listData;

			}
		},
		methods:{

		}
	}
</script>