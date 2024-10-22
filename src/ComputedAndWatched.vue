<template>

  <div>
    <h2>Movie Details</h2>

    <div>
      <label for="title">Movie Title: </label>
      <input type="text" id="title" v-model="movieTitle">
    </div>

    <div>
      <label for="rating">Movie Rating: </label>
      <input type="number" id="rating" min="0" max="10" v-model="movieRating">
    </div>

    <!-- {{ movieRating }} -->

    <!-- Computed Property -->
     <p>Movie Summary: {{ movieSummary }}</p>

      <p v-if="ratingChanged">You have changed the rating to {{ movieRating }}</p>

  </div>


</template>



<script>
export default {

  data() {
    return {
      movieTitle: '',
      movieRating: 5,
      ratingChanged: false
    }
  },

  computed: {
    movieSummary(){
      return `${this.movieTitle} is rated ${this.movieRating}`
    }
  },

  watch: {
    // watcher for movie rating changes
    movieRating(newValue, oldValue){
      console.log(newValue, oldValue)
      this.ratingChanged = true;
      setTimeout(() => this.ratingChanged = false, 2000)
    }
  }

}

</script>



<style scoped></style>