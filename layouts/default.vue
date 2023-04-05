<template>
  <div class="bd">
    <Header/>
    <NuxtPage />
    <Footer/>
  </div>
</template>

<style>
html{
    @apply scroll-smooth
}
.test{
    @apply h-[30rem] w-[10rem] bg-black absolute bottom-[2rem] left-0 z-10
}
.flex-items{
    @apply flex
}
.anim{
    @apply transition-all delay-150 ease-in-out
}
.navLinks{
    @apply block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 lg:hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-400 lg:p-0
}
.router-link-active{
    @apply text-white lg:text-orange-400 bg-orange-400 lg:bg-white
}
.bd{
    @apply relative overflow-x-hidden;
}
.news-letter{
    @apply fixed -bottom-20 bg-white z-[11] left-0 right-0 w-full p-4 overflow-x-hidden md:-bottom-80 overflow-y-auto h-[calc(100%-1rem)] md:h-full
}
.news-letter .content{
    @apply relative w-full h-full max-w-2xl md:h-auto p-3 shadow-lg bg-white rounded-lg
}
.news-letter .header{
    @apply relative bg-white rounded-lg shadow dark:bg-gray-700
}
.header .head {
    @apply flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600
}
.news-letter .header h3{
    @apply text-xl font-semibold text-gray-900 dark:text-white
}
.news-letter .header button{
    @apply text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white
}
.hero {
    @apply bg-[url('/white-building.jpg')] bg-bottom h-fit bg-cover xl:-mt-20 w-full bg-no-repeat;
}
.hero-img{
    @apply absolute -z-10 xl:-top-36 right-0 opacity-90 ;
}
.hero-content{
    @apply flex flex-col py-[80px] lg:py-[140px] px-3 lg:px-10 bg-gray-500/30 backdrop-brightness-75;
}
.content-left{
    @apply flex flex-col
}
.content-left h1{
    @apply text-3xl md:text-7xl md:text-justify text-center text-white w-full lg:text-8xl font-black pb-10 capitalize
}
.btn{
    @apply bg-orange-400 py-3 px-10 rounded-md w-fit self-center md:self-start
}
.content-left ul{
    @apply flex pt-10 gap-6 text-white text-sm md:text-sm md:font-medium lg:font-semibold
}
.content-left ul li{
    @apply flex flex-col items-center text-center lg:items-start lg:text-start
}
.content-left ul li h4{
    @apply md:text-xl lg:text-3xl font-black
}
.search{
    @apply h-fit w-full py-10 col-span-2
}
.search .btn-list{
    @apply bg-white w-fit p-3 flex gap-10 rounded-t-md border-b-2
}
.btn-list button{
    @apply border-b-4 border-b-transparent
}
.btn-list .active{
    @apply border-orange-500 rounded anim
}
.input-items{
    @apply w-fit bg-white px-3 py-5 rounded-b-md min-h-fit grid grid-cols-8 items-center gap-3
}
.input-items .input-body {
    @apply relative col-span-6
}
.input-body .icon{
    @apply absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none
}
.input-body .search-input{
    @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
.searchBtn-list{
    @apply flex gap-3 items-center
}
.searchBtn-list .btn-ad{
    @apply flex hover:text-orange-500 text-center anim
}
.searchBtn-list .btn-search{
    @apply bg-black p-2 rounded-full hover:bg-orange-500 anim
}
.location-section{
    @apply py-10 px-8 h-fit;
}
.info-section h3{
    @apply font-bold text-xl
}
.info-section span{
    @apply text-orange-400
}
.dem{
    @apply w-full h-full flex justify-center items-center bg-gray-500/20 backdrop-brightness-75 hover:backdrop-brightness-100 anim cursor-pointer
}
.dem span{
    @apply text-lg font-black text-white
}
</style>
