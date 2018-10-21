<template>
  <div class="body">
    <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="data in looplist"> 

            <img :src="url+data.url" >

          </div>
        </div>
          <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>

    <div id="category">
      <ul >
        <li class="l"><span>华夏银行资金存管</span></li>
        <li class="l"><span>AAA信用评级</span></li>
        <li class="l"><span>等保三级备案</span></li>
        <li class="l"><span>真实借款人</span></li>
        <li class="l"><span>只能小额分散</span></li>
        <li class="l">1，482万</br>
              <span>&nbsp;&nbsp; 累计服务用户数</span>
        </li>
        <li class="l">48.73亿</br>
              <span>&nbsp;&nbsp;为出借人带来回报(元)</span>
        </li>
        <li class="l">1,543.25亿</br>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;已完成出借金额(元)</span>
        </li>
      </ul>
  
      <div id="zhezhao">
      
        <p>爱钱进预期年化结算利率</p>

        <span>约</span>  
        <span>9.5%</span> </br>  
        <button>立即投资</button>    
        
         <router-link tag="p" to="/app"> <i class="iconfont">&#xe63d;</i> 安装手机爱钱进 随时随地看回报</router-link>
      
      </div>

    </div>
    <div id="main" >
        <table>
          <tr class="fir">
            <td ><a href="#"> 
                      <img src="../assets/bao.png">
                     <p> 整存宝pro</p>
                  </a> 
           </td>
            <td><p> 10.0% </p> <p>预期年化结算利率</p></td>
            <td><p> 1个月 </p> <p>投标期限</p> </td>
            <td><button>立即投资</button>  </td>
          </tr>
          <tr class="sec">
            <td></td>
            <td><p> 10.0% </p> <p>预期年化结算利率</p></td>
            <td><p> 3个月 </p> <p>投标期限</p> </td>
            <td><button>立即投资</button>  </td>
          </tr>
          <tr class="thi">
            <td></td>
            <td><p> 10.0% </p> <p>预期年化结算利率</p></td>
             <td><p> 6个月 </p> <p>投标期限</p> </td>
            <td><button>立即投资</button>  </td>
          </tr>
          <tr class="for">
            <td></td>
            <td><p> 10.0% </p> <p>预期年化结算利率</p></td>
            <td><p> 8个月 </p> <p>投标期限</p> </td>
            <td><button>立即投资</button>  </td>
          </tr>
          <tr class="fif">
            <td></td>
            <td><p> 10.0% </p> <p>预期年化结算利率</p></td>
             <td><p> 12个月 </p> <p>投标期限</p> </td>
            <td><button>立即投资</button>  </td>
          </tr>
        </table>

    </div> 
    <safe></safe>
  </div>

</template>
<script type="text/javascript">

import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import safe from "./safe"
    import axios from "axios";
    
    export default {
    data(){
      return {
          url:"http://www.iqianjin.com",

          looplist:[],
      
         }
     },
      mounted(){
        
          var mySwiper = new Swiper ('.swiper-container', {
              direction: 'horizontal', // 切换选项
              loop: true, // 循环模式选项
              loopAdditionalSlides:0,
              autoplay:true,
              stopOnLastSlide: false,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable:true
              },
            }) 
             
            let someApi = 'api' + '/homeRequest/data?_=1539743073061';
            axios.get(someApi).then(res =>{
              console.log(res.data);
              this.looplist = res.data.bean.carousel;
              // 当ajax请求回来后再执行swiper
            });                         
            

       },
       components:{
        safe
       }
    };
</script>

<style type="text/css" scoped >

  @font-face {
    font-family: 'iconfont';
    src: url('../../static/iconfont/iconfont.eot');
    src: url('../../static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../static/iconfont/iconfont.woff') format('woff'),
    url('../../static/iconfont/iconfont.ttf') format('truetype'),
    url('../../static/iconfont/iconfont.svg#iconfont') format('svg');
  }


  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }


  body,h1,h2,h3,h4,h5,h6,p,a,img,ul,li,ol,dt,dd,input{padding:0; margin:0;}
  ul,ol{ list-style:none}
  a{text-decoration: none}
  input{ outline:none}
  a,img{display:block}

  body{font-size:12px;font-family:"微软雅黑";  }

  .body{background: url("../assets/back.png") repeat; position: relative;}


  .l{float:left}

  .swiper-container {
      width: 100%;
      height: 305px;
      z-index: 100;
      position: relative;

  } 
  .swiper-container img{
    width: auto;
    height: 310px;
    background-size: auto 310px;
  }


  #category{ width:100%; height:130px; background: white; }

  #category ul li{width:55px; height:55px; margin-right:52px; margin-top:25px; }
  #category ul li:nth-of-type(1){margin-left:70px; background:url("../assets/icon.png") 0 0}
  #category ul li:nth-of-type(2){ background:url("../assets/icon.png") -76px 0}
  #category ul li:nth-of-type(3){ background:url("../assets/icon.png") -155px 0}
  #category ul li:nth-of-type(4){ background:url("../assets/icon.png") -223px 0}
  #category ul li:nth-of-type(5){ background:url("../assets/icon.png") -299px 0}
  #category ul li:nth-of-type(6){ width: 150px;  color: #5d83ca; font-size: 30px; padding-left: 30px}
  #category ul li:nth-of-type(7){ width: 150px; color: #5d83ca; font-size: 30px }
  #category ul li:nth-of-type(8){ width: 150px; color: #5d83ca; font-size: 30px }

  #category ul li:nth-of-type(1) span{ color: #8594b6; font-size: 14px; position: absolute;top: 400px; left: 39px }
  #category ul li:nth-of-type(2) span{ color: #8594b6; font-size: 14px; position: absolute;top: 400px; left: 158px }
  #category ul li:nth-of-type(3) span{ color: #8594b6; font-size: 14px; position: absolute;top: 400px; left: 268px }
  #category ul li:nth-of-type(4) span{ color: #8594b6; font-size: 14px; position: absolute;top: 400px; left: 380px }
  #category ul li:nth-of-type(5) span{ color: #8594b6; font-size: 14px; position: absolute;top: 400px; left: 480px }
  #category ul li:nth-of-type(6) span{ color: #8594b6; font-size: 14px;  }
  #category ul li:nth-of-type(7) span{ color: #8594b6; font-size: 14px;  }
  #category ul li:nth-of-type(8) span{ color: #8594b6; font-size: 14px;  }



  #category ul li:nth-of-type(1):hover{ background:url("../assets/icon.png") 0 -76px}
  #category ul li:nth-of-type(2):hover{ background:url("../assets/icon.png") -75px -76px}
  #category ul li:nth-of-type(3):hover{ background:url("../assets/icon.png") -152px -76px}
  #category ul li:nth-of-type(4):hover{ background:url("../assets/icon.png") -219px -76px}
  #category ul li:nth-of-type(5):hover{ background:url("../assets/icon.png") -293px -76px}

  #zhezhao{ width:300px; height:252px; background: black; color: white; opacity: .8; position: absolute; top: 22px; right: 100px; z-index: 200; }

  #zhezhao p:nth-of-type(1){font-size: 22px; margin-top: 42px; margin-left:40px  }

  #zhezhao span:nth-of-type(1){font-size: 14px; margin-left:95px}

  #zhezhao span:nth-of-type(2){font-size: 30px; color: #f7775f;}
  #zhezhao button{width: 255px; height: 40px; line-height: 40px; background: #ed7c5e; color: white; text-align: center; border: 0;  cursor: pointer; margin-left:25px; margin-top: 10px;}
  #zhezhao p:nth-of-type(2){ margin-top: 40px; color: white; cursor: pointer; }

  #zhezhao p:nth-of-type(2) .iconfont{font-size: 26px; margin-left: 23px;color: white  }
#main{ width: 1180px; height: 600px; margin:auto; margin-top:10px; margin-bottom: 20px; background: white;}
  #main table{ width: 100%; height: 100% }
  #main table tr{ width:100%; height:20%; } 
  #main table tr td:nth-of-type(1){width: 370px; height: 114px;  font-size: 24px; }
  #main table tr td:nth-of-type(1) a img{ display: inline-block; margin-top: 30px; margin-left: 40px;}
  #main table tr td:nth-of-type(1) a p{ display: inline-block; color: black; position: relative; bottom: 20px; left: 20px}
  #main table tr td:nth-of-type(2){width: 270px; height: 114px; }
  #main table tr td:nth-of-type(2) p:nth-of-type(1){ font-size: 26px; color: #f7775f; font-weight:bold; }
  #main table tr td:nth-of-type(2) p:nth-of-type(2){ font-size: 14px; color: #ccc;  }


  #main table tr td:nth-of-type(3){width: 155px; height: 114px;}
  #main table tr td:nth-of-type(3) p:nth-of-type(1){ font-size: 18px; color: #aaa }
  #main table tr td:nth-of-type(3) p:nth-of-type(2){ font-size: 14px; color: #ccc }


  #main table tr td:nth-of-type(4){width: 268+117px; height: 114px;}

  #main table tr td:nth-of-type(4) button{ width: 140px; height: 35px; line-height: 35px; background: #ed7c5e; color: white; text-align: center; border: 0;  cursor: pointer; border-radius: 5px; margin-left: 40%}


</style>



