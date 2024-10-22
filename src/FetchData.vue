<template>

  <h2>User List</h2>
  <ul>
    <!-- <li v-for="(user, index) in users" :key="index"> -->
    <li v-for="user in users" :key="user.id">
      {{ user.last_name }}, {{ user.email }}
    </li>
  </ul>


</template>


<script>
export default {

  data() {
    return {
      users: []
    };
  },

  mounted() {
    this.fetchUsers();
  },

  methods: {
    async fetchUsers(){
      try {
        const response = await fetch('https://reqres.in/api/users')
        const usersData = await response.json()
        this.users = usersData.data
      } catch (err){
        console.log("Failed to fetch data")
      }
    }
  }

}

</script>


<style scoped></style>