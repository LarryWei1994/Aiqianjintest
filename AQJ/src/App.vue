<template>
  <div >


    <navbar></navbar>
  	<home></home>
    <bottom></bottom>
   
  </div>

</template>


<script type="text/javascript">
	import home from "./components/home";
  import navbar from "./components/navbar";
  import bottom from "./components/bottom";
  import app from "./components/app";
export default{
 data(){
    return{}
  },
  components:{
    navbar,
  	home,
    bottom,
    app
  },
  computed:{

  }
};

</script>

<style type="text/css" scoped lang="scss"></style>
