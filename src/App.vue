<template>
  <div id="divApp">
      <list-component></list-component>
      <big-box-component></big-box-component>
      <reset-buttons></reset-buttons>
  </div>
  
</template>

<script>

import ListComponent from './ListComponent.vue'
import ResetButtons from './ResetButtons.vue'
import BigBoxComponent from './BigBoxComponent.vue';

export default {
  name: 'app',
  data () {
  
  },

  methods: {

  },

  components: {
    "list-component": ListComponent,
    "big-box-component": BigBoxComponent,
    "reset-buttons": ResetButtons
  }
}
</script>

<style>
  #divApp {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
    width: 1300px;
    height: 800px;
    margin: 0 auto;
  }

</style>
