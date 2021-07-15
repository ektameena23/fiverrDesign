<template>
  <nav>
    <div class="nav">
      <div class="brand-logo">fiverr</div>
      <div class="nav-options">
        <router-link class="nav-option" to="/dashboard">
          <div>Dashboard</div>
        </router-link>
        <router-link class="nav-option" to="/messages">
          <div>Messages</div>
        </router-link>
        <router-link class="nav-option" to="/orders">
          <div>Orders</div>
        </router-link>
        <router-link class="nav-option" to="/gigs">
          <div>Gigs</div>
        </router-link>
        <router-link class="nav-option" to="/analytics">
          <div>Analytics</div>
        </router-link>
        <router-link class="nav-option" to="/earnings">
          <div>Earnings</div>
        </router-link>
      </div>
      <div class="user-logo">
        <img src="@/assets/imgs/mis.jpeg" alt="user Image" title="avatar" />
        <div class="user-logo-active"></div>
      </div>
      <div class="ham-btn" @click="ishidden = !ishidden">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="ham-menu" :class="{ 'd-none': ishidden }">
        <router-link to="/dashboard" class="nav-option">Dashboard</router-link>
        <router-link to="/messages" class="nav-option">Messages</router-link>
        <router-link to="/orders" class="nav-option">Orders</router-link>
        <router-link to="/gigs" class="nav-option">Gigs</router-link>
        <router-link to="/analytics" class="nav-option">Analytics</router-link>
        <router-link to="/earnings" class="nav-option">Earnings</router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  ishidden = true;
}
</script>
