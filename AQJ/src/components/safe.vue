<template>
	<div id="index_safe" class="index-safe">
		<div class="index-content">
			<div class="safe-left">
				<h2>媒体报道</h2>
				<div class="safe-left-l">
					<a :href=" leftlist.linkUrl ">
						<img :src=" host + leftlist.imgUrl">						
					</a>
				</div>
				<div class="safe-left-m">
					<div class="text-cms main-cctv">
						<div id="cctv-wrap">
							<ul class="ui-list">
								<li v-for="data in datalist">
									<a href="#"><span class="title"><i class="logo-name">[{{data.origin}}]</i>{{data.title}}</span></a>
								</li>
							</ul>
						</div>
					</div>
					<a href="#" class="more">查看更多</a>
				</div>
				<div class="safe-left-r">
					<div id="medialogo-wrap">
						<ul>
							<li v-for="data in looplist" class="media-logo-item">
								<img :src=" host + data.imgUrl">
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="safe-right">
				<h2>公告</h2>
				<div class="text-cms main-notice">
					<div id="notice-wrap">
						<ul class="ui-list">
							<li v-for="data in rightlist" class="data-iqianjin">
								<a href=" host + data.linkUrl">
									<span class="title">{{data.title}}</span>
									<span class="new-other">{{data.releaseDate}}</span>
								</a>
							</li>
						</ul>
					</div>
					<a href="#" class="more">查看更多</a>
				</div> 
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
	export default {
	 	data() {
	 		return {
	 			host:"https://www.iqianjin.com",
	 			leftlist:{},
	 			datalist:[],
	 			looplist:[],
	 			rightlist:[]
	 		}
	 	},

	 	mounted() {

	 		/*setTimeout(()=>{
	 			this.$nextTick(res=>{

	 			})
	 		})*/

	 		let someapi = 'api' + '/medialeftplacenews/'
	 		axios.get(someapi).then(res=>{
	 			console.log(res.data)
	 			this.leftlist = res.data
	 		}).catch(error=>{
	 			console.log(error);
	 		})

	 		let datalistapi = 'api' + '/mediaindexnews/'
	 		axios.get(datalistapi).then(res=>{
	 			console.log(res.data)
	 			this.datalist = res.data
	 		}).catch(error=>{
	 			console.log(error);
	 		})

	 		
	 		let looplistapi = 'api' + '/mediarightplacenews/'
	 		axios.get(looplistapi).then(res=>{
	 			console.log(res.data)
	 			this.looplist = res.data
	 		}).catch(error=>{
	 			console.log(error);
	 		})

	 		let rightlistapi = 'api' + '/noticeindexnews/'
	 		axios.get(rightlistapi).then(res=>{
	 			console.log(res.data)
	 			this.rightlist = res.data
	 		}).catch(error=>{
	 			console.log(error);
	 		})
	 	}
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
	.index-safe {
	    width: 100%;
	    height: 266px;
	    padding: 28px 0 0;
	    background: #fff;
	    .index-content {
	        width: 1180px;
	        height: 100%;
	        margin: 0 auto;
	        .safe-left {
	            float: left;
	            width: 776px;
	            height: 260px;
	            h2 {
	                border-bottom: 2px #ff9e57 solid;
	                color: #363b3f;
	                font-size: 20px;
	                line-height: 53px;
	            }
	            .safe-left-l {
	                width: 198px;
	                height: 139px;
	                float: left;
	                overflow: hidden;
	                margin-top: 20px;
	            }
	            .safe-left-m {
	                float: left;
	                width: 336px;
	                padding-left: 27px;
	                .text-cms {
	                    position: relative;
	                    padding: 10px 0 5px;
	                    width: 100%;
	                    a {
	                        display: block;
	                        width: 100%;
	                        height: 32px;
	                        line-height: 32px;
	                        color: #8e929a;
	                        span.title {
	                            display: inline-block;
	                            float: left;
	                            width: 336px;
	                            text-overflow: ellipsis;
	                            white-space: nowrap;
	                            overflow: hidden;
	                            .logo-name {
	                                color: #363b3f;
	                                font-style: normal;
	                                padding-right: 5px;
	                            }
	                        }
	                    }
	                }
	            }
	            a.more {
	                color: #5d83ca;
	            }
	            .safe-left-r {
	                float: right;
	                width: 188px;
	                padding-top: 10px;
	                .media-logo-item {
	                    width: 84px;
	                    height: 34px;
	                    float: left;
	                    margin: 15px 0 0 10px;
	                    overflow: hidden;
	                }
	            }
	        }
	        .safe-right {
	            float: right;
	            width: 329px;
	            h2 {
	                border-bottom: 2px #ff9e57 solid;
	                color: #363b3f;
	                font-size: 20px;
	                line-height: 53px;
	                }
	            .text-cms {
	                padding: 10px 0 5px;
	                width: 100%;
	                #notice-wrap {
	                    padding-bottom: 5px;
	                    li a {
	                        display: block;
	                        width: 100%;
	                        height: 32px;
	                        line-height: 32px;
	                        color: #8e929a;
	                        span.title {
	                            display: inline-block;
	                            float: left;
	                            width: 216px;
	                            text-overflow: ellipsis;
	                            white-space: nowrap;
	                            overflow: hidden;
	                        }
	                        span.news-other {
	                            float: right;
	                            height: 32px;
	                            overflow: hidden;
	                        }
	                    }
	                }
	            }
	            a.more {
	                color: #5d83ca;
	            }
	        }
	    }
	}
</style>