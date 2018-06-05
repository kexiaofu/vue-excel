import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nameToMail from '@/views/nameToMail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/name2mail',
      name: 'nameToMail',
      component: nameToMail
    }
  ]
})
