<template>
	<div class="all">
		<div class="head">
			<div class="w">用户注册</div>
		</div>
		<main class="w">
			<div class="quest r">
				<p>已有账号？<router-link to="/login" tag="a">立即登录</router-link></p>
			</div>
			<div class="biaodan">
				<ul>
					<li>
						<span></span>
						<input type="text" placeholder="请输入您常用的手机号码" name="username" v-model="userName">
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
						<input type="password" placeholder="请输入密码" name="password" v-model="password">
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
						    <template slot="title">
						      	<span class="sanjiao"></span>我有邀请码，
								<span>添加邀请码</span>
								帮助好友赚取利益
						    </template>
						    <div class="col3"><input type="text" placeholder="请输入邀请码"></div>
						</el-collapse-item>
						<div class="xieyi">
							<input type="checkbox">我已阅读并同意
							<a href="">《爱钱进注册协议》</a>
							<a href="">《CFCA数字证书服务协议》</a>
						</div>
						<button @click="addUser" href="javascript:;">立即注册</button>
						<p><span></span>您的信息已使用SSL加密技术，数据传输安全</p>
					</el-collapse>
				</div>
				
			</div>
			
		</main>
	</div>
</template>
<script>
import axios from 'axios';
	export default{
		data(){
			return{
				userName : '',
				password : ''
			}
		},
		methods:{
			addUser() {
				var telReg = /^1[3-8]\d{9}/;
				var pasReg = /[0-9A-Za-z]{6,20}$/;
			    var name = this.userName;
			    var password = this.password;
			    if(telReg.test(name)){
			    	// 输入的用户名符合验证
			    	// 检验数据库中是否存在该数据
			    	/*axios.get('/ooo/user/selectUser',{
			    		username: name
			    	},function(resp){
			    		if(resp.ret){
			    			//注册成功，跳转到登录界面
			    			console.log('用户名不存在，可以注册');
			    			// 再判断密码是否符合验证*/
			    			if(pasReg.test(password)){
			    				axios.post('/ooo/user/addUser', {
			    				    username: name,
			    				    password: password
			    				},{}).then((response) => {
			    				    console.log(response);
			    				    
			    				})
			    			}else{
			    				console.log('密码为6-20位字母或数字');
			    			}
			    		/*}else{
			    			alert("注册失败");
			    		}
			    	})*/
			    	
			    }else{
			    	console.log('请输入正确的手机号');
			    }
			}
		}
		
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
			margin:20px 40px 30px 40px;
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
					width: 600px;
					line-height: 30px;
					.col{
						border:none;
						.col2{
							div{
								border:none;
							}
							.sanjiao{
								display: inline-block;
								border-left: 6px solid #000;
								border-top:6px solid #fff;
								border-bottom: 6px solid #fff;
								margin-right: 10px;
							}
							span:nth-of-type(2){
								color: #ff6c00;
							}
							.col3{
								input{
									width: 330px;
									height: 20px;
									background-color: #f3f5fa;
									border:1px solid #fff;
									padding: 10px 10px 10px 10px;
									color:#595959;
									font-size: 14px;
								}
							}
						}
						.col2:active{
							transition:transform 5s;
							.sanjiao{
								transform: rotate(90deg); 
							}
						}
						.xieyi{
							margin-bottom: 10px;
							input{
								width: 16px;
								height: 16px;
							}
							a:hover{
								color: #33f;
							}
						}
						button{
							width: 350px;
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