<template>
  <div>
    <h2>User Registration Form</h2>

    <form>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name">
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email">
      </div>

      <button type="submit">Register</button>

    </form>

    <div v-if="submitted">
      <h2>Registration Completed...</h2>
      {{ formData.name }}, {{ formData.email }}
    </div>



  </div>

</template>


<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      },
      submitted: false
    };
  }
}


</script>


<style scoped></style>