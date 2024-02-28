<template>
    <div class="flex flex-col gap-1">
        <label>{{ label }}</label>
        <template v-if="type == 'textarea'">
            <textarea
                class="h-72 bg-input-default h-12 p-2 focus:outline-none focus:ring rounded"
                v-bind:value="modelValue"
                v-on:input="$emit('input', $event.target.value)"
            ></textarea>
        </template>
        <template v-else>
            <input
                :type="type"
                class="bg-input-default h-12 p-2 focus:outline-none focus:ring rounded"
                v-bind:value="modelValue"
                v-on:input="$emit('input', $event.target.value)"
            />
        </template>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'label'
        },
        type: {
            type: String,
            default: 'text'
        },
        required: {
            type: Boolean,
            default: false
        },
        modelValue: null
    },
}
</script>