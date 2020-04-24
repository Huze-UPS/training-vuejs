<template>
  <div>
    <h1>Page C</h1>
    <label for="id">Champs</label>
    <input id="id" v-model="message">
    <br/>
    <button @click='goToPageD'>Go to PageD</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        message: undefined,
      }
    },
    methods: {
      goToPageD: function() {
        this.$router.push({ path: 'page-d', params: { message: this.message}})
      }
    }
  };
</script>