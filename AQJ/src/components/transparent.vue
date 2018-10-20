<template>
	<div>
	<div class="about-content-banner">
		<p class="about-expert-title">爱钱进每日数据披露</p>
	</div>
	<div class="charts">
		<div class="trans-wrapper">
			<h1>
				平台运营情况
				<span id="dataNow">({{datalist.overdueTimeDesc}})</span>
			</h1>
			<div id="chart1" class="normal-number">
				<div>
					<p class="value">{{datalist.raiseAmountDesc}}</p>
					<p class="name">
						累计
						<br>
						撮合交易额
					</p>
				</div>
				<div>
					<p class="value">{{datalist.investOrder}}</p>
					<p class="name">
						累计
						<br>
						撮合交易笔数
					</p>
				</div>
				<div>
					<p class="value">{{datalist.totalProfit}}</p>
					<p class="name">
						累计
						<br>
						为用户赚取出借回报
					</p>
				</div>
				<div>
					<p class="value">{{datalist.borrower}}</p>
					<p class="name">
						累计
						<br>
						服务用户数
					</p>
				</div>
			</div>
		</div>
		<div class="trans-wrapper">
			<h1>
				借款标的情况
				<span id="dataNow">({{datalist.overdueTimeDesc}})</span>
			</h1>
			<div id="chart3" class="normal-number">
				<div>
					<p class="value">{{datalist.loanAmountTotal}}</p>
					<p class="name">
						累计借贷金额
					</p>
				</div>
				<div>
					<p class="value">{{datalist.lenderTotal}}</p>
					<p class="name">
						累计借贷笔数
					</p>
				</div>
				<div>
					<p class="value">{{datalist.loanBalance}}</p>
					<p class="name">
						借贷余额
					</p>
				</div>
				<div>
					<p class="value">{{datalist.loanCount}}</p>
					<p class="name">
						借贷余额笔数
					</p>
				</div>
				<div>
					<p class="value">{{datalist.overdueAmount}}</p>
					<p class="name">
						关联关系借款金额
					</p>
				</div>
				<div>
					<p class="value">{{datalist.overdueCount}}</p>
					<p class="name">
						关联关系借款笔数
					</p>
				</div>
				<div>
					<p class="value">{{datalist.interestBalance}}</p>
					<p class="name">
						利息余额
					</p>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default {
	 	data(){
	 		return{
	 			datalist:{}
	 		}
	 	},

	 	mounted(){

	 		let someApi = 'api' + '/homecc/borrowerCountLP?_=1539844824571'
	 		axios.get(someApi).then(res=>{
	 			console.log(res.data)

	 			this.datalist = res.data.bean.borrowCount
	 		}).catch(error=>{
	 			console.log(error)
	 		})
	 	}
	};
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

	.about-content-banner {
	    height: 100px;
	    padding: 25px 30px 0;
	    background: url(../assets/banner-bg.jpg) 0 0 repeat-x;
	    .about-expert-title {
	        color: #fff;
	        text-align: left;
	        font-size: 24px;
	        padding-top: 20px;
	        opacity: .8;
	        filter: alpha(opacity=80);
	    }
	}
	.charts {
	    background-color: #fafafa;
	    .trans-wrapper {
	        margin: 30px 30px 20px;
	        width: 858px;
	        overflow: hidden;
	        background-color: #fff;
	        h1 {
	            font-size: 18px;
	            text-align: left;
	            line-height: 3em;
	            background-color: #fafafa;
	            position: relative;
	            span {
	                position: absolute;
	                top: 0;
	                right: 0;
	                font-size: 14px;
	                color: #858585;
	            }
	        }
	        .normal-number {
	            width: 100%;
	            background: #fff;
	            div {
	                float: left;
	                width: 25%;
	                padding: 20px 0;
	                .value {
	                    font-size: 26px;
	                    color: #596273;
	                    margin-bottom: 10px;
	                }
	                .name {
	                    font-size: 14px;
	                    color: #858585;
	                }
	            }
	        } 	
	    }
	}
</style>