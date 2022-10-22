import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsUser from '../views/ContactsUser.vue'
import ContactsAdd from '../views/ContactsAdd.vue'
import ContactsEdit from '../views/ContactsEdit.vue'
import ContactsMore from '../views/ContactsMore.vue'
import NotFound from '../views/NotFound.vue'
import Admin from '../views/Admin.vue'


const routes = [
  {
    path: '/login',
    name: 'Admin',     //Эээм... полный список пользователей????
    component: Admin 
  },
  {
    path: '/',
    name: 'home',
        //Автоматом редиректает на главную
    component: HomeView
  },
  
  {
    path: '/contacts',
    name: 'ContactsUser',     //Эээм... полный список пользователей????
    component: ContactsUser 
  },
  {
    path: '/contacts/add',
    name: 'ContactsAdd',      //Добавляем
    component: ContactsAdd
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'ContactsEdit',     //Редактируем
    component: ContactsEdit
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ContactsMore',     //Полный профиль
    component: ContactsMore
  },
  {
    path: '/*',
    name: 'NotFound',     //Страница не найдена
    component: NotFound
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
