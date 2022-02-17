import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage')
  },
  // 라우터의 폴백기능 // 없는 페이지 접근 처리
  {
    path: '*',
    component: () => import('@/views/None')
  }
]

const createRouter = () => new Router({
  mode: 'history', // Url에 # 제거 // 서버배포시 우회 설정 해야 됨
  routes: constantRoutes
})

const router = createRouter()

export default router