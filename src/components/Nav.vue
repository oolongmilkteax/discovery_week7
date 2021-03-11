<template>
  <div>
    <ul>
      <li><b> <router-link to="/" exact>Home</router-link> </b></li>
      <li><b> <router-link to="/orders" exact>Orders</router-link> </b></li>
      <li><b> <router-link to="/dashboard" exact>Dashboard</router-link> </b></li>
    </ul>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
ul {
  display: flex;
  list-style-type: none;
  padding: 1px;
  font-family: fantasy;
}
li{
  flex-basis: 300px;
  flex-grow: 1;
  text-align: center;
  margin: 7px;
  background: pink;
  font-size: 20px;
}
</style>