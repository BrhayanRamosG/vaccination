<template>
  <footer class="w-full">
    <div
      class="
        grid
        lg:gap-4 lg:grid-cols-2 lg:grid-rows-3 lg:h-60
        sm:grid-cols-1
        inset-x-0
        bg-indigo-100
        mx-auto
        sm:px-8
        px-4
        sm:py-8
        py-4
      "
    >
      <div class="mb-5">
        <RouterLink class="text-lg text-indigo-800 font-bold" to="/">
          Vaccination
        </RouterLink>
        <p>Our goal is to help the world free from the ongoing pandemic</p>
      </div>
      <div class="grid gap-3 grid-cols-3 grid-rows-1">
        <div>
          <h3 class="mb-4 font-bold">About</h3>
          <p class="mb-4"><a href="#">About us</a></p>
          <p class="mb-4"><a href="#">Features</a></p>
          <p class="mb-4"><a href="#">News & Blog</a></p>
        </div>
        <div>
          <h3 class="mb-4 font-bold">Company</h3>
          <p class="mb-4"><a href="#">How We Work?</a></p>
          <p class="mb-4"><a href="#">Capital</a></p>
          <p class="mb-4"><a href="#">Security</a></p>
        </div>
        <div>
          <h3 class="mb-4 font-bold">Support</h3>
          <p class="mb-4"><a href="#">FAQs</a></p>
          <p class="mb-4"><a href="#">Support Center</a></p>
          <p class="mb-4"><a href="#">Contac Us</a></p>
        </div>
      </div>

      <div></div>
      <div></div>
      <div class="sm:py-10 py-2">
        <p>@{{ year }} Vaccination. All rights reserved</p>
      </div>
      <div class="grid grid-cols-2 grid-rows-1 sm:py-10 py-2">
        <div class="text-center"><a href="#">Terms & Agreement</a></div>
        <div class="text-center"><a href="#">Privacy Policy</a></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const year = new Date().getFullYear();
    return { year };
  },
};
</script>