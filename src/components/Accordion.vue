<template>
  <div class="accordion" id="accordionExample">
    <div
      v-for="(item, index) in information"
      :key="item.title"
      class="accordion-item bg-white border border-gray-200"
    >
      <h2 class="accordion-header mb-0" :id="'heading' + index">
        <button
          class="
            accordion-button
            collapsed
            relative
            flex
            items-center
            w-full
            py-4
            px-5
            text-lg text-gray-800 text-left
            bg-white
            border-0
            rounded-none
            transition
            focus:outline-none
          "
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + index"
          :aria-expanded="item.open"
          :aria-controls="'collapse' + index"
        >
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + index"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const information = [
      {
        title: "Avoid alcoholic beverages",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam officiis nulla hic aliquam facilis laboriosam ea libero laborum voluptates! Neque id, cumque provident exercitationem saepe eos placeat eius dolorem.",
        open: "false",
      },
      {
        title: "Avoid stress",
        text: "Stress has a profound effect on immune work. Moreover, prolonged stress can increase cortisol production and oxidative stress in the body",
        open: "true",
      },
      {
        title: "Eat healthy food ",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam officiis nulla hic aliquam facilis laboriosam ea libero laborum voluptates! Neque id, cumque provident exercitationem saepe eos placeat eius dolorem.",
        open: "false",
      },
      {
        title: "Get enough sleep",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam officiis nulla hic aliquam facilis laboriosam ea libero laborum voluptates! Neque id, cumque provident exercitationem saepe eos placeat eius dolorem.",
        open: "false",
      },
      {
        title: "Exercise or physical activity",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam officiis nulla hic aliquam facilis laboriosam ea libero laborum voluptates! Neque id, cumque provident exercitationem saepe eos placeat eius dolorem.",
        open: "false",
      },
    ];
    return { information };
  },
};
</script>