import Vue from 'vue'
import VueRouter from 'vue-router'
import Produto from '../views/Produto.vue'
import Estoque from '../views/Estoque.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/produto',
    name: 'Produto',
    component: Produto
  },
  {
    path: '/estoque',
    name: 'Estoque',
    component: Estoque
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router