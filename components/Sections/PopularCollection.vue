<template>
    <BodyImageBanner smallGutter bg="banners/collection-banner.webp">
        <div class="w-full">
            <div class="flex flex-col gap-2 items-center justify-center">
                <h1 class="text-2xl font-bold">Popular Collection</h1>
                <p>Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Pellentesque nec nam aliquam sem et tortor.</p>
            </div>
            <br />
            <br />
            <div class="flex justify-between gap-4">
                <BodyCollectionThumb 
                    v-for="(item, k) in items" :key="`collection-item-${k}`" 
                    :img="item.img"
                    :name="item.name"
                    :label="item.label"
                />
            </div>
        </div>
    </BodyImageBanner>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    img: 'images/collection-1.png',
                    name: 'Cheongpa Beef',
                    label: 'Starts @3.99'
                },
                {
                    img: 'images/collection-2.png',
                    name: 'Baek Jjampong',
                    label: 'Starts @4.99'
                },
                {
                    img: 'images/collection-3.png',
                    name: 'Dolpan Jjajang',
                    label: 'Starts @2.99'
                },
                {
                    img: 'images/collection-4.png',
                    name: 'Jjamppong Jeongol',
                    label: 'Starts @2.99'
                },
                {
                    img: 'images/collection-5.png',
                    name: 'Samsun Champon',
                    label: 'Starts @2.99'
                },
            ]
        }
    }
}
</script>