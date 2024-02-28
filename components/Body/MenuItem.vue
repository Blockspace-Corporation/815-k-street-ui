<template>
    <div class="p-2">
        <a href="#" class="flex flex-col gap-1 items-center bg-shadowed-white px-2 py-6">
            <img :src="img" alt="">
            <StarRating :value="rating" />
            <span class="font-bold text-lg">{{ name }}</span>
            <Divider />
            <span class="text-grey-lighter">{{ price }}</span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            default: '',
            type: String
        },
        name: {
            default: '',
            type: String
        },
        rating: {
            default: 0,
            type: Number
        },
        price: {
            default: '',
            type: String
        }
    }
}
</script>