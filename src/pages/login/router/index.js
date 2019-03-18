import Vue from 'vue'
import Router from 'vue-router'
import QuCheng from '../views/QuCheng.vue'
import YouKe from '../views/YouKe.vue'
import ZhuoDao from '../views/ZhuoDao.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'qucheng',
      component: QuCheng,
      children: [
        {
          path: 'qccrm',
          component: (resolve) => { require([`../views/childViews/QcCrm.vue`], resolve) }
        },
        {
          path: 'qcoa',
          component: (resolve) => { require([`../views/childViews/QcOa.vue`], resolve) }
        }
      ],
      redirect: 'qccrm'
    },
    {
      path: '/youke',
      name: 'youke',
      component: YouKe,
      /**
       * 父路由不为/时，子路由需要用/开头
       */
      children: [
        {
          path: 'ykcrm',
          component: (resolve) => { require([`../views/childViews/YkCrm.vue`], resolve)}
        },
        {
          path: 'ykoa',
          component: (resolve) => { require([`../views/childViews/YkOa.vue`], resolve)}
        },
        {
          path: 'ykbi',
          component: (resolve) => { require([`../views/childViews/YkBi.vue`], resolve)}
        },
      ],
      redirect: '/youke/ykcrm'
    },
    {
      path: '/zhuodao',
      name: 'zhuodao',
      component: ZhuoDao
    }
  ]
})
