<template>
    <div class="hero">
        <!-- <img class="hero-img" src="~/assets/images/building.jpg" alt=""> -->
        <div class="hero-content">
            <div class="content-left">
                <h1>Find the perfect <br> place to Live <br> with your family</h1>
                <a href="/" class="btn">Get Started</a>
                <ul>
                    <li>
                        <h4>50+</h4>
                        <h6>Available properties</h6>
                    </li>
                    <li>
                        <h4>100+</h4>
                        <h6>Happy Customers</h6>
                    </li>
                    <li>
                        <h4>150+</h4>
                        <h6>Available properties</h6>
                    </li>
                </ul>
            </div>
            <div class="search">
                <ul class="btn-list">
                    <button  v-for="(btn, index) in searchItem" :key="index" :class="btn.active? 'active': ''" @click="changeVal(index)">{{btn.name}}</button>
                </ul>
                <form @submit.prevent="()=>searchBtn()">
                    <div class="flex lg:w-[50%] relative overflow-visible">
                        <div id="dropdown-search-city"
                            class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 anim"
                            v-show="btnShow"
                            style="position: absolute; inset: -16px auto auto 0px; margin: 0px; transform: translate(0px, 72px);"
                            data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                        </div>
                        <div class="relative w-full">
                            <input type="search" v-model="searchInput" id="location-search&quot;"
                                class="block p-4 w-full z-20 text-sm outline-none text-gray-900 bg-gray-50 rounded-b-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                placeholder="Search for city or address">
                            <button type="submit"
                                class="absolute top-0 right-0 p-4 text-sm font-medium text-white bg-orange-400 rounded-br-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { searchItem } from "@/control"

const rout = useRouter()

const searchVal = ref<string>();
const locationVal = ref<string>();
const searchInput = ref<string>();
const btnShow = ref<boolean>(false);

function changeVal(val:number){
    for (let index = 0; index < searchItem.length; index++) {
        if(searchItem[index].active){
            searchItem[index].active = false;
        }
        searchItem[val].active = true;
        searchVal.value = searchItem[val].name;
    }
}

function activeParams():string{
    for (let index = 0; index < searchItem.length; index++) {
        if (searchItem[index].active) {
            return searchItem[index].name;
        }
    }
}

function searchBtn(){
    rout.push({
        path: '/properties',
        query: {
            search: searchInput.value,
            searchType: activeParams(),
        }
    })
}
</script>