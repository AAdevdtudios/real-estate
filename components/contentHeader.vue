<template>
    <div class="flex justify-between pb-4 items-center">
        <div class="info-section">
            <span>{{headerDetail.name}}</span>
            <h3>{{headerDetail.secondary}}</h3>
        </div>
        <div class="flex gap-4">
            <div class="flex gap-2">
                <slot name="buttons-List"/>
            </div>
            <nuxtLink :to="url" class="flex items-center gap-1 btn-control anim">
                More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </nuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface IncomingData{
    name: string,
    secondary: string,
    url: string,
}
const headerDetail = defineProps<IncomingData>()

</script>

<style>

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
.btn-control{
  @apply border border-orange-400 px-1 md:px-3 md:py-2 rounded-lg hover:bg-orange-400 hover:text-white disabled:border-gray-600 disabled:hover:bg-gray-500 disabled:hover:text-white
}
</style>