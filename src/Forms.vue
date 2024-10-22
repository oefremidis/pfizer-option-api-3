<!-- npm install @vuelidate/core, @vuelidate/validators -->

<template>
  <div>
    <h2>User Registration Form</h2>

    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" @input="v$.formData.name.$touch()">
        <p v-if="v$.formData.name.$error">Name is required</p>
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" @input="v$.formData.name.$touch()">
        <p v-if="v$.formData.email.$error">Please enter a valid email</p>
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
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';


export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      },
      submitted: false
    };
  },

  validations() {
    return {
      formData: {
        name: { required },
        email: { required, email }
      }
    }
  },

  setup() {
    const v$ = useVuelidate();
    return {
      v$
    };
  },

  methods: {
    submitForm() {
      this.v$.$touch()
      // submit form if it is valid
      if (!this.v$.invalid) {
        this.submitted = true;
      }
    }

  }

}

</script>


<style scoped></style>