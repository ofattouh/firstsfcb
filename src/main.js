import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItemVFor from './components/FoodItemVFor.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('food-item-v-for', FoodItemVFor)
app.mount('#app')