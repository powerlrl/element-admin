import Vue from 'vue'
import Router from 'vue-router'
import ListArticle from './views/ListArticle.vue'
import CreateArticle from './views/CreateArticle.vue'
import EditArticle from './views/EditArticle.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/article/list'
    },
    {
      path: '/article/list',
      name: 'article-list',
      component: ListArticle
    },
    {
      path: '/article/create',
      name: 'article-create',
      component: CreateArticle
    },
    {
      path: '/article/:id/Edit',
      name: 'article-edit',
      component: EditArticle
    }
  ]
})
