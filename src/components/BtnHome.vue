<template>
  <button>{{ msg }}</button>
</template>
<script>
export default {
  props: {
    msg: String,
  },
  setup(msg) {
    return { msg };
  },
};
</script>