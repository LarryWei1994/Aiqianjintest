<template>
  <div id="app">
  	<router-view></router-view>
  </div>
</template>
<script>
import chujie from "./components/home";
export default {
    data(){
    	return{

    	}
    },
    components:{
  	 
   },
};
</script>

<style>
	div,h1,h2,h3,h4,h5,h6,a,img,ul,li,dl,dt,dd,ol,figure,figcaption{
		margin:0;
		padding:0;
	}
	html,body{
		margin:0;
		padding:0;
		height: 100%;
		font-size:14px;
	}
	a{
		text-decoration:none;
		cursor: pointer;
	}
	ul{
		list-style: none;
	}
	.l{
		float:left;
	}
	.r{
		float:right;
	}
	.w{
		width: 1180px;
		margin:auto;
	}
</style>
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<script src="https://unpkg.com/element-ui/lib/index.js"></script>