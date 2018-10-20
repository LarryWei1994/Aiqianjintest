<template>
	<div class="w" id="all">
		<div class="top">
			<h2>出借项目</h2>
		</div>
		<div class="middle">
			<ul>
				<li class="zhengchunbao">
					<div class="l zhengchunbao_l">
						<a class="zcbpro"></a>
						<a href="" class="zcbpro2">自动投标，便捷回报</a>
					</div>
					<img src="../assets/zhengchunbaoline.png" alt="" class="l">
					<ul class="l">
						<li>
							<span>1个月</span>
							<span>10.0%</span>
							<button class="r">立即投资</button>
						</li>
						<li>
							<span>3个月</span>
							<span>10.0%</span>
							<button class="r">立即投资</button>
						</li>
						<li>
							<span>6个月</span>
							<span>9.2%</span>
							<button class="r">立即投资</button>
						</li>
						<li>
							<span>12个月</span>
							<span>10.0%</span>
							<button class="r">立即投资</button>
						</li>
						<li>
							<span>18个月</span>
							<span>11.0%</span>
							<button class="r">立即投资</button>
						</li>
					</ul>
				</li>
				<li>
					<div class="sanbiao">
						<div class="sanbiao_l l">
							<a class="sanbiaopro"></a>
							<a href="" class="sanbiaopro2">按月返还，配置随心<p>（极客出借）</p></a>
						</div>
						<img src="../assets/sanbiaoline.png" alt="" class="l">
						<button class="l">查看</button>
					</div>
				</li>
				<li>
					<div class="xieyimuban">
						<div class="xieyi_l l">
							<a href=""></a>
						</div>
						<ul>
							<li><a href=""><span></span><span>整存宝Pro协议</span></a></li>
							<li><a href=""><span></span><span>借款协议</span></a></li>
							<li><a href=""><span></span><span>债权转让协议</span></a></li>
							<li><a href=""><span></span><span>用户注册及服务协议</span></a></li>
							<li><a href=""><span></span><span>爱钱进隐私政策</span></a></li>
							<li><a href=""><span></span><span>网络借贷风险提示书</span></a></li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<div class="comment">
			<ul class="head">
				<router-link tag="li" to="/chujie/comments" activeClass="current" @click="handleCommit()">用户评论</router-link>
				<router-link tag="li" to="/chujie/problems" activeClass="current" @click="handleProblem()">常见问题</router-link>
				<li class="r"><a href="">发表我与爱钱进的故事</a></li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	import comments from "./comments.vue"
	import problems from "./problems.vue"
	export default{
		data(){
			return {

			}
		},
		methods:{
			handleCommit(){
				console.log(this);
			},
			handleProblem(){

			}
		},
		components:{
			comments,
			problems
		}
	};
</script>
<style scoped lang="scss">
	#all{ 
		margin-top:0;
		padding:20px 0 20px;
		height:100%;
		.top{
			border-bottom:10px solid #000;
			height:60px;
			line-height:60px;
			background:url(../assets/出借项目.png) no-repeat 0px 5px;
			text-indent:25px;
			h2{display:inline-block; font-size:18px; font-weight:100;}
		}
		.middle{
			ul{
				.zhengchunbao{
					height:355px;
					margin-top:20px;
					background-color:#f8f9fc;
					.zhengchunbao_l{
						width:180px;
						height:100%;
						background-color:#eef0f6;
						position: relative;

						.zcbpro{
							width:70px;
							height:96px;
							display:inline-block;
							position: absolute;
							top:60px;
							left:60px;
							background:url(../assets/整存宝.png) no-repeat 0 0px;
						}
						.zcbpro2{
							width:100%;
							display:block;
							position: absolute;
							bottom:10px;;
							text-align:center;
							color:blue;
						}
					}
					
					ul{
						width:540px;
						height:100%;
						position: relative;
						li{
							width:100%;
							height:20%;
							line-height:70px;
							span:nth-of-type(1){
								font-size:14px;
							}
							span:nth-of-type(2){
								margin-left:30px;
								font-size:30px;
								color:blue;
							}
							button{
								width:130px;
								position: absolute;
								right:100px;
								margin-top:20px;
								background-color:#eb7c62;
								color:white;
								border:none;
								font-size:14px;
								padding:5px 30px;
								border-radius:2px;
							}
						}
					}
				}
				.sanbiao{
					height:220px;
					width:100%;
					margin-top:20px;
					background-color:#f8f9fc;
					position: relative;
					.sanbiao_l{
						width:180px;
						height:100%;
						background-color:#eef0f6;
						position: relative;
						.sanbiaopro{
							position: absolute;
							top:60px;
							left:60px;
							display:inline-block;
							width:73px;
							height:94px;
							background:url(../assets/sanbiao.png) no-repeat 0px 0px;
						}
						.sanbiaopro2{
							position: absolute;
							bottom:5px;
							color:blue;
							display:block;
							width:100%;
							text-align:center;
							p{margin:0}
						}
						
					}
					button{
							position: absolute;
							top:50%;
							right:120px;
							width:130px;
							background-color:#eb7c62;
							color:white;
							border:none;
							font-size:14px;
							padding:5px 30px;
							border-radius:2px;
						}
				}
				.xieyimuban{
					width:100%;
					height:176px;
					background-color:#f8f9fc;
					margin-top:20px;
					.xieyi_l{
						width:180px;
						height:100%;
						background-color:#eef0f6;
						position: relative;
						a{
							display:inline-block;
							width:100%;
							height:100%;
							background:url(../assets/xieyimuban.png) no-repeat 0 0;
							position: absolute;
							top:30px;
							left:50px;
						}
					}
					ul{
						width:930px;
						height:134px;
						padding:0px 0 21px 250px;
						li{
							float:left;
							width:227px;
							height:57px;
							margin-top:20px;
							a{
								width:212px;
								height:100%;
								display:inline-block;
								border:1px dashed #ccc;
								line-height:57px;
								color:rgb(55, 84, 115);
								position: relative;
								text-indent:15px;
								span{display:inline-block;}
								span:nth-of-type(1){
									width:26px;
									height:30px;
									position: absolute;
									top:15px;
								}
								span:nth-of-type(2){
									margin-left:20px;
								}
							}
							
						}
						li:nth-of-type(1):hover{
							a{
								color:white;
								background-color:#385572;
								border:1px solid #385572;
								span:nth-of-type(1){
									background:url(../assets/laws-sprite.png) no-repeat 0px -41px;
								} 
							}

						}
						li:nth-of-type(1):hover{
							a{
								color:white;
								background-color:#385572;
								border:1px solid #385572;
								span:nth-of-type(1){
									background:url(../assets/laws-sprite.png) no-repeat 0px -41px;
								} 
							}

						}
						li:nth-of-type(2):hover{
							a{
								color:white;
								background-color:#385572;
								border:1px solid #385572;
								span:nth-of-type(1){
									background:url(../assets/laws-sprite.png) no-repeat 0px -78px;
								} 
							}

						}
						li:nth-of-type(3):hover{
							a{
								color:white;
								background-color:#385572;
								border:1px solid #385572;
								span:nth-of-type(1){
									background:url(../assets/laws-sprite.png) no-repeat -74px -78px;
								} 
							}

						}
						li:nth-of-type(4):hover{
							a{
								color:white;
								background-color:#385572;
								border:1px solid #385572;
								span:nth-of-type(1){
									background:url(../assets/laws2-sprite.png) no-repeat -27px -28px;
								} 
							}

						}
						li:nth-of-type(5):hover{
							a{
								color:white;
								background-color:#385572;
								border:1px solid #385572;
								span:nth-of-type(1){
									background:url(../assets/laws2-sprite.png) no-repeat -27px -28px;
								} 
							}

						}
						li:nth-of-type(6):hover{
							a{
								color:white;
								background-color:#385572;
								border:1px solid #385572;
								span:nth-of-type(1){
									background:url(../assets/laws2-sprite.png) no-repeat -27px -28px;
								} 
							}

						}
						li:nth-of-type(1){
								span:nth-of-type(1){
									background:url(../assets/laws-sprite.png) no-repeat -37px -41px;
								} 
							}
						li:nth-of-type(2){
							span:nth-of-type(1){
							background:url(../assets/laws-sprite.png) no-repeat -38px -78px;
							} 
						}
						li:nth-of-type(3){
							span:nth-of-type(1){
							background:url(../assets/laws-sprite.png) no-repeat -125px 0px;
							} 
						}
						li:nth-of-type(4){
							span:nth-of-type(1){
							background:url(../assets/laws2-sprite.png) no-repeat 0px -28px;
							} 
						}
						li:nth-of-type(5){
							span:nth-of-type(1){
							background:url(../assets/laws2-sprite.png) no-repeat 0px -28px;
							} 
						}
						li:nth-of-type(6){
							span:nth-of-type(1){
							background:url(../assets/laws2-sprite.png) no-repeat 0px -28px;
							} 
						}
					}
				}
			}
		}
		.comment{
			width:100%;
			height:551px;
			background-color:#f3f5fb;
			margin:20px 0;
			.head{
				width:100%;
				height:50px;
				border-bottom:1px solid #e0e0e0;
				font-size:14px;
				line-height:50px;
				li{

					margin:0 20px;
					color:#333;
					display:inline-block;
					height:100%;
				}
				.current{
					border-bottom:3px solid #ed7c5e;
					color:#ed7c5e;
				}
			}
		}
	}
	
</style> 