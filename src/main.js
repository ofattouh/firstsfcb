import { createApp } from 'vue'
import App from './App.vue'

// Declare Components
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
import TeleportComp from './components/TeleportComp.vue'
import TeleportCompTwo from './components/TeleportCompTwo.vue'
import TemplateRefComp from './components/TemplateRefComp.vue'
import TemplateRefComp2 from './components/TemplateRefComp2.vue'
import TemplateRefComp3 from './components/TemplateRefComp3.vue'
import TemplateRefComp4 from './components/TemplateRefComp4.vue'
import HookBeforeCreateComp from './components/HookBeforeCreateComp.vue'
import HookCreatedComp from './components/HookCreatedComp.vue'
import HookMountedComp from './components/HookMountedComp.vue'
import HookMountedComp2 from './components/HookMountedComp2.vue'
import HookBeforeUpdateComp from './components/HookBeforeUpdateComp.vue'
import HookUpdatedComp from './components/HookUpdatedComp.vue'
import HookBeforeUnmountComp from './components/HookBeforeUnmountComp.vue'
import HookUnmountedComp from './components/HookUnmountedComp.vue'
import HookErrorCapturedComp from './components/HookErrorCapturedComp.vue'
import HookErrorCapturedComp2 from './components/HookErrorCapturedComp2.vue'
import HookActivatedNotActivatedComp from './components/HookActivatedNotActivatedComp.vue'
import HookActivatedNotActivatedComp2 from './components/HookActivatedNotActivatedComp2.vue'
import ProvideInjectFoodAboutComp from './components/ProvideInjectFoodAboutComp.vue'
import ProvideInjectFoodKindsComp from './components/ProvideInjectFoodKindsComp.vue'

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
app.component('teleport-comp', TeleportComp)
app.component('teleport-comp-two', TeleportCompTwo)
app.component('template-ref-comp', TemplateRefComp)
app.component('template-ref-comp-2', TemplateRefComp2)
app.component('template-ref-comp-3', TemplateRefComp3)
app.component('template-ref-comp-4', TemplateRefComp4)
app.component('hook-before-create-comp', HookBeforeCreateComp)
app.component('hook-created-comp', HookCreatedComp)
app.component('hook-mounted-comp', HookMountedComp)
app.component('hook-mounted-comp-2', HookMountedComp2)
app.component('hook-before-update-comp', HookBeforeUpdateComp)
app.component('hook-updated-comp', HookUpdatedComp)
app.component('hook-before-unmount-comp', HookBeforeUnmountComp)
app.component('hook-unmounted-comp', HookUnmountedComp)
app.component('hook-error-captured-comp', HookErrorCapturedComp)
app.component('hook-error-captured-comp-2', HookErrorCapturedComp2)
app.component('hook-activated-not-activated-comp', HookActivatedNotActivatedComp)
app.component('hook-activated-not-activated-comp-2', HookActivatedNotActivatedComp2)
app.component('provide-inject-food-about-comp', ProvideInjectFoodAboutComp)
app.component('provide-inject-food-kinds-comp', ProvideInjectFoodKindsComp)

app.mount('#app')