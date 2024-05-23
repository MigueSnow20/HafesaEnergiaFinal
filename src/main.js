import './assets/main.css'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import PrimeVue from "primevue/config";
import router from './router';




import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component('DataTable', DataTable);
app.component('Column',   Column);
app.component('Button', Button);
app.mount('#app');

