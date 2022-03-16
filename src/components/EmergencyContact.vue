<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6">
        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              grid grid-cols-2 grid-rows-2
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <div>
              <PhoneOutgoingIcon
                class="bg-indigo-100 h-12 w-12 text-indigo-700 rounded-lg"
              />
            </div>
            <div>
              <h2 class="text-lg font-bold">Call</h2>
              <p>021.123.145.14</p>
            </div>
          </div>
          <div class="px-5 pb-10">
            <button
              class="
                bg-indigo-100
                h-10
                w-full
                text-indigo-700
                rounded-lg
                text-lg
                font-bold
                hover:bg-indigo-600 hover:text-white
              "
            >
              Call Now
            </button>
          </div>
        </div>

        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              grid grid-cols-2 grid-rows-2
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <div>
              <ChatIcon
                class="bg-indigo-100 h-12 w-12 text-indigo-700 rounded-lg"
              />
            </div>
            <div>
              <h2 class="text-lg font-bold">Chat</h2>
              <p>021.123.145.14</p>
            </div>
          </div>
          <div class="px-5 pb-10">
            <button
              class="
                bg-indigo-100
                h-10
                w-full
                text-indigo-700
                rounded-lg
                text-lg
                font-bold
                hover:bg-indigo-600 hover:text-white
              "
            >
              Chat Now
            </button>
          </div>
        </div>

        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              grid grid-cols-2 grid-rows-2
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <div>
              <VideoCameraIcon
                class="
                  bg-indigo-100
                  h-12
                  w-12
                  text-indigo-700
                  rounded-lg
                  text-lg
                  font-bold
                "
              />
            </div>
            <div>
              <h2 class="text-lg font-bold">Video Call</h2>
              <p>021.123.145.14</p>
            </div>
          </div>
          <div class="px-5 pb-10">
            <button
              class="
                bg-indigo-100
                h-10
                w-full
                text-indigo-700
                rounded-lg
                text-lg
                font-bold
                hover:bg-indigo-600 hover:text-white
              "
            >
              Video Call Now
            </button>
          </div>
        </div>

        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              grid grid-cols-2 grid-rows-2
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <div>
              <InboxInIcon
                class="bg-indigo-100 h-12 w-12 text-indigo-700 rounded-lg"
              />
            </div>
            <div>
              <h2 class="text-lg font-bold">Message</h2>
              <p>021.123.145.14</p>
            </div>
          </div>
          <div class="px-5 pb-10">
            <button
              class="
                bg-indigo-100
                h-10
                w-full
                text-indigo-700
                rounded-lg
                text-lg
                font-bold
                hover:bg-indigo-600 hover:text-white
              "
            >
              Message Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PhoneOutgoingIcon,
  ChatIcon,
  VideoCameraIcon,
  InboxInIcon,
} from "@heroicons/vue/solid";

export default {
  components: { PhoneOutgoingIcon, ChatIcon, VideoCameraIcon, InboxInIcon },
  setup() {
    return {};
  },
};
</script>