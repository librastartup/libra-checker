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
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Libra Checker | Block Explorer - Check Address or Transaction Details',
        metaTags: [
          {
            name: 'description',
            content: 'Simple, open-source Libra Blockchain block explorer with tutorial. Built with Node.js, MongoDB, Libra-gRPC, Vue.js.'
          },
          {
            property: 'og:description',
            content: 'Simple, open-source Libra Blockchain block explorer with tutorial. Built with Node.js, MongoDB, Libra-gRPC, Vue.js.'
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
        metaTags: [
          {
            property: 'og:description',
            content: ''
          }
        ]
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
