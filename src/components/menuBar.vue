<template>
<div>
  <div class="uk-position-relative navy">
    <img src="../assets/head_img.jpg" width="1800" height="1200" alt="">
    <div class="uk-position-top">
      <nav class="uk-navbar-container uk-navbar-transparent" uk-navbar>
        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li class="uk-active"><router-link to="/">Home</router-link></li>
            <li><router-link to="/Services">Services</router-link></li>
            <li><router-link to="/Booking">Booking</router-link></li>
            <li><router-link to="/About">About</router-link></li>
          </ul>
          <div>
          <a href="#" class="uk-icon-link uk-margin-small-left" uk-icon="user"></a>
          </div>
          </div>
      </nav>

      <div class="uk-section">
        <div class="uk-container">

          <h3></h3>

          <div class="uk-grid-match uk-child-width-1-2@m" uk-grid>
            <div>
              <p>Quality</p>
              <p>Landscaping </p>
              <p> Reliable</p>
              <p>Services</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "menuBar"
}
</script>

<style scoped>
.navy{


}
</style>