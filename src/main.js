import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItemVFor from './components/FoodItemVFor.vue'
import FoodItemEmit from './components/FoodItemEmit.vue'

const app = createApp(App)

// Components
app.component('food-item', FoodItem)
app.component('food-item-v-for', FoodItemVFor)
app.component('food-item-emit', FoodItemEmit)

app.mount('#app')