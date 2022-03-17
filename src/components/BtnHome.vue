<template>
  <button
    class="
      bg-indigo-600
      h-10
      w-full
      text-indigo-700
      rounded-lg
      text-lg
      font-bold
      hover:bg-indigo-600 hover:text-white
    "
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: String,
  },
  setup(text) {
    return { text };
  },
};
</script>