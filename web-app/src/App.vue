<template>
  <v-app>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
      <RegisterUsers />
    </div>
  </v-app>
</template>

<script>
import RegisterUsers from "./components/RegisterUsers";

export default {
  name: "App",
  components: {
    RegisterUsers
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
