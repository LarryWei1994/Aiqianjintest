<template>
	<div>
		<div id="top1">
			<ul>
				<li>
					<router-link to="/app"  >
						<i class="iconfont">&#xe63d;</i>手机爱钱进
					</router-link>
				</li>
				<li><i class="iconfont">&#xe68d;</i>400-812-8808(9:00-21:00)</li>
				<li><a href="#"><i class="iconfont">&#xe764;</i>&nbsp;在线客服</a></li>
				<li><a href="#">注册&nbsp;&nbsp;|&nbsp;&nbsp;登录</a></li>	
			</ul>

		</div>
		<div id="top2">
			<ul>
						<li><img src="../assets/logo.png">  </li>
						<li><router-link to="/home" activeClass="borderred" >首页</router-link></li>
						<li><router-link to="/chujie" activeClass="borderred" >出借项目</router-link></li>
						<li><router-link to="/pilu" activeClass="borderred" >信息披露</router-link></li>
						<li><router-link to="/ketang" activeClass="borderred" >网络课堂</router-link></li>
						<li><router-link to="/jiekuan" activeClass="borderred" >借款项目</router-link></li>
						<li><router-link to="/luntan" activeClass="borderred" >官方论坛</router-link></li>
			</ul>		
	

		</div>

	</div>

</template>


<script type="text/javascript">
	


</script>

<style type="text/css" scoped lang="scss">

@font-face {
  font-family: 'iconfont';
  src: url('../../static/iconfont/iconfont.eot');
  src: url('../../static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../static/iconfont/iconfont.woff') format('woff'),
  url('../../static/iconfont/iconfont.ttf') format('truetype'),
  url('../../static/iconfont/iconfont.svg#iconfont') format('svg');
}


.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

body,h1,h2,h3,h4,h5,h6,p,a,img,ul,li,ol,input{padding:0; margin:0;}
ul,ol{ list-style:none}
a{text-decoration: none}
a,img{display:block}


	#top1{
		ul{width: 100%; height:30px; background: #363b3f;

			li{ display: inline-block; color:#aaa; font-size: 14px; line-height:30px; margin-right: 20px;}
			li a{ color: #aaa}
			li:hover{ color: #ed6746;}
			li a:hover{ color: #ed6746;}

		 	li:nth-of-type(1){ margin-left: 118px}
		 	li:nth-of-type(2){ margin-left: 665px}

		 }
	}

	#top2{
		ul{ width: 100%; height: 70px; 
			li{height: 70px; line-height: 68px;  color:yellow; margin-right: 30px; font-size: 16px; float: left; color: #aaa;}
			li a:hover{ color: #ed6746}
			li:nth-of-type(1) img{display: inline-block; margin-top: 15px; margin-left: 120px}
			li:nth-of-type(2){margin-left: 310px; }

		}
	}

	.borderred{
		border-bottom:solid #ed6746
	}
</style>