<template>
  <div>
    <h1>Bienvenue sur mon site !</h1>
    <div class="row">
      <div class="col-sm-4">
        <Card title="Mountain Bike" content="Mes plus belles ballades" image="mountain_bike.jpg" href="/posts/bike"/>
      </div>

      <div class="col-sm-4">
        <Card title="Tango" content="Photos de tango" image="tango.jpg" href="/posts/tango"/>
      </div>

      <div class="col-sm-4">
        <Card title="Mountain" content="Mes photos de montagnes" image="mountain.jpg" href="/posts/mountain"/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  components: {
    Card
  }
}
</script>

<style scoped>

</style>