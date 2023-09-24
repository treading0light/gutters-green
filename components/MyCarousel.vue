<template>
    <Carousel :items-to-show="1.75">

        <Slide v-for="slide in slides" :key="slide.src" class="carousel__item">
            <figure>
                <img :src="slide.src" :alt="slide.alt" rel="preload" >
                <figcaption v-if="slide.cap">{{ slide.cap }}</figcaption>
            </figure>         
        </Slide>

        <template #addons>
            <Navigation class="bg-white" />
        </template>

    </Carousel>
    
</template>

<script setup>

const props = defineProps({
    slides: Array
})

</script>

<style>
.carousel__slide {
  padding: 5px;
}
.carousel__item {
  min-height: 200px;
  width: 25%;
  font-size: 20px;
  border-radius: 8px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.carousel__icon {
    border-radius: 100%;
  background-color: white;
}

</style>