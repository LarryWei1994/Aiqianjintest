<template>
  <div >
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          Slide 
           <!--  <img :src="url+data.url"> -->

        </div>

      </div>
      
    </div>
  
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    

      <div id="category">
        <ul >
          <li class="l">dsgdsfgdsfgfdsgsdf</li>
          <li class="l"></li>
          <li class="l"></li>
          <li class="l"></li>
          <li class="l"></li>
          <li class="l"></li>
          <li class="l"></li>
          <li class="l"></li>
        </ul>
      </div>


  </div>
</template>
<link rel="stylesheet" href="../swiper-4.4.1/dist/css/swiper.css">
<script src="../swiper-4.4.1/dist/js/swiper.js"></script>
<script type="text/javascript">
    import axios from "axios";
    import Swiper from "swiper";
    export default {
    data(){
      return {
          url:"http://www.iqianjin.com",

          looplist:[],
      
         }
     },


      mounted(){
          console.log('adaa');
         /* let someApi = 'api' + '/homeRequest/data?_=1539743073061';
          //反向代理
            axios.get(someApi).then(res=>{
              console.log(res.data);
              this.looplist = res.data.bean.carousel;
          });
            var myswiper = new Swiper(".swiper-container",{
              autoplay:1000,
              loop:true
            });
*/
       }
    };


</script>

<style type="text/css" scoped lang="scss">
body,h1,h2,h3,h4,h5,h6,p,a,img,ul,li,ol,dt,dd,input{padding:0; margin:0;}
ul,ol{ list-style:none}
input{ outline:none}
a,img{display:block}

  body{font-size:12px; color:#3e3e3e; font-family:"微软雅黑";}
  .l{float:left}


    .swiper-container{
  img{
    width: 100%;
      }
  }


#category{ width:100%; height:130px; background:pink;}

#category ul li{width:55px; height:55px; margin-right:60px; margin-top:25px; }
#category ul li:nth-of-type(1){margin-left:155px; background:url("../assets/icon.png") 0 0}
#category ul li:nth-of-type(2){ background:url("../assets/icon.png") -76px 0}
#category ul li:nth-of-type(3){ background:url("../assets/icon.png") -155px 0}
#category ul li:nth-of-type(4){ background:url("../assets/icon.png") -223px 0}
#category ul li:nth-of-type(5){ background:url("../assets/icon.png") -299px 0}

#category ul li:nth-of-type(1):hover{ background:url("../assets/icon.png") 0 -76px}
#category ul li:nth-of-type(2):hover{ background:url("../assets/icon.png") -75px -76px}
#category ul li:nth-of-type(3):hover{ background:url("../assets/icon.png") -152px -76px}
#category ul li:nth-of-type(4):hover{ background:url("../assets/icon.png") -219px -76px}
#category ul li:nth-of-type(5):hover{ background:url("../assets/icon.png") -293px -76px}


</style>
