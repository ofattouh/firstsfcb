import { createApp } from 'vue'
import App from './App.vue'

import FoodItem from './components/FoodItem.vue'
import FoodItemVFor from './components/FoodItemVFor.vue'
import FoodItemEmit from './components/FoodItemEmit.vue'
import FoodItemFallthroughAttributes from './components/FoodItemFallthroughAttributes.vue'
import ScopedStylingCompOne from './components/ScopedStylingCompOne.vue'
import GlobalStylingCompTwo from './components/GlobalStylingCompTwo.vue'
import GlobalCompOne from './components/GlobalCompOne.vue'
import GlobalCompTwo from './components/GlobalCompTwo.vue'
const app = createApp(App)

// Components
app.component('food-item', FoodItem)
app.component('food-item-v-for', FoodItemVFor)
app.component('food-item-emit', FoodItemEmit)
app.component('food-item-fallthrough-attributes', FoodItemFallthroughAttributes);
app.component('scoped-styling-comp-one', ScopedStylingCompOne)
app.component('global-styling-comp-two', GlobalStylingCompTwo)
app.component('global-comp-one', GlobalCompOne)
app.component('global-comp-two', GlobalCompTwo)

app.mount('#app')