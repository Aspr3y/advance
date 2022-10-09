<template>
  <div class="uk-section uk-section-default">
    <div class="uk-container">

      <h3>Section Default</h3>

      <div class="uk-margin">
        <form class="uk-search uk-search-default">
          <span class="uk-search-icon-flip" uk-search-icon></span>
          <input class="uk-search-input" type="search" placeholder="Search">
        </form>
      </div>

      <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
        <div>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="../assets/lan_img.jpeg" width="500" height="100" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Landscaping</h3>
                <p> Price</p>
              </div>
              <div>
                <p uk-margin>
                  <a class="uk-button uk-button-default" href="">Book Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="../assets/water_img.jpeg" width="500" height="50" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">Watering</h3>
                <p>Price</p>
              </div>
              <div>
                <p uk-margin>
                  <a class="uk-button uk-button-default" href="">Book Now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-default">
            <div class="uk-card-media-top">
              <img src="../assets/lawn_img.jpeg" width="500" height="100" alt="">
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title">Lawncare</h3>
              <p>Price</p>
            </div>
            <div>
              <p uk-margin>
                <a class="uk-button uk-button-default" href="">Book Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>








</template>

<script>
export default {
  name: "servicelist"
}
</script>

<style scoped>

</style>