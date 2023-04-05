<template>
    <div>
        <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="news-letter">
                <div class="content">
                    <!-- Modal content -->
                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-2">
                        <img alt="Laptop"
                            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-full w-full rounded-xl object-cover" />
                        <div>
                            <h2 class="text-lg font-medium">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </h2>

                            <p class="mt-4 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                                eos. Inventore dolor delectus commodi laudantium adipisci, illum amet
                                itaque optio!
                            </p>

                            <div class="mt-6 sm:text-right">
                                <a href="#"
                                    class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                                    Find out more
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
const name:string = "Di";

enum Diamond {
    Gold,
    Wild = "",
}

interface User {
    name: string,
    date: string,
    length: number,
    stuff: Diamond
}

const val = reactive<User>({
    name: "",
    date: "",
    length: 1,
    stuff: Diamond.Wild
})

type datas = {
    string: ""
}

const somethings = reactive<User[]>([
    {
        name: "",
        date: "S",
        length: 2,
        stuff: Diamond.Wild
    }
])



// const settings: Record<string, any>= {
//     itemsToShow: 1,
//     snapAlign: 'center',
// };
// const breakpoints: Record<string, any> = {
//     // 700px and up
//     700: {
//         itemsToShow: 3.5,
//         snapAlign: 'center',
//     },
//     // 1024 and up
//     1024: {
//         itemsToShow: 5,
//         snapAlign: 'start',
//     }
// }

</script>