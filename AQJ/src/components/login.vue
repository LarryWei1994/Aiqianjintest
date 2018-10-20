<template>
	<div class="all">
		<div class="topbar">
			
		</div>
		<div class="head">
			<div class="w">用户登录</div>
		</div>
		<main class="w">
			<div class="contain">
			<div class="quest r">
				<p>没有账号？<router-link to="/register" tag="a">立即注册</router-link></p>
			</div>
			<div class="biaodan">
				<ul>
					<li>
						<span></span>
						<input type="text" placeholder="用户名/邮箱/手机号">
						<span>
							请输入您常用的手机号码
						</span>
						<span class="error">
							<i class="iconfont icon-jinggao"></i>
							该手机号已被占用
						</span>
					</li>
					<li>
						<span></span>
						<input type="password" placeholder="请输入密码">
						<span>请输入密码</span>
						<span class="yes">
							<i class="iconfont icon-icon--"></i>
						</span>
					</li>
					<li>
						<input type="text" placeholder="验证码">
						<img src="" alt="">
						<a href="">看不清，换一张</a>
					</li>
				</ul>
				<div class="yaoqingma">
					<p>
						<input type="checkbox">记住我
						<a href="">忘记密码？</a>
					</p>
					<button>立即注册</button>
					<p><span></span>您的信息已使用SSL加密技术，数据传输安全</p>
				</div>
				
			</div>
		</div>	
		</main>
		<footer>
			
		</footer>
	</div>
</template>
<script>
	export default{
		
	};
</script>
<style scoped lang="scss">
	.all{
		background-color: #ebeef3;
		height: 100%;
		overflow: hidden;
		.topbar{
			margin:0;
			width:100%;
			height: 28px;
			background-color:#5d5d5d;
		}
		.head{
			height:60px;
			border-bottom: 1px solid #ccc;
			background-color: white;
			.w{
				font-size: 18px;
				line-height: 60px;
			}
		}
		main{
			height: 585px;
			background-color: #ebeef3;
			.contain{
				margin:20px 40px;
				background-color: white;
				.quest{
					width: 100%;
					height: 60px;
					line-height: 60px;
					font-size: 18px;
					margin-top:25px;
					margin-right: 30px;
					p{
						float: right;
						margin: 0;
						padding: 0;
						a{
							color: #f60;
						}
					}
				}
				.biaodan{
					margin-left: 130px;
					padding: 80px 0;
					ul{
						li{
							height: 40px;
							padding-right:5px;
							padding-bottom: 30px;
							position: relative;
							input{
								width: 330px;
								height: 20px;
								background-color: #f3f5fa;
								border:1px solid #fff;
								padding: 10px 10px 10px 48px;
								color:#595959;
								font-size: 14px;
							}
							input:focus{
							    border: 1px #90c1f5 solid;
								box-shadow: 0 0 3px #90c1f5;
			    				color: #000;
			    				
							}
							span{
								margin-left: 17px;
							}
						}
						li:nth-of-type(1){
							span:nth-of-type(1){
								display: inline-block;
								width:26px;
								height: 23px;
								background: url(../assets/sp1.png) no-repeat -352px -226px;
								position: absolute;
								top: 14px;
								left: -3px;
								border-right:1px solid #ccc;
							} 
							span:nth-of-type(2).error{
								color:#f60;
								// display: none;
							}
							span:nth-of-type(2).yes{
								color:green;
								font-weight: bold;
							}
						}
						
						li:nth-of-type(2){
							span:nth-of-type(1){
								display: inline-block;
								width:26px;
								height: 23px;
								background: url(../assets/sp1.png) no-repeat -463px -227px;
								position: absolute;
								top: 10px;
								left: -3px;
								border-right:1px solid #ccc;
							}
						} 
						li:nth-of-type(3){
							input{
								width:171px;
								padding:10px;
							}
							button{
								width: 175px;
							    height: 38px;
							    margin-left: 15px;
							    margin-right: 17px;
							    font-size: 14px;
			    				line-height: 32px;
			    				background-color:#19bd9b;
			    				color:white;
			    				border:none;
			    				outline: 0;
							    display: inline-block;
							    border-radius: 2px;
							    text-decoration: none;
							    vertical-align: middle;
							    cursor: pointer;
							    padding: 0 15px;
							}
						}

					}
					.yaoqingma{
						width: 600px;
						line-height: 30px;
						input{
								width: 16px;
								height: 16px;
							}
						button{
							width: 390px;
							height: 38px;
							padding:0 15px;
							border:none;
							background-color: #ed7c5e;
							color: #fff;
							font-size: 16px;
							line-height: 32px;
						}
						p{
							position: relative;
							text-indent:20px;
							span{
								display: inline-block;
								width: 20px;
								height: 20px;
								background: url(../assets/sp1.png) no-repeat -25px -321px;
								position: absolute;
								top:7px;
								left: 0;
							}
						}
					}
				}
			}
			
		}
		footer{
			width: 100%;
			height: 40px;
			background-color:#5d5d5d;
			margin: 0;
			position: fixed;
			bottom: 0;
		}
	}

</style>