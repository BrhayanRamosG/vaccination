<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 sm:py-24 sm:px-1 lg:max-w-7xl lg:px-2"
    >
      <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-4 gap-x-6">
        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              pb-10
              grid grid-cols-1
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <AdjustmentsIcon
              class="bg-indigo-100 h-12 w-12 text-indigo-700 rounded-lg"
            />
            <br />
            <div>
              <h2 class="text-2xl font-bold">Minimize the spread of viruses</h2>
              <p>
                Vaccine has been proven effective to prevent someone from
                getting infected woth Coronavirus
              </p>
            </div>
          </div>
        </div>

        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              pb-10
              grid grid-cols-1
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <ShieldCheckIcon
              class="bg-indigo-100 h-12 w-12 text-indigo-700 rounded-lg"
            />
            <br />
            <div>
              <h2 class="text-2xl font-bold">Forming antibodies</h2>
              <p>
                COVID-19 vaccine proven to help shape antibody response for
                immune system
              </p>
            </div>
          </div>
        </div>

        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              pb-10
              grid grid-cols-1
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <UserGroupIcon
              class="bg-indigo-100 h-12 w-12 text-indigo-700 rounded-lg"
            />
            <br />
            <div>
              <h2 class="text-2xl font-bold">Protecting people nearby</h2>
              <p>
                The benefits of COVID-19 vaccination are the vaccine that we get
                can also help protect people around us
              </p>
            </div>
          </div>
        </div>

        <div class="shadow-md hover:shadow-2xl">
          <div
            class="
              px-5
              pb-10
              grid grid-cols-1
              w-full
              aspect-w-1 aspect-h-1
              overflow-hidden
              xl:aspect-w-7 xl:aspect-h-8
            "
          >
            <PresentationChartLineIcon
              class="bg-indigo-100 h-12 w-12 text-indigo-700 rounded-lg"
            />
            <br />
            <div>
              <h2 class="text-2xl font-bold">Creating group immunity</h2>
              <p>
                COVID-19 vaccination is also beneficial for creating group
                immunity or herd immunity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ShieldCheckIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  AdjustmentsIcon,
} from "@heroicons/vue/solid";

export default {
  components: { ShieldCheckIcon, UserGroupIcon, PresentationChartLineIcon, AdjustmentsIcon },
  setup() {
    return {};
  },
};
</script>