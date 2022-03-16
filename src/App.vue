<script setup>
import NavBar from "@/components/NavBar.vue";
import LandingPage from "@/layout/LandingPage.vue";
import FooterPage from "@/components/FooterPage.vue";
</script>

<template>
  <header class="sticky top-0 z-50">
    <NavBar />
  </header>
  <main class="w-full min-h-screen">
    <LandingPage />
  </main>
  <FooterPage />
</template>
