<template>
  <div class="flex min-h-screen flex-col bg-grey font-Rubik">
    <SiteNav />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import SiteNav from "./components/SiteNav.vue";
</script>

<style lang="scss" scoped></style>
