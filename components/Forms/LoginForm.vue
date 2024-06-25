<template>
    <form class="flex flex-col gap-4" @submit.prevent="login" style="width: 400px;">
        <InputField label="Email" v-model="form.email" type="email"/>
        <InputField label="Password" v-model="form.password" type="password"/>
        <Button type="submit">Login</Button>
    </form>
</template>

<script>
export default {
    auth: false,
    data() {
        return  {
            form: {
                email: '',
                password: '',
            },
            loading: false
        }
    },
    methods: {
        async login() {
            this.loading = true
            try {
                await this.$axios.get(
                    '../../sanctum/csrf-cookie'
                )

                await this.$auth.loginWith('local', { data: this.form })
                .then(() => {
                    this.$toast.success('Login success')
                    this.$router.push('/')
                })
                .catch(err => {
                    console.log(err.response)
                    this.$toast.error('Invalid user ID and password')
                })

            } catch (error) {
                console.log(error)
                if(error == 'Failed to execute') {
                this.$toast.error('Please complete the CAPTCHA challenge.')
                } else {
                this.$toast.error('Unable to login with the provided credentials.')
                }
            } finally {
                this.loading = false
            }
        }
    }
}
</script>