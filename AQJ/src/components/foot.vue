<template>
	<div id="all">
		<footer>
			<div class="container w">
				<dl>
					<dt><span></span></dt>
					<dd>
						<ul>
							<li><a href="">数据披露</a></li>
							<li><a href="">网贷课堂</a></li>
							<li><a href="">联系我们</a></li>
							<li><a href="">平台介绍</a></li>
							<li><a href="">风险控制</a></li>
							<li><a href="">诚聘英才</a></li>
							<li><a href="">法律法规</a></li>
							<li><a href="">名词解释</a></li>
							<li><a href="">友情链接</a></li>
							<li><a href="">反洗钱知识</a></li>
							<li><a href="">财富宝典</a></li>
							<li><a href="">网站地图</a></li>
						</ul>
					</dd>
					<dd>
						<div class="ma"><span></span><span>关注爱钱进微信<br>了解小爱大事记</span></div>
						<div class="ma"><span></span><span>手机爱钱进<br>方便又贴心</span></div>
					</dd>
				</dl>
			</div>
			<div class="btm">
				<div class="l">
					<ul class="topbar">
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
					</ul>
					<ul class="btmbar">
						<li>©2018 iqianjin.com.All Rights Reserved</li>
						<li><a href="">京公网安备 11010102001399号</a></li>
						<li><a href="">京ICP备14017729</a></li>
						<li><a href="">京ICP证150121号</a></li>
						<li><a href="">互联网金融协会违法违规行为投诉</a></li>
					</ul>
				</div>
				<span class="r">网贷有风险，出借需谨慎</span>
			</div>
		</footer>
	</div>
</template>
<script>
	export default{

	};
</script>
<style scoped lang="scss">
	#all{
		background-color: #363b3f;
		height:272px;
		footer{
			.container{
				dl{
					overflow: hidden;
					display: flex;
					dt{
						display: inline-block;
						margin-top: 20px;
						padding-right: 53px;
						padding-bottom: 20px;
						border-right: 1px solid #404549;
						span{
							display: inline-block;
							width: 180px;
							height: 123px;
							background: url(../assets/sp1-new.png) no-repeat 0 0;
						}			
					}
					dd:nth-of-type(1){
						width: 558px;
						height: 164px;
						margin-top: 30px;
						padding:0px 25px 0;
						border-right: 1px solid #404549;
						ul{
							display: flex;
							flex-wrap:wrap;
							text-align: center;
							li{
								/* flex:1; */
								display: inline-block;
								width: 183px;
								height: 35px;
								a{
									display: inline-block;
									color: #7d8390;
								}
								a:hover{
									color: white;
								}
							}
						}
					}
					dd:nth-of-type(2){
						margin-top: 30px;
						.ma{
							width: 145px;
							height: 129px;
							display: inline-block;
							text-align: center;
							margin-left:20px;
							float: left;
							span:nth-of-type(1){
								display: inline-block;
								width: 84px;
								height: 84px;
								background: url(../assets/sp1-new.png) no-repeat -190px 0;
								margin-bottom: 10px;
							}
							span:nth-of-type(2){
								display: inline-block;
								height: 40px;
								color: #7d8390;
								line-height: 20px;
							}
						}
					}
				}
			}
			.btm{
				background-color: #5d5d5d;
				height: 78px;
				padding-left: 40px;
				.l{
					width: 900px;
					.topbar{
						height: 29px;
						padding-top: 14px;
						li{
							display: inline-block;
							a{
								/* background: url(../assets/sp1.png) no-repeat 418px 194px; */
								display: inline-block;
								
							}
						}
						li:nth-of-type(1){
							a{
								width:67px;height:24px;background: url(../assets/sp1.png) no-repeat -340px -194px;
							}
						}
						li:nth-of-type(2){
							a{
								width:66px;height:24px;background: url(../assets/sp1.png) no-repeat -264px -194px;
							}
						}
						li:nth-of-type(3){
							a{
								width:76px;height:24px;background: url(../assets/sp1.png) no-repeat -86px -228px;
							}
						}
						li:nth-of-type(4){
							a{
								width:86px;height:24px;background: url(../assets/sp1-new.png) no-repeat -416px 0px;
							}
						}
						li:nth-of-type(5){
							a{
								width:64px;height:24px;background: url(../assets/sp1-new.png) no-repeat -416px -102px;
							}
						}
						li:nth-of-type(6){
							a{
								width:109px;height:24px;background: url(../assets/sp1-new.png) no-repeat 0px -395px;
							}
						}
						li:nth-of-type(7){
							a{
								width:152px;height:24px;background: url(../assets/sp1-new.png) no-repeat -238px -395px;
							}
						}
						li:nth-of-type(8){
							a{
								width:120px;height:24px;background: url(../assets/sp1-new.png) no-repeat -351px -429px;
							}
						}
						li:nth-of-type(9){
							a{
								width:106px;height:24px;background: url(../assets/trademark.png) no-repeat -106px 0px;
							}
						}
						li:nth-of-type(1):hover{
							a{
								width:67px;height:24px;background: url(../assets/sp1.png) no-repeat -417px -194px;
							}
						}
						li:nth-of-type(2):hover{
							a{
								width:66px;height:24px;background: url(../assets/sp1.png) no-repeat -242px -228px;
							}
						}
						li:nth-of-type(3):hover{
							a{
								width:76px;height:24px;background: url(../assets/sp1.png) no-repeat 0px -228px;
							}
						}
						li:nth-of-type(4):hover{
							a{
								width:86px;height:24px;background: url(../assets/sp1-new.png) no-repeat -416px -34px;
							}
						}
						li:nth-of-type(5):hover{
							a{
								width:64px;height:24px;background: url(../assets/sp1-new.png) no-repeat -416px -136px;
							}
						}
						li:nth-of-type(6):hover{
							a{
								width:109px;height:24px;background: url(../assets/sp1-new.png) no-repeat -119px -395px;
							}
						}
						li:nth-of-type(7):hover{
							a{
								width:152px;height:24px;background: url(../assets/sp1-new.png) no-repeat 0px -429px;
							}
						}
						li:nth-of-type(8):hover{
							a{
								width:120px;height:24px;background: url(../assets/sp1-new.png) no-repeat -221px -429px;
							}
						}
						li:nth-of-type(9):hover{
							a{
								width:106px;height:24px;background: url(../assets/trademark.png) no-repeat 0px 0px;
							}
						}
					}
					.btmbar{
						height: 20px;
						padding:5px 0 10px;
						li{
							display: inline-block;
							text-align: left;
							padding-right:5px;
							color: #707e8c;
							line-height: 30px;
							a{
								font-size: 12px;
								color: #707e8c;
								display: inline-block;
							}
							a:hover{
								color: white;
							}
						}
						li:nth-of-type(2){
							a{
								background: url(../assets/ghs.png) no-repeat 0 0;
								text-indent: 20px;
							}
						}
					}
				}
				.r{
					height: 76px;
					line-height: 76px;
					font-size: 16px;
					color: #707e8c;
					padding-right: 90px;
				}
			}
		}
	}
</style>