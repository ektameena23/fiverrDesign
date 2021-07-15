<template>
  <div class="card">
    <div class="card-options">
      <i class="fas fa-ellipsis-h pointer" @click="ishidden = !ishidden"></i>
      <div class="dropdown" :class="{ 'd-none': ishidden }">
        <ul>
          <li @click="ishidden = !ishidden">
            <i class="fas fa-trash-alt"></i> Delete
          </li>
        </ul>
      </div>
    </div>
    <div class="card-main">
      <div class="card-img">
        <img src="@/assets/imgs/images.jpeg" alt="" />
      </div>
      <div class="card-details">
        <div class="card-details-status"><div>IN PROGRESS</div></div>
        <div class="card-details-due">
          <i class="far fa-clock"></i> Due in 2 days, 5hrs
        </div>
        <div>
          <span class="card-details-time">5 hrs</span>
          <span class="mx-3"> | </span>
          <span class="card-details-price">$155</span>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div style="flex-grow: 8">View Order</div>
      <div class="card-footer-chat">
        <i class="far fa-comment"></i>
        <div class="card-footer-chat-active"></div>
      </div>
      <div class="card-footer-img">
        <img src="@/assets/imgs/images.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  ishidden = true;
}
</script>
