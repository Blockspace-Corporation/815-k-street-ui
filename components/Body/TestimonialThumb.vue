<template>
    <div class="flex gap-8 p-8 bg-shadowed-white">
        <div class="flex flex-col gap-2 w-32 items-center">
            <img :src="photo" class="w-24 h-24">
            <span class="text-secondary font-bold">{{ from }}</span>
        </div>
        <div class="flex flex-col gap-1 flex-1 items-start">
            <StarRating :value="rating"/>
            <p class="text-sm text-grey-lighter">{{ remarks }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        from: {
            type: String,
            default: ''
        },
        photo: {
            type: String,
            default: ''
        },
        rating: {
            type: Number,
            default: ''
        },
        remarks: {
            type: String,
            default: ''
        }
    }
}
</script>