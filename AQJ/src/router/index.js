import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "../components/home.vue"
import chujie from "../components/chujie.vue"
import ketang from "../components/ketang.vue"
import jiekuan from "../components/jiekuan.vue"
import luntan from "../components/luntan.vue"
import navbar from "../components/navbar.vue"

import about from "../components/about.vue"
import pilu from "../components/pilu.vue"
import survey from "../components/survey.vue"
import piluindex from "../components/piluindex.vue"
import team from "../components/team.vue"
import transparent from "../components/transparent.vue"
import report from "../components/report.vue"
import safe from "../components/safe.vue"

import comments from "../components/comments.vue"
import problems from "../components/problems.vue"
import register from "../components/register.vue"
import login from "../components/login.vue"
import foot from "../components/foot.vue"

export default new Router({

    routes: [
      {
          path: '/home',
          component: home,
          children:[
              {
                  path: 'safe',
                  component: safe
              },
          ]
      },
      {
          path: '/navbar',
          component: navbar,
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
          path: '/pilu',
          component: pilu,
          children:[
              {
                  path: 'piluindex',
                  component: piluindex
              },
              {
                  path: 'about',
                  component: about
              },
              {
                  path: 'survey',
                  component: survey
              },
              {
                  path: 'team',
                  component: team
              },
              {
                  path: 'transparent',
                  component: transparent
              },
              {
                  path: 'report',
                  component: report
              },
              {
                  path: '/',
                  component: piluindex
              },
          ]
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
        path: '/foot',
        component: foot
      },
 	    {
        path:"*",
        redirect:"/home",
        // component:404Component
      },
    

  ]
})
