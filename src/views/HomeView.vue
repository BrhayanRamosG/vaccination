<template>
  <div class="grid gap-4 lg:grid-cols-2 sm:grid-cols-1 lg:grid-rows-1">
    <div>
      <h1 class="text-3xl font-bold">Fight Virus With Vaccines</h1>
      <p>
        Let’s stop this pandemic by killing the virus with a vaccine, don’t let
        yourself and your family get infected
      </p>

      <div class="flex flex-row justify-start gap-10 pt-10 py-5">
        <div class="flex flex-row justify-start gap-4">
          <div>
            <ShieldCheckIcon class="h-5 w-5 text-yellow-300 bg-yellow-100" />
          </div>
          <div>
            <p>Best protection</p>
          </div>
        </div>
        <div>
          <div class="flex flex-row justify-start gap-4">
            <div>
              <StarIcon class="h-5 w-5 text-yellow-300 bg-yellow-100" />
            </div>
            <div>
              <p>Selected Vaccines</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-start gap-10 pt-10 py-5">
        <div class="flex flex-row justify-start gap-4">
          <div>
            <ClockIcon class="h-5 w-5 text-indigo-700 bg-indigo-100" />
          </div>
          <div>
            <p>Schedule your vaccinations</p>
          </div>
        </div>
      </div>

      <div
        class="
          shadow-lg
          lg:absolute
          px-2
          py-2
          grid
          gap-4
          lg:grid-cols-4
          sm:grid-cols-1
          lg:grid-rows-2
          bg-white
          opacity-90
        "
      >
        <div class="flex flex-row pt-2">
          <div>
            <LocationMarkerIcon
              class="h-5 w-5 mr-3 text-indigo-700 bg-indigo-100"
            />
          </div>
          <div>
            <span>Location</span>
            <br />
            <span class="font-bold">Jakarta Utara</span>
          </div>
        </div>

        <div class="flex flex-row pt-2">
          <div>
            <CalendarIcon class="h-5 w-5 mr-3 text-indigo-700 bg-indigo-100" />
          </div>
          <div>
            <span>Date</span>
            <br />
            <span class="font-bold">08 July 2021</span>
          </div>
        </div>

        <div class="flex flex-row pt-2">
          <div>
            <ClockIcon class="h-5 w-5 mr-3 text-indigo-700 bg-indigo-100" />
          </div>
          <div>
            <span>Vaccine Type</span>
            <br />
            <span class="font-bold">Moderna</span>
          </div>
        </div>

        <div class="flex items-center flex-row row-span-2">
          <div class="px-5 py-5">
            <button
              class="
                px-10
                bg-indigo-500
                h-14
                w-full
                text-white
                rounded-md
                text-lg
                font-bold
                hover:bg-indigo-700 hover:text-white
              "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <img class="object-contain" :src="photo1" alt="Imagen aqui" />
      <a href="https://www.freepik.com/photos/man-with-mask"
        >Man with mask photo created by mdjaff - www.freepik.com</a
      >
    </div>
  </div>

  <div class="grid lg:grid-cols-1 sm:grid-cols-1 lg:grid-rows-1 pt-14">
    <div>
      <h1 class="text-3xl font-bold">Why should I vaccine?</h1>
      <p class="text-lg">
        In order to avoid any doubts about getting the COVID-19 vaccine,
        identify the following 4 benefits of COVID-19 vaccination:
      </p>
      <CardVaccine />
    </div>
  </div>

  <div class="grid lg:grid-cols-2 sm:grid-cols-1 lg:grid-rows-1 pt-14">
    <div>
      <img class="object-contain" :src="photo2" alt="Imagen aqui" />
    </div>
    <div class="py-5 px-5">
      <h1 class="text-3xl font-bold">Preparations Before Vaccine</h1>
      <p class="text-lg mb-10">
        The success of vaccines is strongly influenced by the strength of the
        body’s immune system. Therefore, there are several things that can be
        tried to make the COVID-19 vaccine work:
      </p>
      <Accordion />
    </div>
  </div>
  <div class="grid lg:grid-cols-2 sm:grid-cols-1 lg:grid-rows-1 pt-14">
    <div>
      <h1 class="text-3xl font-bold">Emergency Contact</h1>
      <p class="text-lg">
        Contact one of the contacts below if you or your family feel unwell and
        have similar symptoms such as Covid-19, make sure you also take care of
        yourself before reporting to us:
      </p>
      <EmergencyContact />
    </div>
    <div>
      <img class="object-contain" :src="photo3" alt="Imagen aqui" />
    </div>
  </div>
</template>

<script>
import {
  StarIcon,
  ShieldCheckIcon,
  ClockIcon,
  LocationMarkerIcon,
  PencilIcon,
  CalendarIcon,
} from "@heroicons/vue/solid";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.png";
import photo3 from "../assets/images/photo3.png";
import CardVaccine from "@/components/CardVaccine.vue";
import EmergencyContact from "@/components/EmergencyContact.vue";
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    StarIcon,
    ShieldCheckIcon,
    ClockIcon,
    CardVaccine,
    EmergencyContact,
    LocationMarkerIcon,
    PencilIcon,
    CalendarIcon,
    Accordion,
  },
  setup() {
    document.title = "Home | Vaccination";
    return { photo1, photo2, photo3 };
  },
};
</script>
