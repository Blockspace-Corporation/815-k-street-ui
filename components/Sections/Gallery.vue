<template>
    <div class="container mx-auto px-4 py-20">
        <div class="text-center text-white pb-20">
            <p class="uppercase">Gallery</p>
            <h3 class="mt-2 dm-serif text-[#F0A323] leading-none text-2xl lg:text-[64px]">Discover our Popular Dishes</h3>
            <div class="mt-20 flex gap-1">
                <PartialsGalleryThumb :img="getImagePath('gallery.webp')" width="9/12"/>
                <PartialsGalleryThumb :img="getImagePath('gallery-1.webp')" width="3/12"/>
            </div>
            <div class="mt-1 flex gap-1">
                <PartialsGalleryThumb :img="getImagePath('gallery-2.webp')" width="3/12"/>
                <PartialsGalleryThumb :img="getImagePath('gallery-3.webp')" width="3/12"/>
                <PartialsGalleryThumb :img="getImagePath('gallery-4.webp')" width="6/12"/>
            </div>
            <div class="mt-20 flex gap-1">
                <PartialsGalleryThumb :img="getImagePath('gallery-2-1.webp')" width="[20%]"/>
                <PartialsGalleryThumb :img="getImagePath('gallery-2-2.webp')" width="[20%]"/>
                <PartialsGalleryThumb :img="getImagePath('gallery-2-3.webp')" width="[20%]"/>
                <PartialsGalleryThumb :img="getImagePath('gallery-2-4.webp')" width="[20%]"/>
                <PartialsGalleryThumb :img="getImagePath('gallery-2-5.webp')" width="[20%]"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        getImagePath(image) {
            return require(`~/static/gallery/${image}`);
        }
    }
}
</script>