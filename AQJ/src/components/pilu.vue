<template>
	<div>
		<router-link tag="h4" to="/pilu/piluindex" activeClass="aboutactive">信息披露</router-link>
		<ul>
			<router-link tag="li" to="/pilu/survey" activeClass="aboutactive">公司概况</router-link>
			<router-link tag="li" to="/pilu/about" activeClass="aboutactive">关于我们</router-link>
			<router-link tag="li" to="/pilu/team" activeClass="aboutactive">团队介绍</router-link>
			<router-link tag="li" to="/pilu/transparent" activeClass="aboutactive">运营数据</router-link>
			<router-link tag="li" to="/pilu/report" activeClass="aboutactive">合规报告</router-link>

		</ul>
		<div>
			<router-view></router-view>
		</div>
		
	</div>

</template>

<script type="text/javascript">
	export default {
		
	}
</script>

<style type="text/css" scoped lang="scss">
	div{
		background:#f60;
		ul{
			
		}
	}
</style>