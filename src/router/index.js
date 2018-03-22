import Vue from 'vue'
import Router from 'vue-router'

import XiaoXi from '@/components/xiaoxi'
import TuiJian from '@/components/tuijian'
import ShouCang from '@/components/shoucang'
import GeRen from '@/components/geren'
import SheLi4 from '@/components/sheli4'
import SheLi5 from '@/components/sheli5'
import SheLi6 from '@/components/sheli6'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/1'
    },
    {
      path: '/1',
      component: ShouCang
    },
    {
      path: '/2',
      component: GeRen
    },
    {
      path: '/3',
      component: TuiJian
    },
    {
      path: '/4',
      component: XiaoXi
    },
    {
      path: '/5',
      component: SheLi4
    },
    {
      path: '/6',
      component: SheLi5
    },
    {
      path: '/7',
      component: SheLi6
    }
  ]
})
