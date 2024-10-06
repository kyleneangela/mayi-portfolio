import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

// Use BootstrapVue 3
app.use(BootstrapVue3)

createApp(App).mount('#app')
