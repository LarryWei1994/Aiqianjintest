<template>
	<div class="all">
		<div class="topbar">
			
		</div>
		<div class="head">
			<div class="w">用户注册</div>
		</div>
		<main class="w">
			<div class="quest r">
				<p>已有账号？<a href="">立即登录</a></p>
			</div>
			<div class="biaodan">
				<ul>
					<li>
						<span></span>
						<input type="text" placeholder="请输入您常用的手机号码">
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
						<input type="text" placeholder="获取短信验证码">
						<button>获取短信验证码</button>
					</li>
				</ul>
				<div class="yaoqingma">
					<el-collapse accordion class="col">
						<el-collapse-item class="col2">
						    <template slot="title" >
						      	<i></i>我有邀请码，
								<span>添加邀请码</span>
								帮助好友赚取利益
						    </template>
						    <div><input type="text" placeholder="请输入邀请码"></div>
						</el-collapse-item>
						<div class="xieyi">
							<input type="checkbox">我已阅读并同意
							<a href="">《爱钱进注册协议》</a><a href="">《CFCA数字证书服务协议》</a>
						</div>
						<button>立即注册</button>
						<p><span></span>您的信息已使用SSL加密技术，数据传输安全</p>
					</el-collapse>
				</div>
				
			</div>
			
		</main>
		
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
	}
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
						background: url(../assets/sp1.png) no-repeat -207px -69px;
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
				// height: 300px;
				line-height: 30px;
				.col{
					border:none;
					
				}
				
			}
		}
		
	}

</style>