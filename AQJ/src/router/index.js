import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "../components/home.vue"
import chujie from "../components/chujie.vue"
import pilu from "../components/pilu.vue"
import ketang from "../components/ketang.vue"
import jiekuan from "../components/jiekuan.vue"
import luntan from "../components/luntan.vue"


export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/chujie',
      component: chujie
    },
    {
      path: '/pilu',
      component: pilu
    },
    {
      path: '/ketang',
      component: ketang
    },
    {
      path: '/jiekuan',
      component: jiekuan
    },
    {
      path: '/luntan',
      component: luntan
    },
 	{
        path:"*",
        redirect:"/home",
        // component:404Component
    }

  ]
})
