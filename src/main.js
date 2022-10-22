import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 
    Font Awesome
*/

// import '../src/awesomefont/all.css';

/*
     Bootstrap CSS , JS
*/
import 'bootstrap' //
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

/*
    Global CSS
*/
import "./styles.css"

createApp(App).use(store).use(router).mount('#app')
