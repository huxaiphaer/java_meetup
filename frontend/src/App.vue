<template>
  <v-app>
    <div id="app">
      <Loader />
      <br />
      <br />
      <img alt="Vue logo" src="./assets/logo_k15t.png" />
      <RegisterUsers />
    </div>
  </v-app>
</template>

<script>
import RegisterUsers from "./components/RegisterUsers";
import Loader from "./components/Loader";

export default {
  name: "App",
  components: {
    Loader,
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
  width: 70%;
  margin: 20px auto;
}
</style>
