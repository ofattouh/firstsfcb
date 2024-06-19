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
        newItem: '',
        items: ['Buy apples','Make pizza','Mow the lawn'],
        toggleValue: true,
        toggleValue2: true,
        toggleValue3: true,
        toggleValue4: true,
        toggleValue5: true,
        compNbr: 1,
        compName: 'dynamic-comp-one-persistent-include-exclude'
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
      }
    },
    components: {
      // eslint-disable-next-line vue/no-unused-components
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
      }
    }
  }
</script>

<template>
  <br><hr style="height:3px;border-width:0;background-color:lightblue"><br>
  <h1>Food App built with Vue.js 3.X</h1>
  <br><hr style="height:3px;border-width:0;background-color:lightblue">

  <!-- 
    ================================================================================
  -->

  <br><h2>Component: FoodItem.vue</h2>

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


</template>

<style>

  p {
    font-size: 17px;
  }

  h2 {
    font-size: 30px;
    font-weight: bolder;
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
    width: 30%;
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

</style>
