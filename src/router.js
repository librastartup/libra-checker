import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Address from './views/Address.vue'
import Transaction from './views/Transaction.vue'
import Redirect from './views/Redirect.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Libra Block Explorer - Check Address or Transaction Details for Libra Cryptocurrency',
        metaTags: [
          {
            name: 'description',
            content: 'Simple, open-source Libra explorer for the Libra Blockchain. Built with Node.js, MongoDB, Libra-gRPC, Vue.js, and with a step-by-step tutorial.'
          },
          {
            property: 'og:description',
            content: 'Simple, open-source Libra explorer for the Libra Blockchain. Built with Node.js, MongoDB, Libra-gRPC, Vue.js, and with a step-by-step tutorial.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: Home,
      meta: {
        title: 'Libra Checker - About',
      }
    },
    {
      path: '/faq',
      name: 'faq',
      component: Home,
      meta: {
        title: 'Libra Checker - Frequently Asked Questions',
      }
    },
    {
      path: '/redirect',
      name: 'redirect',
      component: Redirect,
    },
    {
      path: '/transaction/:transaction',
      name: 'transaction',
      component: Transaction,
      props: true,
      meta: {
        title: 'Libra Checker - Transaction Details',
      }
    },
    {
      path: '/address/:address',
      name: 'address',
      component: Address,
      props: true,
      meta: {
        title: 'Libra Checker - Address Details',
      }
    }
  ]
})
