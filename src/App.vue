<script>
  import LocalCompOne from './components/LocalCompOne.vue';

  export default {
    data() {
      return {
        foods: [
          { name: 'Apples',
            desc: 'Apples are a type of fruit that grow on trees.',
            favorite: true,
            url: 'img_apple.svg' },
          { name: 'Pizza',
            desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
            favorite: false,
            url: 'img_pizza.svg' },
          { name: 'Rice',
            desc: 'Rice is a type of grain that people like to eat.',
            favorite: false,
            url: 'img_rice.svg' },
          { name: 'Fish',
            desc: 'Fish is an animal that lives in water.',
            favorite: true,
            url: 'img_fish.svg' },
          { name: 'Cake',
            desc: 'Cake is something sweet that tastes good.',
            favorite: false,
            url: 'img_cake.svg' }
        ],
        foods2: [
          { name: 'Pizza', imgUrl: 'img_pizza.svg' },
          { name: 'Apple', imgUrl: 'img_apple.svg' },
          { name: 'Cake', imgUrl: 'img_cake.svg' },
          { name: 'Fish', imgUrl: 'img_fish.svg' },
          { name: 'Rice', imgUrl: 'img_rice.svg' }
        ],
        newItem: '',
        items: ['Buy apples','Make pizza','Mow the lawn'],
        toggleValue: true,
        toggleValue2: true,
        toggleValue3: true,
        toggleValue4: true,
        toggleValue5: true,
        compNbr: 1,
        compName: 'dynamic-comp-one-persistent-include-exclude',
        activeHookBeforeCreateComp: false,
        activeHookCreatedComp: false,
        activeHookMountedComp: false,
        activeHookMountedComp2: false,
        activeHookBeforeUpdateComp: true,
        activeHookUpdatedComp: true,
        activeHookBeforeUnmountComp: true,
        activeHookUnmountedComp: true,
        activeHookActivatedNotActivatedComp: false,
        activeHookActivatedNotActivatedComp2: false,
        activeProvideInjectFoodComp: 'provide-inject-food-kinds-comp',
        activeDynamicComp: '',
        inpVal: '',
        inpValSubmitted: 'Not submitted yet',
        likeFoods: [],
        inpValSubmitted2: 'Not submitted yet',
        carSelected: '',
        inpValSubmitted3: 'Not submitted yet',
        carsSelected2: [],
        inpValSubmitted4: 'Not submitted yet',
        fileInp: null,
        inpValSubmitted5: 'Not submitted yet',
        heightInp: null,
        inpValSubmitted6: 'Not submitted yet',
        colorInp: null,
        inpValSubmitted7: 'Not submitted yet',
        txtInp: null,
        inpValSubmitted8: 'Not submitted yet'
      };
    },
    methods: {
      showItems() {
        console.log(this.foods);
      },
      removeItem() {
        this.foods.splice(1,1); // At position 1 inside array, remove 1 element
        console.log('\nSpliced: ', this.foods);
      },
      receiveEmit(foodName) {
        let foundFood = this.foods.find(
          food => food.name === foodName
        );

        foundFood.favorite = !foundFood.favorite;
        // console.log('\nreceiveEmit-foundFood: ', foundFood);
      },
      addItem() {
        this.items.push(this.newItem),
        this.newItem = '';
      },
      registerAnswer() {
        if(this.inpVal) {
          this.inpValSubmitted = this.inpVal;
        }
      },
      registerAnswer2() {
        this.inpValSubmitted2 = this.likeFoods;
      },
      registerAnswer3() {
        if(this.carSelected) {
          this.inpValSubmitted3 = this.carSelected;
        }
      },
      registerAnswer4() {
        if(this.carsSelected2) {
          this.inpValSubmitted4 = this.carsSelected2;
        }
      },
      registerAnswer5() {
        if(this.fileInp) {
          this.inpValSubmitted5 = this.fileInp;
        }
      },
      updateVal(e) {
        this.fileInp = e.target.value;
      },
      registerAnswer6() {
        if(this.heightInp) {
          this.inpValSubmitted6 = this.heightInp + ' cm';
        }
      },
      registerAnswer7() {
        if(this.colorInp) {
          this.inpValSubmitted7 = this.colorInp;
        }
      },
      registerAnswer8() {
        if(this.txtInp) {
          this.inpValSubmitted8 = this.txtInp;
        }
      }
    },
    components: {
      'local-comp-one': LocalCompOne
    },
    watch: {
      compNbr(val) {
        if(val > 3) {
          this.compNbr = 1;
        }
      }
    },
    computed: {
      activeComp() {
        if(this.toggleValue) {
          return 'dynamic-comp-one'
        }
        else {
          return 'dynamic-comp-two'
        }
      },
      activeComp2() {
        if(this.toggleValue2) {
          return 'dynamic-comp-one-not-persistent'
        }
        else {
          return 'dynamic-comp-two-not-persistent'
        }
      },
      activeComp3() {
        if(this.toggleValue3) {
          return 'dynamic-comp-one-persistent'
        }
        else {
          return 'dynamic-comp-two-persistent'
        }
      },
      activeComp4() {
        if(this.toggleValue4) {
          return 'dynamic-comp-one-persistent-include-exclude'
        }
        else {
          return 'dynamic-comp-two-persistent-include-exclude'
        }
      },
      activeComp5() {
        if(this.toggleValue5) {
          return 'dynamic-comp-one-persistent-include-exclude'
        }
        else {
          return 'dynamic-comp-two-persistent-include-exclude'
        }
      },
      activeComp6() {
        if(this.compNbr === 1) {
          return 'dynamic-comp-one-persistent-include-exclude'
        }
        else if(this.compNbr === 2) {
          return 'dynamic-comp-two-persistent-include-exclude'
        }
        else {
          return 'dynamic-comp-three-persistent-include-exclude'
        }
      },
      btnHookBeforeUnmountCompText() {
        if(this.activeHookBeforeUnmountComp) {
          return 'Remove HookBeforeUnmountComp component'
        }
        else {
          return 'Add HookBeforeUnmountComp component'
        }
      },
      btnHookUnmountedCompText() {
        if(this.activeHookUnmountedComp) {
          return 'Remove HookUnmountedComp component'
        }
        else {
          return 'Add HookUnmountedComp component'
        }
      }
    },
    // Vue Life Cycle Hooks
    beforeUpdate() {
      this.$refs.divHookBeforeUpdate.innerHTML += "<li>beforeUpdate: happened just before 'updated' hook and without causing infinite loop.</li>";
    },
    updated() {
      console.log("Some component is updated!");
    },
    provide() {
      return {
        foods2: this.foods2
      }
    },
    errorCaptured(error, compError, errorSrcType) {
      console.log("Custom Error Message: error is thrown from some component using errorCaptured Hook");
      console.log("Error: ", error);
      console.log("Component Error: ", compError);
      console.log("Error Source Type: ", errorSrcType);
    }
  }
</script>

<template>
  <br><hr style="height:4px;border-width:0;background-color:lightblue"><br>
  <h1 class="mainHeader">Food App built with Vue.js 3.X</h1>
  <br><hr style="height:4px;border-width:0;background-color:lightblue">

  <!-- 
    ================================================================================
  -->

  <br><h2>Vue Templates</h2>

  <p class="slot">To make it easier to handle larger projects, and get a better development environment, we write our Vue code 
    inside Single File Components (SFCs), or *.vue files which only consist of three parts:</p>

  <div id="wrapper">
    <ol>
      <li><b>&lt;template&gt; Tag:</b> For HTML Content</li>
      <li><b>&lt;script&gt; Tag:</b> For Vue JS Code</li>
      <li><b>&lt;style&gt; Tag:</b> For CSS Styling</li>
    </ol>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><h2>Component: FoodItem.vue</h2>

  <p>My favorite food has a diploma image attached to it.</p>
  <p>Food description for the rice component is not provided so the default value is used instead.</p>
  <p>The user can now change the favorite status of the food items with the use of a new data property initialized by the 'is-favorite' prop value.</p>

  <p id="warning">The user gets a warning in development mode because food description for pizza 
    is 65 characters, which is 15 characters longer than what validator function allows!</p>

  <!-- To pass props with a data type different than String, we must write v-bind: 
    in front of the attribute we want to pass. This is how we pass boolean 'isFavorite' prop 
    from App.vue as an attribute 'is-favorite' to child components -->
  <div id="wrapper">
    <food-item
      food-name="Apples"
      food-desc="Apples are a type of fruit that grow on trees."
      v-bind:is-favorite="true"/>
    <food-item
      food-name="Pizza"
      food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
      v-bind:is-favorite="false"/>
    <food-item food-name="Rice"></food-item>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Component: FoodItemVFor.vue</h2>

  <p>Components created with v-for based on an array.</p>
  <p>Food items are generated with v-for from the 'foods' array.</p>
  <p><mark>Without v-for <b>key</b> attribute this page will not work correctly!</mark></p>

  <!-- 

    You can use the v-bind: shorthand :
    Vue reuses elements to optimize performance, if we remove an item, already existing elements
    are reused instead of recreating all elements, and element properties might not be correct 
    anymore if elements do not have unique identifier: key to uniquely mark each element when 
    generating elements with v-for. We can not use array element index as key attribute value
    because that changes when array elements are removed and added. We uniquely identify 
    each element created with v-for and fix the problem using unique: x.name as key
  -->

  <div id="wrapper">
    <food-item-v-for
      v-for="x in foods"
      :key="x.name" 
      :food-name="x.name"
      :food-desc="x.desc"
      :is-favorite="x.favorite"/>
  </div>

  <br><br><button @click="showItems">Show Items</button>
  <br><br><button @click="removeItem">Remove Item</button>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Component: FoodItemEmit.vue</h2>

  <!-- 
    Listen to emit event with shorthand @ instead of v-on: inside App.vue where FoodItemEmit 
    component is created. When custom 'toggle-favorite' event happens, we need to create 
    'receiveEmit' method inside App.vue to test that this event happened
  -->

  <p>Click on 'Toggle Favorite' button to emit event from 'FoodItemEmit.vue' to 'App.vue' with 
    built-in Vue method '$emit()'. This emitted event also contains food item name.</p>

  <p>'Toggle Favorite' button on child component: "FoodItemEmit.vue" emits an event to parent 
    component: "App.vue". Favorite status is modified inside "App.vue", and updated status is sent
    back to child "FoodItemEmit" component so that image is toggled to reflect favorite status.</p>

  <p>Props must be declared inside the component, while emits are just recommended to be documented
     by using the Vue 'emits' option</p>

  <p><mark>The result is the same as what was done for child component: "FoodItem.vue", <b>EXCEPT 
    favorite status is now modified correctly where it should be inside parent component: "App.vue"
    where it lives</b> instead of inside child component: "FoodItemEmit.vue".</mark></p>

  <div id="wrapper">
    <food-item-emit
      v-for="x in foods"
      :key="x.name"
      :food-name="x.name"
      :food-desc="x.desc"
      :is-favorite="x.favorite"
      @toggle-favorite="receiveEmit"
    />
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Component: FoodItemFallthroughAttributes.vue</h2>

  <p>
    To see the point of this section, that properties can fall through to the root element 
    inside the template of our component, we can give the list items some styling from App.vue
  </p>

  <p>In this example, the style attribute falls through from App.vue into the li element 
    which is the components root element
  </p>

  <p>
    If 'class' or 'style' attributes are already set, and 'class' or 'style' attributes also 
    comes from the parent as fallthrough attributes, the attributes will be merged
  </p>

  <p>
    In this example, the style attribute falls through from App.vue into the li element 
    which is the components root element, and merges with the existing style attribute
  </p>

  <p>
    If we have more than one element on the root level of the component, it is no longer 
    clear which element the attributes should fall through to. To define which root element 
    gets the fallthrough attributes we can mark the element with the built-in $attrs object
  </p>

  <p>
    In this example, there are three elements on the root level of the component so we use 
    v-bind="$attrs" to define which element should receive the fallthrough style attribute 
    that gives green background-color
  </p>

  <h3>Todo List</h3>

  <ul>
    <food-item-fallthrough-attributes
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen;"
    />
  </ul>

  <input placeholder="Add things to do here" v-model="newItem" @keydown.enter="addItem">
  <button @click="addItem">Add</button>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Components: ScopedStylingCompOne.vue & GlobalStylingCompTwo.vue</h2>

  <p>
    Styling defined inside the "style" tag in a component, or in App.vue, is available globally
    to all components. To keep the styling limited locally to just the component, we use the 
    scope attribute on that component: "style scoped"
  </p>

  <p>
    To avoid that styling in one component affects the styling of elements in other components 
    we use the 'scoped' attribute on the "style" tag: The "style" tag in ScopedStylingCompOne.vue 
    is given the scoped attribute
  </p>

  <div>
    <h3>Global & Scoped Styling</h3>
    <p>This p-tag belongs to 'App.vue'</p>
    <scoped-styling-comp-one />
    <global-styling-comp-two />
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Global & Local Components: GlobalCompOne.vue, GlobalCompTwo.vue & LocalCompOne.vue</h2>

  <p>
    Components can be made to be local, meaning that they are only accessible inside a specific *.vue file
  </p>

  <p>
    We can include a component directly in the "script" tag in a *.vue file instead of 
    including it inside main.js. If we include a component directly in a *.vue file, the 
    component becomes accessible only locally in that file
  </p>

  <p>
    To make LocalCompOne.vue local to App.vue, and only accessible there, remove it from main.js
    and include LocalCompOne.vue directly in the "script" tag of App.vue
  </p>

  <div>
    <h3>Global Components</h3>
    <p>App.vue</p>
    <p>The GlobalCompOne.vue component is used inside both App.vue and GlobalCompTwo.vue.</p>
    <global-comp-one /> <br>
    <global-comp-two />
  </div>

  <div>
    <h3>Local Component</h3>
    <p>The LocalCompOne.vue component is a local component and can only be used inside App.vue.</p>
    <local-comp-one /> <br>
    <global-comp-two />
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Component: SlotComp.vue</h2>

  <p class="slot">
    Slots allow for more flexible and reusable components to send content from the parent into the template tag of 
    child component. The slot tag acts as a placeholder for the content, so that after the application is built the 
    slot tag will be replaced by the content sent to it
  </p>

  <div>
    <p>We send 'Hello World!' as content to the slot tag inside the SlotComp.vue component from App.vue.</p>
    <slot-comp>Slot Component: Hello World</slot-comp>
  </div>

  <p class="slot">
    Slots can also be used to wrap around larger chunks of dynamic html content to get a card-like appearance.
    Earlier we have sent data as props to create content inside components, we can also send the HTML content 
    directly inside the slot tag as it is
  </p>

  <p>We create card-like div boxes from the foods array</p>
  <div id="wrapper">
    <slot-card-comp v-for="x in foods" v-bind:key="x">
      <img v-bind:src="x.url">
      <h4>{{x.name}}</h4>
      <p>{{x.desc}}</p>
    </slot-card-comp>
  </div>

  <p>Re-usable Slot Cards</p>
  <p class="slot">We create card-like div boxes from foods array</p>
  <p class="slot">We also create card-like footer by reusing same component</p>

  <div id="wrapper">
    <slot-card-comp v-for="x in foods" v-bind:key="x">
      <img v-bind:src="x.url">
      <h4>{{x.name}}</h4>
    </slot-card-comp>
  </div>

  <footer>
    <slot-card-comp>
      <h4>Footer</h4>
    </slot-card-comp>
  </footer>

  <p>Slots Fallback Content</p>
  <p class="slot">A component without content provided can have fallback content in the slot tag</p>

  <div id="wrapper">
    <slot-fallback-comp>
      <!-- Empty -->
    </slot-fallback-comp>

    <slot-comp>
      <h4>This content is provided from App.vue</h4>
    </slot-comp>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Component: Vue v-slot</h2>

  <p>We need the v-slot directive to refer to named slots.</p>
  <p>With two slots in a component, we can see that the content simply appears inside both places bceause we
    didn't use v-slots and named slots.</p>

  <p>This component has two &lt;div&gt; tags with one &lt;slot&gt; in each.</p>
  <slot-comp>'Hello!'</slot-comp>

  <p>If we have more than one slot tag in a component, but we want to control in which slot tag the content 
    should appear, we need to name the slots and use v-slot to send the content to the right place.</p>
  <p>To be able to differentiate the slots we give the slots different names.</p>

  <p>The component has two div tags with one slot in each.</p>
  <div id="wrapper">
    <v-slot-comp v-slot:bottomSlot>'Hello!'</v-slot-comp>
  </div>

  <p>If you have a slot tag with no name, that slot tag will be default for components marked with v-slot:default,
     or components that are not marked with v-slot tag.</p>

  <p>The component has two div tags with one slot in each.</p>
  <p>We can also mark content with the default value v-slot:default to make it even more clear that the content 
    belongs to the default slot</p>

  <div id="wrapper">
    <v-slot-default-comp>'Default slot'</v-slot-default-comp>
  </div>

  <div id="wrapper">
    <v-slot-default-comp v-slot:default>'Default slot (Adding attribute: v-slot:default is more clear)'</v-slot-default-comp>
  </div>

  <p>v-slot directive can be used as an attribute in the component tag.</p>
  <p>v-slot can also be used in template tag to direct larger parts of content to a certain slot tag because the 
    template tag is not rendered, it is just a placeholder for the rendered HTML content.</p>

  <p>This component has two div tags with one slot in each</p>
  <div id="wrapper">
    <v-slot-template>
      <template v-slot:bottomSlot>
        <h4>To the bottom slot!</h4>
        <p>This p tag and h4 tag above are directed to bottom slot with v-slot directive used on template tag</p>
      </template>

      <p>This goes into the default slot</p>
    </v-slot-template>
  </div>

  <p>The shorthand for v-slot: is #</p>
  <div id="wrapper">
    <p>The component has two div tags with one slot in each.</p>
    <v-slot-shorthand #topSlot>'Hello!'</v-slot-shorthand>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Component: Scoped Slots</h2>

  <p>Scoped slot provides local data from the component so that the parent can choose how to render it</p>

  <p>The data inside the component can be referred to as 'local' because it is not accessible to the parent unless 
    it is sent up to the parent with v-bind.</p>

  <p>The local data in the component is sent with v-bind, and it can be received in the parent with v-slot</p>

  <div id="wrapper">
    <p>Local Component</p>
    <p>App.vue controls how local data from the scoped slot is rendered</p>

    <local-slot-comp v-slot="dataFromSlot">
      <p class="local-slot">{{ dataFromSlot.lclData }}</p>
    </local-slot-comp>
  </div>

  <p>A scoped slot can send data from an array by using v-for</p>

  <div id="wrapper">
    <p>Local Scoped Slot Array</p>
    <p>App.vue controls how the array from the scoped slot is rendered using v-for</p>
    
    <local-slot-comp-array v-slot="myfood">
      <p class="local-slot">{{ myfood.foodName }}</p>
    </local-slot-comp-array>
  </div>

  <p>Scoped Slot with an Array of Objects</p>
  <p>A scoped slot can send data from an array of objects by using v-for:</p>

  <div id="wrapper">
    <p>App.vue controls how the array from the scoped slot is rendered using v-for</p>
    
    <local-slot-comp-array-objects v-slot="myfood">
      <p class="local-slot">{{ myfood.foodName }}<img :src=myfood.foodUrl></p>
      <p class="local-slot">{{ myfood.foodDesc }}</p><hr>
    </local-slot-comp-array-objects>
  </div>

  <p>Static Data from a Scoped Slot</p>

  <p>A scoped slot can also send static data, that is data that does not belong to data property of Vue instance.
    When sending static data we do not use v-bind.</p>

  <p>Here we send one static text, and one text bound dynamically to the data instance to see the difference.</p>

  <div id="wrapper">
    <p>App.vue controls how local data from the scoped slot is rendered.</p>

    <local-slot-comp-static v-slot="mytexts">
      <p class="local-slot">{{ mytexts.staticText }}</p>
      <p class="local-slot">{{ mytexts.dynamicText }}</p>
    </local-slot-comp-static>
  </div>

  <p>Named Scoped Slots</p>

  <p>To use named scoped slots we need to name the slots inside the component with the 'name' attribute.</p>

  <p>And to receive data from a named slot we need to refer to that name in the parent where we use the component, 
    with the v-slot directive, or shorthand #.</p>

  <div id="wrapper">
    <p>Named scoped slots "leftSlot" and "rightSlot" send different data to App.vue from Component: LocalSlotCompNamed.vue</p>

    <local-slot-comp-named #leftSlot="myleftProps">
      <p class="local-slot">{{ myleftProps.text }}</p>
    </local-slot-comp-named>

    <local-slot-comp-named #rightSlot="myrightProps">
      <p class="local-slot">{{ myrightProps.text }}</p>
    </local-slot-comp-named>
  </div>

  <p>Alternatively, we can create the component one time, with two different "template" tags, each "template" tag 
    referring to a different slot.</p>

  <div id="wrapper">
    <p>Named slots "leftSlot2" and "rightSlot2" send different data to App.vue from Component: LocalSlotCompNamed2.vue</p>

    <local-slot-comp-named-2>
      <template #leftSlot2="myleftProps2">
        <p class="local-slot">{{ myleftProps2.text }}</p>
      </template>
  
      <template #rightSlot2="myrightProps2">
        <p class="local-slot">{{ myrightProps2.text }}</p>
      </template>
    </local-slot-comp-named-2>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Dynamic Components</h2>

  <p>Dynamic Components can be used to flip through pages within your page, like tabs in browser, with 'is' attribute.</p>

  <p>To make a dynamic component we use component tag to represent the active component. The 'is' attribute is tied to 
    a value with v-bind, and we change that value to the name of the component we want to have active.</p>

  <p>In this example we have component tag that acts as a placeholder for either dynamic-comp-one component or 
    dynamic-comp-two component. The 'is' attribute is set on the component tag and listens to the computed value 
    'activeComp' that holds either 'dynamic-comp-one' or 'dynamic-comp-two' as value. The button that toggles data 
    property between 'true' and 'false' to make the computed value switch between the active components.</p>

  <div>
    <p>Dynamic Components</p>
    <p>App.vue switches between which component to show:</p>

    <component :is="activeComp"></component>
    <button @click="toggleValue = !toggleValue">Switch component</button>
  </div>
  
  <p>On this example, changes you make in one component is forgotten when you switch back to it. That is because
    the component is unmounted and mounted again, reloading the component.</p>

  <p>On This example, the components are not persistent and user inputs will be gone when returning to component.</p>

  <div>
    <p>Dynamic Components (<b>Not Persistent</b>)</p>
    <p>App.vue switches between which component to show:</p>

    <component :is="activeComp2"></component><br>
    <button @click="toggleValue2 = !toggleValue2">Switch component</button>
  </div>

  <p>To keep the state of your previous inputs, when returning to the component we use KeepAlive tag around 
    component tag.</p>

  <p>The components now remember the user inputs.</p>

  <div>
    <p>Dynamic Components (<b>Persistent</b>)</p>
    <p>App.vue switches between which component to show:</p>
    <p>With the &lt;KeepAlive&gt; tag the components now remember the user inputs.</p>

    <KeepAlive><component :is="activeComp3"></component></KeepAlive><br>
    <button @click="toggleValue3 = !toggleValue3">Switch component</button>
  </div>

  <p>The 'include' and 'exclude' Attributes:</p>

  <p>All components inside the KeepAlive tag will be kept alive by default. We can also define only some 
    components to be kept alive by using 'include' or 'exclude' attributes on KeepAlive tag. If 'include' or 
    'exclude' attributes are used, we need to give the components names with the 'name' option.</p>

  <p>With include attribute, only 'DynamicCompOnePersistentIncludeExclude' component will remember its state and previous inputs.</p>

   <div>
    <p>Dynamic Components (<b>Persistent: Include</b>)</p>
    <p>App.vue switches between which component to show:</p>
    <p>With &lt;KeepAlive include="DynamicCompOnePersistentIncludeExclude"&gt; 
      only "DynamicCompOnePersistentIncludeExclude" component will remember the user input.</p>

    <KeepAlive include="DynamicCompOnePersistentIncludeExclude">
      <component :is="activeComp4"></component>
    </KeepAlive><br>

    <br><button @click="toggleValue4 = !toggleValue4">Switch component</button>
  </div>

  <p>With exclude attribute, we chose which component will remember its state and previous inputs.</p>

  <div>
    <p>Dynamic Components (<b>Persistent: Exclude</b>)</p>
    <p>App.vue switches between which component to show.</p>
    <p>With &lt;KeepAlive exclude="DynamicCompOnePersistentIncludeExclude"&gt; 
      "DynamicCompOnePersistentIncludeExclude" component will be excluded from KeepAlive tag, and only 
      "DynamicCompTwoPersistentIncludeExclude" will remember the user input.</p>
    
    <KeepAlive exclude="DynamicCompOnePersistentIncludeExclude">
      <component :is="activeComp5"></component>
    </KeepAlive>

    <br><button @click="toggleValue5 = !toggleValue5">Switch component</button>
  </div>

  <p>Both 'include' and 'exclude' can be used with multiple components by using comma separation.</p>

  <div>
    <p>Dynamic Components (<b>Persistent: Both Include & Exclude</b>)</p>
    <p>With &lt;KeepAlive include="DynamicCompOnePersistentIncludeExclude, DynamicCompThreePersistentIncludeExclude"&gt;
      both the "DynamicCompOnePersistentIncludeExclude" and "DynamicCompThreePersistentIncludeExclude" components 
      will remember their state and the user input</p>

    <KeepAlive include="DynamicCompOnePersistentIncludeExclude, DynamicCompThreePersistentIncludeExclude">
      <component :is="activeComp6"></component>
    </KeepAlive>

    <br><button @click="compNbr++">Next component</button>
  </div>

  <p>With 'max' attribute applied to &lt;KeepAlive&gt;, we can limit the number of components the browser 
    needs to remember the state of.</p>

  <div>
    <p>Dynamic Components (<b>Persistent: max attribute</b>)</p>
    <p>With &lt;KeepAlive :max="2"&gt; browser will only remember the last two visited components of user input</p>

    <KeepAlive :max="2">
      <component :is="compName"></component>
    </KeepAlive>

    <br>
    <label>
      <input type="radio" name="rbgComp" v-model="compName" :value="'dynamic-comp-one-persistent-include-exclude'">
      DynamicCompOnePersistentIncludeExclude
    </label>
  
    <label>
      <input type="radio" name="rbgComp" v-model="compName" :value="'dynamic-comp-two-persistent-include-exclude'">
      DynamicCompTwoPersistentIncludeExclude
    </label>

    <label>
      <input type="radio" name="rbgComp" v-model="compName" :value="'dynamic-comp-three-persistent-include-exclude'">
      DynamicCompThreePersistentIncludeExclude
    </label>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Vue Teleport</h2>
  
  <p class="slot">To move some content to somewhere else in the DOM structure we use the Vue Teleport tag 
    around the content and the 'to' attribute to define where to move it.</p>

  <div id="wrapper">
    <p>TeleportComp Component</p>
    <p>With &lt;teleport to="body"&gt; we move the red &lt;div&gt; from inside the component to the body Tag:</p>
    <teleport-comp></teleport-comp>
  </div>

  <p class="slot">Even though teleported div tag is no longer inside the component after compilation. 
    Relevant code inside component in script and style tags still works for teleported moved content.</p>

   <div id="wrapper">
    <p>TeleportCompTwo Component</p>
    <p>With &lt;teleport to="body"&gt; we move the lightpink/lightgreen &lt;div&gt; from inside the component 
      to the root of the body Tag:</p>
    <teleport-comp-two></teleport-comp-two>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Vue Template Refs</h2>

  <p>Vue Template Refs are used to refer to specific DOM elements. When the ref attribute is set on an HTML tag, 
    the resulting DOM element is added to the $refs object. We can use the ref attribute and the $refs object in 
    Vue as an alternative to methods in plain JavaScript like getElementById() or querySelector().</p>
  
  <p>In this example, HTML tags with ref attribute will be added to $refs object and can be reached later from 
    inside the &lt;script tag.&gt;</p>

  <p>In this example, the text inside p element is changed.</p>

  <div id="wrapper">
    <template-ref-comp></template-ref-comp>
  </div>

  <p>In this example, we copy the value of one tag inside another tag using the $refs object.</p>

  <div id="wrapper">
    <template-ref-comp-2></template-ref-comp-2>
  </div>

  <p>In this example, We can go further into an HTML element added to the $refs object to access any property.</p>
  
  <div id="wrapper">
    <template-ref-comp-3></template-ref-comp-3>
  </div>

  <p>HTML elements created with v-for, with the ref attribute, will be added to the $refs object as an array.</p>
  
  <div id="wrapper">
    <template-ref-comp-4></template-ref-comp-4>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Vue Lifecycle Hooks</h2>

  <p>Lifecycle hooks are certain stages in the lifecycle of a component where we can add code to do things.
    Every time a component reaches a new stage in its lifecycle, a specific function runs, and we can add code to that 
    function.</p>

  <p>Such functions are called lifecycle hooks, because we can "hook" our code into that stage.</p>

  <p>They are: 
    <ol>
      <li>beforeCreate</li>
      <li>created</li>
      <li>beforeMount</li>
      <li>mounted</li>
      <li>beforeUpdate</li>
      <li>updated</li>
      <li>beforeUnmount</li>
      <li>unmounted</li>
      <li>errorCaptured</li>
      <li>renderTracked</li>
      <li>renderTriggered</li>
      <li>activated</li>
      <li>deactivated</li>
      <li>serverPrefetch</li>
    </ol>
  </p>

  <p>The beforeCreate lifecycle hook happens before the component is initialized, so this is before Vue has set up 
    the component's data, computed properties, methods, and event listeners.</p>

  <p>The beforeCreate hook can be used for example to set up a global event listener, but we should avoid trying to 
    access elements that belong to the component from the beforeCreate lifecycle hook, such as data, watchers and 
    methods, because they are not created yet at this stage. Also, it does not make sense to access DOM elements 
    from the beforeCreate lifecycle hook, because they are not created until after the component is mounted.</p>

  <div id="wrapper">
    <p>The 'beforeCreate' Lifecycle Hook</p>
    <p>We can see the console.log() message from 'beforeCreate' lifecycle hook, but there is no effect from the 
      text change we try to do to the Vue data property, because the Vue data property is not created yet.</p>

    <button @click="this.activeHookBeforeCreateComp = !this.activeHookBeforeCreateComp">
      Add/Remove Component
    </button>

    <div>
      <hook-before-create-comp v-if="activeHookBeforeCreateComp"></hook-before-create-comp>
    </div>
  </div>

  <p>The created lifecycle hook happens after the component is initialized, so Vue has already set up the component 
    data, computed properties, methods, and event listeners. We should avoid trying to access DOM elements from the 
    created lifecycle hook, because DOM elements are not accessible until the component is mounted. </p>
    
  <p>The created lifecycle hook can be used to Fetch Data with HTTP requests, or set up initial Data values</p>

  <div id="wrapper">
    <p>The 'created' Lifecycle Hook</p>
    <p>We can see the console.log() message from 'created' lifecycle hook, and the text change we try to do to 
      Vue data property works, because the Vue data property is already created at this stage.</p>

    <button @click="this.activeHookCreatedComp = !this.activeHookCreatedComp">Add/Remove Component</button>

    <div>
      <hook-created-comp v-if="activeHookCreatedComp"></hook-created-comp>
    </div>
  </div>

  <p>The beforeMount lifecycle hook happens right before the component is mounted, so just before the component is 
    added to the DOM. We should avoid trying to access DOM elements from the beforeMount lifecycle hook, because 
    DOM elements are not accessible until the component is mounted.</p>
    
  <p><span id="error">Using The beforeMount lifecycle hook, if we try to access DOM element: this.$refs.pEl.innerHTML,
    this will generates an error in the browser console because the pEl element will still be undefined</span></p>

  <br><br>
  <p>The mounted() lifecycle hook is called Right after a component is added to the DOM tree, and we can add code 
    to that stage. This is the first chance we can access DOM elements, like using the ref attribute and $refs object.
    <br><br><b>Note: The mounted stage happens AFTER the the component is added to the DOM</b>
  </p>

  <div id="wrapper">
    <p>The 'mounted' Lifecycle Hook</p>

    <button @click="this.activeHookMountedComp = !this.activeHookMountedComp">
      Create component
    </button>

    <div>
      <hook-mounted-comp v-if="activeHookMountedComp"></hook-mounted-comp>
    </div>
  </div>

  <p>The 'mounted' Lifecycle Hook 2</p>

  <div id="wrapper">
    <button @click="this.activeHookMountedComp2 = !this.activeHookMountedComp2">
      Create component
    </button>
  
    <div>
      <hook-mounted-comp-2 v-if="activeHookMountedComp2"></hook-mounted-comp-2>
    </div>
  </div>

  <p>The beforeUpdate lifecycle hook is called whenever there is a change in the data of our component, but before 
    the update is rendered to the screen. The beforeUpdate lifecycle hook happens right before the updated lifecycle 
    hook. Something important about the beforeUpdate hook is that we can do changes to the application without it 
    triggering a new update, so we avoid the otherwise infinite loop. <span id="error">That is the reason for not 
    doing changes to the application in the updated lifecycle hook, because with that hook, an infinite loop will 
    be created.</span></p>

  <div id="wrapper">
    <p>The 'beforeUpdate' Lifecycle Hook</p>
    <p>Whenever there is change inside page, application is 'updated' and 'beforeUpdate' hook happens just before that.</p>
    <p id="error">It is safe to modify our page in the 'beforeUpdate' hook like in this example, but if we modify 
      our page inside the 'updated' hook, we will generate an infinite loop.</p>

    <button @click="this.activeHookBeforeUpdateComp = !this.activeHookBeforeUpdateComp">
      Add/Remove Component
    </button>
  
    <div>
      <hook-before-update-comp v-if="activeHookBeforeUpdateComp"></hook-before-update-comp>
    </div>

    <ol ref="divHookBeforeUpdate"></ol>
  </div>

  <p>The updated lifecycle hook is called after component has updated its DOM tree.</p>

  <p><mark>Note: We must be careful not to modify the page itself when the updated lifecycle hook is called, 
    because then the page will update again and again, creating an infinite loop.</mark></p>

  <div id="wrapper">
    <p>Whenever there is a change inside the page, the application is updated and the updated() function is called. 
      In this example we use console.log() in the updated() function that runs when our application is updated.</p>

    <button @click="this.activeHookUpdatedComp = !this.activeHookUpdatedComp">
      Add/Remove component
    </button>
  
    <div>
      <hook-updated-comp v-if="activeHookUpdatedComp"></hook-updated-comp>
    </div>
  </div>

  <p>The beforeUnmount lifecycle hook is called just before a component is removed from the DOM. We can still 
    access component elements in the DOM in the beforeUnmount hook.</p>

  <div id="wrapper">
    <p>In this example, inside the console.log() message, the text inside the p-tag is still accessible inside the 
      'beforeUnmount' hook, right before the 'unmount' hook.</p>

    <button @click="this.activeHookBeforeUnmountComp = !this.activeHookBeforeUnmountComp">
      {{ btnHookBeforeUnmountCompText }}
    </button>
  
    <div>
      <hook-before-unmount-comp v-if="activeHookBeforeUnmountComp"></hook-before-unmount-comp>
    </div>
  </div>

  <p>The unmounted lifecycle hook is called after a component is removed from the DOM. It can be used to remove 
    event listeners or cancelling timers or intervals.</p>
    
  <p>Note: The unmounted stage happens AFTER the the component is removed from the DOM</p>

  <div id="wrapper">
    <button @click="this.activeHookUnmountedComp = !this.activeHookUnmountedComp">
      {{ btnHookUnmountedCompText }}
    </button>
  
    <div>
      <hook-unmounted-comp v-if="activeHookUnmountedComp"></hook-unmounted-comp>
    </div>
  </div>

  <p>The errorCaptured lifecycle hook is called when an error happens in a child/descendant component. It can be 
    used for error handling, logging or to display the error to the user.</p>

  <div id="wrapper">
    <p>Whenever there is an error in a child component, the errorCaptured() function is called on the parent.</p>
    <p>When the button inside the component is clicked, a method will run that tries to do changes to a $refs object
      that does not exist.</p>
    <p>This creates an error in the component that triggers 'errorCaptured' lifecycle hook in the parent,
      and console message is displayed with information about the error</p>
    <p id="error">Open the browser console to see the captured error details.</p>
    
    <div>
      <hook-error-captured-comp></hook-error-captured-comp>
    </div>
  </div>

  <p>
    Information about the error can also be captured as arguments to the errorCaptured() function. They are:<br>
    <ol>
      <li>The error</li>
      <li>The component that triggered the error</li>
      <li>The error source type</li>
    </ol>
  </p>

  <div id="wrapper">
    <p>Whenever there is an error inside child component, the errorCaptured() function is called on the parent.</p>
    <p id="error">Open the browser console to see the captured error details.</p>

    <div>
      <hook-error-captured-comp-2></hook-error-captured-comp-2>
    </div>
  </div>

  <br><br>
  <p>The renderTracked hook runs when a render function is set to track, monitor reactive component. 
    The renderTracked hook usually runs when a reactive component is initialized.</p>

  <p>The renderTriggered hook runs when such a tracked reactive component changes, and therefore triggers a new 
    render, so that the screen gets updated with the latest changes.</p>

  <p>A reactive component is a component that can change.</p>

  <p>A render function is a function compiled by Vue that keeps track of reactive components. When a reactive 
    component changes, the render function is triggered and re-renders the application to the screen</p>

  <p><mark>The renderTracked and renderTriggered hooks are meant to be used only in Debugging, and is only 
    available in App Development mode.</mark></p>

  <br><br>
  <p>Like the mounted and unmounted lifecycle hooks are used when a component is removed or added to the DOM.
    <br>The activated and deactivated lifecycle hooks are used when a cached dynamic component is added 
    or removed, but NOT from the DOM.</p>
    
  <p>The &lt;KeepAlive&gt; Tag will be used in the following 2 examples to cache the Dynamic component:</p>

  <div id="wrapper">
    <p>In this example for the 'activated' hook we check if the component is cached properly with &lt;KeepAlive&gt;.</p>
    <p>If the component is cached properly with &lt;KeepAlive&gt; Tag, The 'mounted' hook should run once the first
      time the component is included (must be added to the DOM the first time), and the 'activated' hook should
      run every time the component is included (also the first time).</p>

    <button @click="this.activeHookActivatedNotActivatedComp = !this.activeHookActivatedNotActivatedComp">
      Include component
    </button>

    <div>
      <KeepAlive>
        <hook-activated-not-activated-comp v-if="activeHookActivatedNotActivatedComp">
        </hook-activated-not-activated-comp>
      </KeepAlive>
    </div>
  </div>

  <p>In this second example, we use 'activated', 'deactivated', 'mounted' and 'unmounted' hooks:</p>
    
  <p>
    <ol>
      <li>The 'mounted' hook should run once the first time cached component is included (must be added to DOM first time)</li>
      <li>The 'activated' hook should run every time the cached component is included (also the first time)</li>
      <li>The 'deactivated' hook should run every time the cached component is removed</li>
      <li>The 'unmounted' hook never runs for the cached component</li>
    </ol>
  </p>

  <div id="wrapper">
    <p>We check if the component is cached properly with &lt;KeepAlive&gt; Tag</p>

    <button @click="this.activeHookActivatedNotActivatedComp2 = !this.activeHookActivatedNotActivatedComp2">
      Include Component
    </button>

    <div>
      <KeepAlive>
        <hook-activated-not-activated-comp-2 v-if="activeHookActivatedNotActivatedComp2">
        </hook-activated-not-activated-comp-2>
      </KeepAlive>
    </div>
  </div>

  <p>The 'serverPrefetch' hook is only called during server-side rendering (SSR) and has very advanced setup.</p>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Vue Provide/Inject</h2>

  <p>Inside large projects, with components inside components, it can be hard to use props to provide data from 
    "App.vue" to sub-components because it requires props to be defined in every component data passes through.</p>

  <p>If we use provide/inject instead of using props, we only need to define the provided data where it is 
    provided, and only need to define the injected data where it is injected. Provide makes data available to 
    other components and Inject is used to get the provided data. It as alternative to passing data using props.</p>

  <p>In this example, the 'foods2' array is now provided in 'App.vue' so that it is available to be injected 
    inside other components. We can include it inside 'ProvideInjectFoodKindsComp' component. With 'foods2' 
    data injected inside 'ProvideInjectFoodKindsComp' component, we use data from App.vue to display 
    different foods inside the 'ProvideInjectFoodKindsComp' component:</p>
  
  <div>
    <p>Choose Food Component:</p>

    <div @click="this.activeProvideInjectFoodComp = 'provide-inject-food-about-comp'" class="divBtn">
      ProvideInjectFoodAboutComp Component
    </div>

    <div @click="this.activeProvideInjectFoodComp = 'provide-inject-food-kinds-comp'" class="divBtn">
      ProvideInjectFoodKindsComp Component
    </div>

    <div id="divComp">
      <component :is="activeProvideInjectFoodComp"></component>
    </div>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Vue Routing</h2>

  <p>Routing is used to navigate the Vue application, and it happens on the client side (in the browser) without 
    full page reload, which results in a faster user experience. With routing we can use the URL address to direct 
    to specific place in our Vue application.</p>

  <p>In this example: we navigate using Dynamic Components where we can switch between the components using buttons:</p>

  <div id="wrapper">
    <p>Choose what part of this page you want to see:</p>
    <button class="dynamicCompBtn" @click="activeDynamicComp = 'dynamic-comp-animal-collection'">Dynamic Component: Animals</button>
    <button class="dynamicCompBtn" @click="activeDynamicComp = 'dynamic-comp-food-items'">Dynamic Component: Food</button><br>

    <div>
      <component :is="activeDynamicComp"></component>
    </div>
  </div>

  <p>From Dynamic Component to Routing:</p>

  <p>Inside SPAs (Single Page Applications) with Vue, our application can only contains one *.html file. We cannot 
    direct people to other *.html files to show them different content on our page. In the last Dynamic Component
    example, we can navigate between different content on the page, but we cannot use URL address to the page 
    so that we can go directly to the part about food, but with routing we can.</p>

  <p>With routing set up, if you open the application with an extension to the URL address, like "/food-items" 
    for example, you will come directly to the part with the food content.</p>

  <p>To use the new router, we need to use the &lt;router-view&gt; component instead. In this example, We replace
    the buttons with &lt;router-link&gt; components because that works better with the router:</p>

  <div id="wrapper">
    <p>Choose what part of this page to view by clicking on &lt;Router Links&gt; below OR by changing URL address 
      to "/router-comp-animals" OR to "/router-comp-food" OR to "/" to navigate to the Home page:</p>

    <router-link to="/router-comp-animals">Router Link: Animals Component</router-link>
    <router-link to="/router-comp-food">Router Link: Food Component</router-link>
    <router-link to="/">Router Link: Home Page</router-link>

    <div>
      <router-view></router-view>
    </div>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Vue Form Inputs</h2>

  <p>Radio buttons that belong to the same choice must have the same name so that only one radio button can be chosen.</p>

  <p>As with all inputs in Vue, we capture the radio button input value with v-model, but the value attribute 
    must also be set explicitly on the &lt;input type="radio"&gt; tag:</p>

  <div id="wrapper">
    <p>Radio Buttons in Vue:</p>

    <form @submit.prevent="registerAnswer">
      <p>What is your favorite animal?</p>

      <label class="labelFormInput">
        <input type="radio" name="favAnimal" v-model="inpVal" value="Cat"> Cat
      </label>

      <label class="labelFormInput">
        <input type="radio" name="favAnimal" v-model="inpVal" value="Dog"> Dog
      </label>

      <label class="labelFormInput">
        <input type="radio" name="favAnimal" v-model="inpVal" value="Turtle"> Turtle
      </label>

      <label class="labelFormInput">
        <input type="radio" name="favAnimal" v-model="inpVal" value="Moose"> Moose
      </label>
  
      <button class="submitBtnFormInput" type="submit">Submit</button>
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted }}</p>
    </div>
  </div>

  <p>In checkbox inputs are connected to the same array with v-model, the values for the checked checkboxes 
    are gathered in that array:</p>

  <div id="wrapper">
    <p>Checkbox Inputs in Vue:</p>

    <form @submit.prevent="registerAnswer2">
      <p>What kinds of food do you like?</p>

      <label class="labelFormInput">
        <input type="checkbox" v-model="likeFoods" value="Pizza"> Pizza
      </label>

      <label class="labelFormInput">
        <input type="checkbox" v-model="likeFoods" value="Rice"> Rice
      </label>

      <label class="labelFormInput">
        <input type="checkbox" v-model="likeFoods" value="Fish"> Fish
      </label>

      <label class="labelFormInput">
        <input type="checkbox" v-model="likeFoods" value="Salad"> Salad
      </label>

      <button class="submitBtnFormInput" type="submit">Submit</button>
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted2 }}</p>
    </div>
  </div>

  <p>When using a drop-down list in Vue we need to connect the &lt;select&gt; tag with v-model, and give values 
    to the &lt;option&gt; tags:</p>

  <div id="wrapper">
    <p>Drop-down List in Vue</p>

    <form @submit.prevent="registerAnswer3">
      <label class="labelFormInput2" for="cars">Choose a car:</label>

      <select v-model="carSelected" id="cars">
        <option disabled value="">Please select one</option>
        <option>Volvo</option>
        <option>Saab</option>
        <option>Opel</option>
        <option>Audi</option>
      </select>

      <br><br>
      <input class="submitBtnFormInput" type="submit" value="Submit">
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted3 }}</p>
    </div>
  </div>

  <p>When using &lt;select multiple&gt; in Vue, we need to connect the &lt;select&gt; tag with v-model, 
    and give values to the &lt;option&gt; tags:</p>

  <div id="wrapper">
    <p>Select Multiple in Vue:</p>
    <p>Depending on your operating system, use the 'ctrl' or the 'command' key to select multiple options:</p>

    <form @submit.prevent="registerAnswer4">
      <label class="labelFormInput3" for="cars2">Choose one or more cars:</label><br>

      <select class="selectFormInput" v-model="carsSelected2" id="cars2" multiple>
        <option>Volvo</option>
        <option>Saab</option>
        <option>Opel</option>
        <option>Audi</option>
        <option>Kia</option>
      </select>

      <button class="submitBtnFormInput2" type="submit">Submit</button>
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted4 }}</p>
    </div>
  </div>

  <p>Read Only Form Inputs:</p>

  <p>Using v-model on form inputs creates two-way binding, which means that if the Vue data instance changes, 
    the input value attribute also changes. For read-only form inputs, like &lt;input type="file"&gt;, the value
    attribute cannot be changed from the Vue data instance, and so we cannot use v-model.</p>

  <p>For read-only form inputs, like &lt;input type="file"&gt;, we need to use @change to call a method 
    that updates the Vue data instance:</p>

  <div id="wrapper">
    <p>Input Type File (Read Only input):</p>

    <form @submit.prevent="registerAnswer5">
      <label>
        Choose a file: <input @change="updateVal" type="file">
      </label>

      <button class="submitBtnFormInput2" type="submit">Submit</button>
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted5 }}</p>
    </div>
  </div>

  <p>Other Form Inputs:</p>

  <p>With the form inputs mentioned in the last examples, we had to provide a value for the value attribute, 
    but with the form inputs mentioned below, the user provides the value:</p>

  <div id="wrapper">
    <ol>  
      <li>&lt;input type="color"&gt;</li>
      <li>&lt;input type="date"&gt;</li>
      <li>&lt;input type="datetime-local"&gt;</li>
      <li>&lt;input type="number"&gt;</li>
      <li>&lt;input type="password"&gt;</li>
      <li>&lt;input type="range"&gt;</li>
      <li>&lt;input type="search"&gt;</li>
      <li>&lt;input type="tel"&gt;</li>
      <li>&lt;input type="text"&gt;</li>
      <li>&lt;input type="time"&gt;</li>
      <li>&lt;textarea&gt;</li>
    </ol>
  </div>

  <p>Because the user already gives the value for these kinds of form inputs, all we need to do in Vue is to 
    connect the input to a data property with v-model:</p>
    
  <p>In this example, we use &lt;input type="range"&gt;</p>

  <div id="wrapper">
    <form @submit.prevent="registerAnswer6">
      <label>How tall are you?<br>
        <input v-model="heightInp" type="range" min="50" max="235"> {{ heightInp }} cm
      </label>

      <button class="submitBtnFormInput2" type="submit">Submit</button>
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted6 }}</p>
    </div>
  </div>

  <p>In this example, we use &lt;input type="color"&gt;</p>

  <div id="wrapper">
    <form @submit.prevent="registerAnswer7">
      <label>Choose a color: 
        <input v-model="colorInp" type="color">
      </label>

      <button class="submitBtnFormInput2" type="submit">Submit</button>
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted7 }}</p>
    </div>
  </div>

  <p>In this example, we use &lt;textarea&gt;</p>

  <div id="wrapper">
    <form @submit.prevent="registerAnswer8">
      <label>
        <p>What do you think about our product?</p> 
        <textarea v-model="txtInp" placeholder="Write something.." rows="5" cols="50"></textarea>
      </label>

      <button class="submitBtnFormInput3" type="submit">Submit</button>
    </form>

    <div>
      <p>Submitted answer:</p>
      <p id="pAnswerFormInput">{{ inpValSubmitted8 }}</p>
    </div>
  </div>

  <!-- 
    ================================================================================
  -->

  <br><br><hr><br><h2>Vue Animations</h2>

</template>

<style>

  p {
    font-size: 17px;
  }

  h2 {
    font-size: 30px;
    font-weight: bolder;
  }

  h1.mainHeader {
    margin-left: 30%;
  }

  #app > div {
    border: solid black 1px;
    margin: 20px;
    padding: 20px;
    display: inline-block;
  }

  #wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 40%;
  }

  #wrapper > div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

  #wrapper > div:hover {
    cursor: pointer;
  }

  #warning {
    font-weight: bold ;
    color: rgb(144, 12, 12);
  }

  #error {
    font-weight: bold ;
    color: rgb(255, 0, 0);
  }

  ul {
    width: 150px;
    list-style-type: none;
    padding-left: 10px;
  }

  .globalCompOneDiv, .localCompOneDiv {
    background-color: lightgreen;
  }

  .globalCompTwoDiv {
    background-color: lightcoral;
  }

  p.slot {
    width: 60%;
  }

  #wrapper img {
    display: block; 
    margin: auto; 
    width: 60%;
  }

  footer > div {
    background-color: lightpink;
  }

  p.local-slot {
    background-color: lightgreen;
    padding: 10px;
    margin: 10;
  }

  label {
    display: inline-block;
    padding: 5px;
  }

  label:hover {
    cursor: pointer;
  }

  #pResult {
    background-color: lightcoral;
    display: inline-block;
  }

  .divBtn {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    background-color: white;
    border: solid 2px #04AA6D;
    border-radius: 10px;
    font-family: Verdana,sans-serif;
    color: black;
    padding: 10px;
    margin: 10px;
  }

  .divBtn:hover {
    background-color: #04AA6D;
    color: white;
    cursor: pointer;
  }

  #divComp {
    border: dashed black 1px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    width: 450px;
  }

  .dynamicCompBtn {
    padding: 5px;
    margin: 10px;
  }

  a {
    display: inline-block;
    background-color: black;
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 10px;
  }

  a:hover,
  /* Vue router adds active router link class: router-link-active */
  a.router-link-active {
    background-color: rgb(110, 79, 13);
  }

  .submitBtnFormInput {
    margin: 10px;
  }

  .submitBtnFormInput2, .selectFormInput {
    margin: 10px;
    display: block;
  }

  .submitBtnFormInput3 {
    margin: 10px 0;
    display: block;
  }

  .selectFormInput {
    width: 100px;
    padding: 10px;
  }

  .labelFormInput {
    display: block;
    width: 80px;
    padding: 5px;
  }

  .labelFormInput2 {
    width: 90px;
    padding: 5px;
  }

  .labelFormInput3 {
    width: 180px;
    padding: 5px;
  }

  .labelFormInput:hover, .labelFormInput2:hover, .labelFormInput3:hover {
    cursor: pointer;
    background-color: rgb(211, 244, 211);
    border-radius: 5px;
  }

  #pAnswerFormInput {
    background-color: lightgreen;
    padding: 5px;
  }

</style>
