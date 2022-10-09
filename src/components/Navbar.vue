<template>
  <nav class="uk-navbar-container" uk-navbar uk-sticky>
    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav navBg">
        <li class="uk-active"><router-link to="/">Home</router-link></li>
        <li class="uk-active"><router-link to="/Services">Services</router-link></li>
        <li class="uk-active"><router-link to="/Booking">Booking</router-link></li>
        <li class="uk-active"><router-link to="/About">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
   nav{background-color:lightblue;}
  .navBg li{ font-size: 18px;}
</style>