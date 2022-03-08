import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

// 
import Home from './views/Home.vue'
import About from './views/About.vue'
import UserDetail from './views/UserDetail.vue'
import Users from './views/Users.vue'

// router에서 쓰일 component
const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/about', component: About, name: 'about'},
    {path: '/user', component: Users, name: 'users'},
    {path: '/user/:id', component: UserDetail, name: 'user', props: true},
]

const router = createRouter({
    history: createWebHistory('/brainy/'),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

