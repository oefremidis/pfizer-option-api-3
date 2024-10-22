<template>

  <div class="container-app">
    <h2>Auto-Incremented Counter</h2>
    <p>Counter: {{ counter }}</p>

    <button @click="resetCounter">Reset Counter</button>
  </div>


</template>


<script>

import { onBeforeUnmount } from 'vue';

export default {

  data() {
    return {
      counter: 0,
      intervalId: null
    };
  },

  mounted(){
    this.intervalId = setInterval( () => this.counter++ , 1000);
    console.log(this.intervalId)
  }, 

  methods: {
    resetCounter() {
      this.counter = 0;
    }
  },

  beforeUnmount(){
    // clear and stop the interval to avoid memory leak
    clearInterval( this.intervalId);
  }
}

</script>


<style scoped>
.container-app {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #36805c;
}
</style>