<template>
  <Disclosure
    as="nav"
    class="
      backdrop-filter backdrop-blur-lg
      border-b border-gray-200
      bg-white bg-opacity-40
    "
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
          >
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-end
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <RouterLink class="text-indigo-700 font-bold" to="/">
              Vaccination
            </RouterLink>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                @click="item.current = true"
                @focusout="item.current = false"
                class="
                  menu
                  text-gray-900
                  hover:bg-blue-600 hover:text-white
                  px-3
                  py-2
                  rounded
                  text-sm
                  font-medium
                "
              >
                {{ item.name }}
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style>
.menu.router-link-exact-active {
  background: linear-gradient(
    90deg,
    rgba(59, 91, 217, 1) 0%,
    rgba(39, 71, 197, 1) 100%
  );
  color: #fff;
  box-shadow: 1px 1px 5px 1px rgb(184, 183, 183);
}
</style>

<script>
import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    MenuIcon,
    XIcon,
  },
  setup() {
    const navigation = ref([
      { name: "Database", href: "/database", current: false },
      { name: "Education", href: "/education", current: false },
      { name: "News", href: "/news", current: false },
      { name: "Regulation", href: "/regulation", current: false },
      {
        name: "Hoax Buxter",
        href: "/hoax-buxter",
        current: false,
      },
    ]);

    return {
      navigation,
    };
  },
};
</script>