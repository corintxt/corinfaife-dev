import Vue from 'vue'
import Router from 'vue-router'
import VueTyperPlugin from 'vue-typer'

import HelloWorld from '@/components/HomePage'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)
Vue.use(VueTyperPlugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello World',
      component: HelloWorld
    },
    {
      path: '/portfolio',
      name: 'PortfolioLink',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: Contact
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: About
    }
  ]
})
