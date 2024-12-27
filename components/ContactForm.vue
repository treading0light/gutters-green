<template>
  <div class="relative isolate bg-gray-900">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
            <svg class="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
              <defs>
                <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="100%" y="-1" class="overflow-visible fill-gray-800/20">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
            </svg>
            <div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true">
              <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)" />
            </div>
          </div>
          <h2 class="text-3xl font-bold tracking-tight text-white">Reach Out for Custom-Crafted Gutters</h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">Every home is unique, and so should be its gutters. We take pride in crafting new gutters on-site, ensuring a flawless fit for your home. If you're considering a seamless upgrade or have any questions, reach out directly or use the form to send me a message. Let's start your journey towards impeccable gutters with a free quote.</p>
          <dl class="mt-10 space-y-4 text-base leading-7 text-gray-300">
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Address</span>
                <BuildingOffice2Icon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>Main Office<br />Federal Way, Wa. 98023</dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Telephone</span>
                <PhoneIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-white" href="tel:+1 (555) 234-5678">+1 253-448-3921</a></dd>
            </div>
            <div class="flex gap-x-4">
              <dt class="flex-none">
                <span class="sr-only">Email</span>
                <EnvelopeIcon class="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd><a class="hover:text-white" href="mailto:hello@example.com">TonyGreen@TheGuttersGreen.com</a></dd>
            </div>
          </dl>
        </div>
      </div>
      <form @submit.prevent="sendEmail" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="name" class="block text-sm font-semibold leading-6 text-white">Name</label>
              <div class="mt-2.5">
                <input type="text" v-model="name" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
            </div>
            <div class="sm:col-span-2">

              <label for="lastName" tabindex="-1" class="hidden text-sm font-semibold leading-6 text-white">Email</label>
              <div class="mt-2.5">
                <input type="text" v-model="lastName" name="lastName" id="lastName" autocomplete="off" class="hidden w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>

              <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
              <div class="mt-2.5">
                <input type="email" v-model="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Phone number</label>
              <div class="mt-2.5">
                <input type="tel" v-model="phoneNumber" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
              <div class="mt-2.5">
                <textarea name="message" v-model="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button ref="submitButton" type="submit" class="rounded-md bg-[#09860f] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#193b1b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#193b1b]">Send message</button>
          </div>
        </div>
      </form>
    </div>

    <SuccessModal :dialog="['Email Sent!', 'A gutter expert will contact you shortly. Feel free to explore the rest of the website!']" 
    :buttonText="'Home'"
    :open="modal" />
  </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';

const name = ref('');
const lastName = ref('')
const email = ref('');
const message = ref('');
const phoneNumber = ref('');

const modal = ref(false)
const submitButton = ref(false)

const sendEmail = async () => {
  submitButton.value.setAttribute("disabled", '')

  const payload = {
    name: name.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value,
    phone: phoneNumber.value
  };

  try {
    const {data} = await useFetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    console.log(data.value.statusCode)

    if (data.value.statusCode == 200) {
      console.log(data.value.message);
      modal.value = true
      console.log(modal.value)
    } else if (data.value.statusCode == 500){
      console.log('Server error: ', data.value.message)
    }
  } catch (error) {
    console.error('Could not send email:', error);
  }
};
</script>