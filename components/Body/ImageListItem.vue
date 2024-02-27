<template>
    <div
        class="flex gap-3 items-start"
        :class="{
            'flex-row-reverse': reversed
        }"
    >
        <img :src="icon" class="w-10" />
        <div
            class="flex gap-2 flex-col"
            :class="{
                'text-right': reversed
            }"
        >
            <h3 class="text-secondary font-bold">{{ title }}</h3>
            <p class="text-sm text-grey-lighter">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            default: '',
            type: String
        },
        title: {
            default: '',
            type: String
        },
        reversed: {
            default: false,
            type: Boolean
        }
    }
}
</script>