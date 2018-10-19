<template>
	<div class="comments">
		<ul>
			<li v-for="data in list">
				<p>{{data.story}}
					<a @click="tend()">展开&or;</a>
				</p>
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
			
			 <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="1"
		      :page-sizes="[3]"
		      :page-size="3"
		      layout="total, sizes, prev, pager, next, jumper"
		      :total="$store.state.total">
		    </el-pagination>
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
				currentPage:0,
				
			}
		},
		methods:{
			handleSizeChange(val) {
		    	// console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        // console.log(`当前页: ${val}`);
		        this.currentPage = val;
		    },
		    tend(){
		    	
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
			var arr = [];
			for(var i = 0;i <= this.$store.state.total;i++){
				arr.push(i*3);
			}
			
			if(this.$store.state.list.length===0){
				// this.currentPage -= 1;
				// console.log(this.currentPage);
				this.$store.dispatch("getList",arr[this.currentPage]);
			}
			
		},
		updated(){
			var arr = [];
			for(var i = 0;i <= this.$store.state.total;i++){
				arr.push(i*3);
			}
			// 当前页1:3
			// 当前页2->6
			// console.log(arr[this.currentPage]-3)

			this.$store.dispatch("getList",arr[this.currentPage]-3);
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
				p{
					diaplay:inline;
					height:48px;
					line-height:24px;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
			}
		}
		.page{
			text-align:center;
		}
	}
</style>