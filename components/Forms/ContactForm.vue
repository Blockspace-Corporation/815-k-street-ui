<template>
    <form action="" class="flex flex-col gap-6">
        <InputField label="Name" v-model="form.name"/>
        <InputField label="Email" v-model="form.email"/>
        <InputField label="Mobile Number" v-model="form.phone"/>
        <InputField label="What can we help you with?" type="textarea" v-model="form.message"/>
        <Button class="w-40" submit>Submit</Button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    },
}
</script>