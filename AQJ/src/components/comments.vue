<template>
	<div class="comments">
		<ul>
			<li v-for="data in list">
				<p>{{data.story}}</p>
				<span>
					<i class="iconfont icon-yonghu"></i>
					{{data.mobile}}
				</span>
				<span>
					<i class="iconfont icon-kalendar"></i>
					{{data.createTime}}
				</span>
				
				<span>+{{data.supportTimes}}</span>
				<a href=""><i class="iconfont icon-zan1"></i></a>
			</li>
		</ul>
		<div class="page">
			总页数：{{Math.floor($store.state.total/3)}}
			<div class="block">
			    <span class="demonstration">完整功能</span>
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage4"
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="100"
			      layout="total, sizes, prev, pager, next, jumper"
			      :total="400">
			    </el-pagination>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	import "../../static/iconfont/iconfont.css";
	import {mapState} from "vuex";
	export default{
		data(){
			return{
				currentPage1: 5,
		        currentPage2: 5,
		        currentPage3: 5,
		        currentPage4: 4
			}
		},
		methods:{
			handleSizeChange(val) {
		    	console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    }
		},
		computed:{
			...mapState(["list"]),
		},
		mounted(){
			/*let someapi = 'api' + '/activity/talkact/list?pageIndex=0&pageSize=3&_=1539764140453';
			axios.get(someapi).then(res=>{
				this.datalist = res.data.bean.list;
			});*/
			if(this.$store.state.list.length===0){
				this.$store.dispatch("getList");
			}
		}
	};
</script>
<style scoped lang="scss">
	.comments{
		ul{
			height: 400px;
			margin:10px 47px;
			
			li{
				height:103px;
				padding:16px 10px 0;
				font-size:14px;
				border-bottom:1px dashed #E6E6E6;
				span{
					line-height:20px;
					color:#999;
				}
				span:nth-of-type(2){
					margin-left:54px;
				}

				a{
					display:inline-block;
					width:20px;
					height:20px;
					color:#ff6c00;
					float:right;
					margin-right:5px;
				}
				span:last-of-type{
					color:#ff6c00;
					float:right;
				}
			}
		}
		.page{
			text-align:center;
		}
	}
</style>