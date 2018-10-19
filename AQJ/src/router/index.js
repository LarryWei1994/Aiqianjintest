import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "../components/home.vue"
import chujie from "../components/chujie.vue"
import pilu from "../components/pilu.vue"
import ketang from "../components/ketang.vue"
import jiekuan from "../components/jiekuan.vue"
import luntan from "../components/luntan.vue"
import comments from "../components/comments.vue"
import problems from "../components/problems.vue"
import register from "../components/register.vue"
import login from "../components/login.vue"

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/chujie',
      component: chujie,
      children:[
        {
          path: 'comments',
          component: comments
        },
        {
          path: 'problems',
          component: problems
        },
        {
          path:'/',
          redirect:"/chujie/comments"
        }
      ],

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
      path: '/register',
      component: register
    },
    {
      path: '/login',
      component: login
    },
 	  {
        path:"*",
        redirect:"/home",
        // component:404Component
    }

  ]
})
