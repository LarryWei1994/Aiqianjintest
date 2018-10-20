<template>
<<<<<<< HEAD
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
=======
  <div>
    <!-- <safe></safe> -->
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
// import safe from "./components/safe"
export default {
  data(){
    return {
      
    }
  },
  methods:{
      
  },
  components:{
    // safe
>>>>>>> origin/wei
  },
  computed:{

  }
<<<<<<< HEAD
};

</script>

<style type="text/css" scoped lang="scss"></style>
=======
}
</script>

<style>

</style>
>>>>>>> origin/wei
