<template>
    <div class="flex gap-2">
        <img :src="icon" class="w-4 h-4" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        icon: ''
    }
}
</script>