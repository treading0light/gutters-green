<template>
    <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Commitment to Excellence</h2>
        <p class="mt-6 text-lg leading-8 text-gray-700">At The Gutters Green, we pride ourselves on not just meeting but exceeding expectations. Our values guide every decision we make, ensuring that every project is a reflection of our dedication to craftsmanship, quality, and our customers.</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-green-800">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-700">
              <p class="flex-auto">{{ feature.description }}</p>
              <p class="mt-6">
                <a :href="feature.href" class="text-sm font-semibold leading-6 text-green-800">Learn more <span aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { InboxIcon, TrashIcon, UsersIcon, BriefcaseIcon, UserGroupIcon, StarIcon } from '@heroicons/vue/24/outline'

const features = [
    {
        name: 'Professional',
        description:
        'From the initial consultation to the final installation, our commitment is to maintain the highest standards of professionalism. Our dedicated team ensures every project is executed with precision.',
        href: '#',
        icon: BriefcaseIcon,
    },
    {
        name: 'High Quality',
        description:
        'Quality is at the heart of what we do. We use the best materials and curated techniques to deliver gutters that not only look great but stand the test of time.',
        href: '#',
        icon: StarIcon,
    },
    {
        name: 'Customer-Centric',
        description:
        'Our customers are our top priority. From initial consultation to project completion, we ensure seamless communication, transparency, and tailor our services to meet each customer’s unique needs.',
        href: '#',
        icon: UserGroupIcon,
    },
]
</script>