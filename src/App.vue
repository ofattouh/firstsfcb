<script>
  import LocalCompOne from './components/LocalCompOne.vue';

  export default {
    data() {
      return {
        foods: [
          { name: 'Apples',
            desc: 'Apples are a type of fruit that grow on trees.',
            favorite: true },
          { name: 'Pizza',
            desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
            favorite: false },
          { name: 'Rice',
            desc: 'Rice is a type of grain that people like to eat.',
            favorite: false },
          { name: 'Fish',
            desc: 'Fish is an animal that lives in water.',
            favorite: true },
          { name: 'Cake',
            desc: 'Cake is something sweet that tastes good.',
            favorite: false }
        ],
        newItem: '',
        items: ['Buy apples','Make pizza','Mow the lawn']
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
    }
  }
</script>

<template>
  <h1>Food</h1>

  <!-- 
    ================================================================================
  -->

  <h2>Component: FoodItem.vue</h2>

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

  <h2>Component: FoodItemVFor.vue</h2>

  <p>Components created with v-for based on an array.</p>
  <p>Food items are generated with v-for from the 'foods' array.</p>
  <p><mark>Without v-for <b>key</b> attribute this page will not work correctly!</mark></p>

  <button @click="showItems">Show Items</button><br><br>
  <button @click="removeItem">Remove Item</button>

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

  <!-- 
    ================================================================================
  -->

  <h2>Component: FoodItemEmit.vue</h2>

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

  <mark>The result is the same as what was done for child component: "FoodItem.vue", <b>EXCEPT 
    favorite status is now modified correctly where it should be inside parent component: "App.vue"
    where it lives</b> instead of inside child component: "FoodItemEmit.vue".</mark>

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

  <h2>Component: FoodItemFallthroughAttributes.vue</h2>

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

  <h2>Components: ScopedStylingCompOne.vue & GlobalStylingCompTwo.vue</h2>

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

  <h2>Global & Local Components: GlobalCompOne.vue, GlobalCompTwo.vue & LocalCompOne.vue</h2>

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

</template>

<style>
 #app > div {
    border: solid black 1px;
    margin: 20px;
    padding: 20px;
    display: inline-block;
  }

  #wrapper {
    display: flex;
    flex-wrap: wrap;
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
</style>
