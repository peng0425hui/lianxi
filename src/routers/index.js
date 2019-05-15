import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  	homeRouter,
    {
				path:'/*',
				redirect:'/home'	
    }
  ]
})
