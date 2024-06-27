<template>
    <div class="h-screen w-full bg-cover bg-no-repeat bg-center" style="background-image: url('home-slider-bg.webp');">
        <div class="container mx-auto relative h-full">
            <div class="absolute top-1/2 w-1/4 -translate-y-[50%]">
                <h1 class="text-[#F0A323] text-[64px] dm-serif leading-none">Savory flavors of Korean & Chinese cuisine</h1>
                <p class="text-white my-4">Experience Korean x Chinese Fusion</p>
                <a href="#" class="inline-block py-3 px-6 border border-red-500 font-bold text-white">See Our Menu</a>
            </div>
            <div class="w-full">
                <client-only>
                    <carousel
                        class="home-slider" 
                        items="1" 
                        :loop="true" 
                        autoplaySpeed="1000" 
                        :autoplay="true" 
                        :autoHeight="true" 
                        @dragged="handleCarouselUpdated"
                        @initialized="onInitialized"
                    >
                        <div class="w-screen h-screen static" v-for="(item, k) in slider_images" :key="`slider-item-${k}`">
                            <div class="item absolute right-20 top-1/2 -translate-y-[50%]">
                                <div class="relative w-full h-full">
                                    <img :src="getImagePath(item.img)" class="w-full" style="width:800px">
                                    <div :class="`slider-info absolute text-white z-10 h-[88px] bg-[#530F10] py-2 px-6`" :style="`right: ${item.right}%; top: ${item.top}%`">
                                        <p class="dm-serif">{{ item.name }}</p>
                                        <p>{{ item.korean }}</p>
                                        <p class="dm-serif text-[#F0A323]">{{ item.price }}</p>
                                        <svg class="absolute top-[88px]" width="131" height="32" viewBox="0 0 131 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 32L27.7584 0H131L0 32Z" fill="url(#paint0_linear_6192_4237)"/>
                                            <defs>
                                                <linearGradient id="paint0_linear_6192_4237" x1="0" y1="16" x2="69.5102" y2="16" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#530F10"/>
                                                    <stop offset="1" stop-color="#300000"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </carousel>
                </client-only>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slider_images: [
                {
                    img: 'img1.webp',
                    name: 'Cheongpa Pork',
                    korean: '청파 돼지고기',
                    price: '₱1,200',
                    right: 5,
                    top: 45
                },
                {
                    img: 'img2.webp',
                    name: 'Dol Pan Jajjang',
                    korean: '청파 소고기',
                    price: '₱1,200',
                    right: 5,
                    top: 35
                },
                {
                    img: 'img3.webp',
                    name: 'Jjamppong Jeongol',
                    korean: '청파 소고기',
                    price: '₱1,100',
                    right: 5,
                    top: 23
                }
            ]
        }
    },
    methods: {
        handleCarouselUpdated($event) {
            console.log($event)
        },
        onInitialized(event) {
            console.log('Owl Carousel initialized', event);
        },
        getImagePath(image) {
            return require(`~/static/slider/${image}`);
        }
    }
}
</script>