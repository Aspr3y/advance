<template>
  <div>
    <servicelist></servicelist>
    <servicelist2></servicelist2>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
import servicelist from "@/components/servicelist";
import Servicelist2 from "@/components/Servicelist2";

export default {
  name: "Services",
  components: {
    Servicelist2,
    HelloWorld,
    servicelist,

  }
}
</script>

<style scoped>

</style>