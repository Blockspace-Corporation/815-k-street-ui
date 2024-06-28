<template>
    <div class="container mx-auto px-4 py-20">
        <div class="text-center text-white pb-20">
            <p class="uppercase">Gallery</p>
            <h3 class="mt-2 dm-serif text-[#F0A323] leading-none text-2xl lg:text-[64px]">Discover our Popular Dishes</h3>
            <div class="mt-20 flex gap-1">
                <img src="~/static/gallery/gallery.webp" alt="" class="w-9/12 object-cover">
                <img src="~/static/gallery/gallery-1.webp" alt="" class="w-3/12 object-cover">
            </div>
            <div class="mt-1 flex gap-1">
                <img src="~/static/gallery/gallery-2.webp" alt="" class="w-3/12 object-cover">
                <img src="~/static/gallery/gallery-3.webp" alt="" class="w-3/12 object-cover">
                <img src="~/static/gallery/gallery-4.webp" alt="" class="w-6/12 object-cover">
            </div>
            <div class="mt-20 flex gap-1">
                <img src="~/static/gallery/gallery-2-1.webp" alt="" class="w-[20%] object-cover">
                <img src="~/static/gallery/gallery-2-2.webp" alt="" class="w-[20%] object-cover">
                <img src="~/static/gallery/gallery-2-3.webp" alt="" class="w-[20%] object-cover">
                <img src="~/static/gallery/gallery-2-4.webp" alt="" class="w-[20%] object-cover">
                <img src="~/static/gallery/gallery-2-5.webp" alt="" class="w-[20%] object-cover">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            photos: [
                'images/gallery-1.png',
                'images/gallery-2.png',
                'images/gallery-3.png',
                'images/gallery-4.png',
                'images/gallery-5.png',
                'images/gallery-6.png',
                'images/gallery-7.png',
                'images/gallery-8.png',
                'images/gallery-1.png',
                'images/gallery-2.png',
                'images/gallery-3.png',
                'images/gallery-4.png',
            ]
        }
    },
    computed: {
        perPage() {
            let perpage = [];
            let counter = 0;
            let page = 0;

            this.photos.forEach(photo => {
                if (counter > 7) {
                    page++;
                    counter = 0
                }
                if (!perpage[page]?.length) {
                    perpage[page] = [];
                }
                perpage[page][counter] = photo
                counter++;
            });

            // add more allowance to the last page
            let perpage_length = perpage.length
            if ((perpage.length > 0) && (perpage[perpage_length - 1].length < 8)) {
                const allowance_needed = 8 - perpage[perpage_length - 1].length;

                for (let index = 0; index < allowance_needed; index++) {
                    perpage[perpage_length - 1].push('empty');
                }
            }


            return perpage
        }
    }
}
</script>