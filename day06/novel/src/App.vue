<template>
  <div id="app">
    <div id="nav">
      <router-link to="/1">玄幻小说</router-link> |
      <router-link to="/2">修真小说</router-link> |
      <router-link to="/3">都市小说</router-link> |
      <router-link to="/4">穿越小说</router-link> |
      <router-link to="/5">网游小说</router-link> |
      <router-link to="/6">科幻小说</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
