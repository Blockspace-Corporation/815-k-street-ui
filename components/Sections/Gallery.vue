<template>
    <BodyPaperField smallGutter>
        <div class="flex flex-col gap-2 items-center justify-center text-grey">
            <h1 class="text-2xl font-bold">Gallery</h1>
        </div>
        <br />
        <carousel items="1" :nav="false">
            <div
                v-for="(imgs, page_k) in perPage" :key="`gallery-page-${page_k}`"
                class="grid grid-cols-4 grid-flow-row auto-cols-fr gap-4"
            >
                <BodyGalleryThumb
                    v-for="(img, img_k) in imgs" :key="`gallery-img-${img_k}`" :img="img" 
                />
            </div>
        </carousel>
    </BodyPaperField>
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