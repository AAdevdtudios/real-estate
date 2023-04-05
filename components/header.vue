<template>
  <!-- component -->
  <header>
    <nav class="bg-white fixed shadow-md z-10 w-full border-gray-200 px-4 py-2.5">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a href="#" class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="self-center ml-3 text-xl font-semibold whitespace-nowrap">Open-Home</span>
        </a>
        <div class="flex items-center lg:order-2">
          <a href="#"
            class="text-white bg-orange-400 hover:opacity-95 anim focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Book
            now</a>
          <button @click="()=>navValue = !navValue" data-collapse-toggle="mobile-menu-2" type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div :class="navValue ? '':'hidden'" class="justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <nuxtLink to="/"
                class="navLinks"
                aria-current="page">Home</nuxtLink>
            </li>
            <li>
              <nuxtLink to="/properties"
                class="navLinks">
                Properties</nuxtLink>
            </li>
            <li>
              <nuxtLink to="/about"
                class="navLinks">
                About</nuxtLink>
            </li>
            <li>
              <a href="/#contact-us"
                class="navLinks">Contact-us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  const navValue = ref<boolean>(false);
</script>