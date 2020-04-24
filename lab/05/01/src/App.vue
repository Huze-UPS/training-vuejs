<template>
  <div id="app">
    <h1>Lab 05/01</h1>
    <h3><router-link to="/page-a">Go to Page A</router-link></h3>
    <h3><router-link to="/page-b">Go to Page B</router-link></h3>
    <h3><router-link to="/page-c">Go to Page C</router-link></h3>
    <h3><router-link to="/page-d">Go to Page D</router-link></h3>

    <router-view></router-view>
  </div>
</template>

<script>

export default {}

</script>