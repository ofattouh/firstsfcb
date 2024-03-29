<script>
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
        ]
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
      }
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

</template>

<style>
 #app > div {
    border: solid black 1px;
    margin: 10px;
    padding: 10px;
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
</style>
