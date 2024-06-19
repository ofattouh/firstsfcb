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
import SlotComp from './components/SlotComp.vue'
import SlotCardComp from './components/SlotCardComp.vue'
import SlotFallbackComp from './components/SlotFallbackComp.vue'
import VSlotComp from './components/VSlotComp.vue'
import VSlotDefaultComp from './components/VSlotDefaultComp.vue'
import VSlotTemplate from './components/VSlotTemplate.vue'
import VSlotShorthand from './components/VSlotShorthand.vue'
import LocalSlotComp from './components/LocalSlotComp.vue'
import LocalSlotCompArray from './components/LocalSlotCompArray.vue'
import LocalSlotCompArrayObjects from './components/LocalSlotCompArrayObjects.vue'
import LocalSlotCompStatic from './components/LocalSlotCompStatic.vue'
import LocalSlotCompNamed from './components/LocalSlotCompNamed.vue'
import LocalSlotCompNamed2 from './components/LocalSlotCompNamed2.vue'
import DynamicCompOne from './components/DynamicCompOne.vue'
import DynamicCompTwo from './components/DynamicCompTwo.vue'
import DynamicCompOneNotPersistent from './components/DynamicCompOneNotPersistent.vue'
import DynamicCompTwoNotPersistent from './components/DynamicCompTwoNotPersistent.vue'
import DynamicCompOnePersistent from './components/DynamicCompOnePersistent.vue'
import DynamicCompTwoPersistent from './components/DynamicCompTwoPersistent.vue'
import DynamicCompOnePersistentIncludeExclude from './components/DynamicCompOnePersistentIncludeExclude.vue'
import DynamicCompTwoPersistentIncludeExclude from './components/DynamicCompTwoPersistentIncludeExclude.vue'
import DynamicCompThreePersistentIncludeExclude from './components/DynamicCompThreePersistentIncludeExclude.vue'

const app = createApp(App)

// Add Components
app.component('food-item', FoodItem)
app.component('food-item-v-for', FoodItemVFor)
app.component('food-item-emit', FoodItemEmit)
app.component('food-item-fallthrough-attributes', FoodItemFallthroughAttributes);
app.component('scoped-styling-comp-one', ScopedStylingCompOne)
app.component('global-styling-comp-two', GlobalStylingCompTwo)
app.component('global-comp-one', GlobalCompOne)
app.component('global-comp-two', GlobalCompTwo)
app.component('slot-comp', SlotComp)
app.component('slot-card-comp', SlotCardComp)
app.component('slot-fallback-comp', SlotFallbackComp)
app.component('v-slot-comp', VSlotComp)
app.component('v-slot-default-comp', VSlotDefaultComp)
app.component('v-slot-template', VSlotTemplate)
app.component('v-slot-shorthand', VSlotShorthand)
app.component('local-slot-comp', LocalSlotComp)
app.component('local-slot-comp-array', LocalSlotCompArray)
app.component('local-slot-comp-array-objects', LocalSlotCompArrayObjects)
app.component('local-slot-comp-static', LocalSlotCompStatic)
app.component('local-slot-comp-named', LocalSlotCompNamed)
app.component('local-slot-comp-named-2', LocalSlotCompNamed2)
app.component('dynamic-comp-one', DynamicCompOne)
app.component('dynamic-comp-two', DynamicCompTwo)
app.component('dynamic-comp-one-not-persistent', DynamicCompOneNotPersistent)
app.component('dynamic-comp-two-not-persistent', DynamicCompTwoNotPersistent)
app.component('dynamic-comp-one-persistent', DynamicCompOnePersistent)
app.component('dynamic-comp-two-persistent', DynamicCompTwoPersistent)
app.component('dynamic-comp-one-persistent-include-exclude', DynamicCompOnePersistentIncludeExclude)
app.component('dynamic-comp-two-persistent-include-exclude', DynamicCompTwoPersistentIncludeExclude)
app.component('dynamic-comp-three-persistent-include-exclude', DynamicCompThreePersistentIncludeExclude)

app.mount('#app')
