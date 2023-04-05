<template>
    <div class="house-section">
        <ContentHeader name="Best House list" secondary="Find what suits you best" :item-number="carousel_num" url="/properties">
          <template #buttons-List>
            <button class="btn-control anim" :disabled="carousel_num == 0 ? true : false"
              @click="() => carousel_num == 0 ? carousel_num = 0 : --carousel_num">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button class="btn-control anim" :disabled="carousel_num == locationList.length - 1 ? true : false"
              @click="() => carousel_num == locationList.length - 1 ? carousel_num = 2 : ++carousel_num">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </button>
          </template>
        </ContentHeader>
        <Carousel v-model="carousel_num" :breakpoints="breakpoints">
            <Slide v-for="slide in locationList" :key="slide.keyVal">
                <ProductCard/>
            </Slide>
        </Carousel>
    </div>
</template>
<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const carousel_num = ref(0);

function next() {
    carousel_num.value += 1
}

interface LocationMap {
    name: string,
    image: string,
    keyVal: number
}

const locationList: LocationMap[] = [
    {
        name: "Lagos",
        image: "obinna-okerekeocha-fGd8paHzN98-unsplash.jpg",
        keyVal: 1
    },
    {
        name: "Ibadan",
        image: "babatunde-olajide-q4ZBGVzJskE-unsplash.jpg",
        keyVal: 2
    },
    {
        name: "Lekki",
        image: "nupo-deyon-daniel-9ySEZ-ugtJA-unsplash.jpg",
        keyVal: 3
    },
    {
        name: "Lagos",
        image: "obinna-okerekeocha-fGd8paHzN98-unsplash.jpg",
        keyVal: 1
    },
    {
        name: "Ibadan",
        image: "babatunde-olajide-q4ZBGVzJskE-unsplash.jpg",
        keyVal: 2
    },
    {
        name: "Lekki",
        image: "nupo-deyon-daniel-9ySEZ-ugtJA-unsplash.jpg",
        keyVal: 3
    },
]

const breakpoints: Record<string, any> = {
    // 700px and up
    700: {
        itemsToShow: 2,
        wrapAround: true,
    },
    // 1024 and up
    1024: {
        itemsToShow: 3.95,
        wrapAround: true,
    }
}
</script>

<style scoped>
.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
}

.house-section {
    @apply px-8
}
</style>