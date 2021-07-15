<template>
  <section class="main-section">
    <div class="columns">
      <div class="card-container">
        <div class="card-container-heading">NEW ORDERS</div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div class="columns">
      <div class="card-container">
        <div class="card-container-heading">IN PROGRESS</div>
        <Card />
        <Card />
      </div>
    </div>
    <div class="columns">
      <div class="card-container">
        <div class="card-container-heading">WAITING FOR BUYER</div>
        <Card />
      </div>
    </div>
    <div class="columns">
      <div class="card-container">
        <div class="card-container-heading">COMPLETED</div>
        <Card />
        <Card />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
@Component({
  components: {
    Card,
  },
})
export default class Orders extends Vue {}
</script>
