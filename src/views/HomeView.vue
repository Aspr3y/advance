<template>
  <div class="home">
<menuBar></menuBar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import menuBar from "@/components/menuBar";
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    menuBar
  }
}
</script>
