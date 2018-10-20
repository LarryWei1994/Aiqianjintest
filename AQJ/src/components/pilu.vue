<template>
	<div class="about-container">
		<div class="about-box">
			<div class="about-box-nav">
		<ul>
			<router-link tag="li" to="/pilu/piluindex" activeClass="aboutactive" class="about-nav-item"><a>信息披露</a></router-link>
			<router-link tag="li" to="/pilu/survey" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>公司概况</a></router-link>
			<router-link tag="li" to="/pilu/about" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>关于我们</a></router-link>
			<router-link tag="li" to="/pilu/team" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>团队介绍</a></router-link>
			<router-link tag="li" to="/pilu/transparent" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>运营数据</a></router-link>
			<router-link tag="li" to="/pilu/report" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>合规报告</a></router-link>
			<router-link tag="li" to="/pilu/report" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>审计报告</a></router-link>
			<router-link tag="li" to="/pilu/report" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>备案信息</a></router-link>
			<router-link tag="li" to="/pilu/report" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>风控体系</a></router-link>
			<router-link tag="li" to="/pilu/report" activeClass="aboutactive" class="about-nav-item about-subnav2-item"><a>出借收费</a></router-link>
			<router-link tag="li" to="/pilu/piluindex" activeClass="aboutactive" class="about-nav-item"><a>荣誉资质</a></router-link>
			<router-link tag="li" to="/pilu/piluindex" activeClass="aboutactive" class="about-nav-item"><a>媒体报道</a></router-link>
			<router-link tag="li" to="/pilu/piluindex" activeClass="aboutactive" class="about-nav-item"><a>合作伙伴</a></router-link>
			<router-link tag="li" to="/pilu/piluindex" activeClass="aboutactive" class="about-nav-item"><a>专家顾问</a></router-link>

		</ul>
			</div>
				<div class="about-box-content about-box-content-detail">
					<router-view>
						
					</router-view>
				</div>

		</div>
	</div>

</template>

<script type="text/javascript">
	export default {
		
	}
</script>

<style type="text/css" scoped lang="scss">
	body,h1,h2,h3,h4,h5,h6,a,p,img,ul,ol,li,dl,dt,dd,input,figure,figcaption{ padding:0; margin:0; box-sizing: border-box;}
	input{ outline:none}
	img{ display:block; border:0;}
	ul,ol{ list-style:none}

	body{ font:12px/1.5 "微软雅黑"; color:#5d5d5d;}
	a{ text-decoration:none; color:#555; }
	a:hover{ text-decoration:none; color:#01bbf4; cursor: pointer;}
	h1, h2, h3, h4, h5, h6 {
	    font-size: 100%;
	    font-weight: 500;
	}

	.about-container{
		padding:20px 0;
		background:#f3f5fa;
		width:auto;
		.about-box{
			overflow:hidden;
			width:1180px;
			margin:0 auto;
			background:#fff;
			border-right:1px solid #ebecee;
			border-bottom:1px solid #ebecee;
			.about-box-nav{
				width:260px;
				float:left;
				border-right:1px solid #e5e7eb;
				ul{
					.about-nav-item{
						height:54px;
						width:260px;
						border-bottom:1px solid #ebecee;
						a{
							line-height: 54px;
							display: block;
							padding-left: 80px;
							border-left: 3px solid #fff;
							color: #333;
							font-size: 18px;
						}
						a:hover {
						    color: #ff6c00;
						    border-left: 3px solid #ff6c00;
						}
					}
					.about-subnav2-item{
						height:40px;
						border-bottom:none;
						a {
						    padding-left: 108px;
						    line-height: 40px;
						    font-size: 14px;
						}
					}
					.aboutactive a{
						color: #ff6c00;
						border-left: 3px solid #ff6c00;
					}
				}
			}
			.about-box-content-detail{
				background: #fafafa;
			}
			.about-box-content {
			    float: right;
			    width: 918px;
			    padding-bottom: 30px;
			    text-align: center;
			    min-height: 732px;

			}
		}
	}
</style>