<template>
    <div class="h-screen w-full bg-cover bg-no-repeat bg-center" style="background-image: url('home-slider-bg.webp');">
        <div class="container mx-auto relative h-full">
            <div class="absolute top-1/2 w-1/4 -translate-y-[50%]">
                <h1 class="text-[#F0A323] text-[64px] dm-serif leading-none">Savory flavors of Korean & Chinese cuisine</h1>
                <p class="text-white my-4">Experience Korean x Chinese Fusion</p>
                <a href="#" class="inline-block py-3 px-6 border border-red-500 font-bold text-white">See Our Menu</a>
            </div>
            <div class="w-full">
                <no-ssr>
                    <carousel class="home-slider" items="1" :loop="true" autoplaySpeed="1000" :autoplay="true" :autoHeight="true" :nav="false">
                        <div class="w-screen h-screen static">
                            <img src="~/static/slider/img1.webp" class="absolute right-20 top-1/2 -translate-y-[50%]" style="width:800px">
                        </div>
                        <div class="w-screen h-screen static">
                            <img src="~/static/slider/img2.webp" class="absolute right-20 top-1/2 -translate-y-[50%]" style="width:800px">
                        </div>
                        <div class="w-screen h-screen static">
                            <img src="~/static/slider/img3.webp" class="absolute right-20 top-1/2 -translate-y-[50%]" style="width:800px">
                        </div>
                    </carousel>
                </no-ssr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slider_images: [
                '/static/slider/img1.png',
                '/static/slider/img2.png',
                '/static/slider/img3.png',
            ]
        }
    }
}
</script>