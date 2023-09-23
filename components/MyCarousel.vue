<template>
    <Carousel :items-to-show="1.5">

        <Slide v-for="slide in slides" :key="slide.src" class="carousel__item">
            <figure>
                <img :src="slide.src" :alt="slide.alt" >
                <figcaption v-if="slide.cap">{{ slide.cap }}</figcaption>
            </figure>         
        </Slide>

        <template #addons>
            <Navigation />
        </template>

    </Carousel>
    
</template>

<script setup>

const props = defineProps({
    slides: Array
})

</script>

<style scoped>
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

</style>