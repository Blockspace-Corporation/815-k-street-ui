<template>
    <a href="#" :class="`w-${width}/12 block relative group`">
        <img :src="img" class="object-cover w-full">
        <div class="absolute bg-[#0000007d] top-0 left-0 w-full h-full z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 ease-in-out duration-500 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            default: null
        },
        width: {
            type: String,
            default: 3
        },
    }
}
</script>
