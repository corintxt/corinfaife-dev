import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)

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
    }
  ]
})
