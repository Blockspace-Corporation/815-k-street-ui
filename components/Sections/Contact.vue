<template>
    <div>
        <div class="py-52 sm:min-h-screen container mx-auto px-4 text-center text-white">
            <div class="w-full">
                <p class="uppercase">Contact Us</p>
                <h1 class="mt-2 dm-serif text-[#F0A323] font-bold leading-none text-3xl lg:text-[64px]">
                    Ways to get in touch with us
                </h1>
                <div class="mt-8 sm:mt-24 flex flex-col-reverse md:flex-row gap-2 sm:gap-4">
                    <div class="mt-8 md:mt-0 text-sm flex flex-col gap-3 justify-start items-start text-left flex-1">
                        <h4 class="uppercase font-bold">General Inquiries:</h4>
                        <p>
                            Email:
                            <a href="mailto:info@hwanggeumseong.com" class="underline">info@hwanggeumseong.com</a>
                        </p>
                        <p>Phone: +63 917 117 7392</p>
                        <p>
                            Address: Cebu I.T. Park, The Walk, A. Abad St., Lahug, Cebu<br /> City, Philippines
                        </p>
                        <h4 class="uppercase font-bold mt-8">General Inquiries:</h4>
                        <p>
                            For assistance with others, shipping, or product inquiries,<br />
                            contact customer support at <br />
                            <a href="mailto:info@hwanggeumseong.com" class="underline">info@hwanggeumseong.com</a> or call +63 917 117 7392
                        </p>
                    </div>
                    <form @submit.prevent="handleSubmit" class="flex-1 text-left text-sm flex flex-col gap-3 justify-start items-start">
                        <h4 class="uppercase font-bold">Have a question for us? Ask away</h4>
                        <div class="flex gap-4 w-full">
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-xs">First Name <span class="text-[red]">*</span></label>
                                <input type="text" v-model="form.first_name" class="py-3 px-6 text-[black] w-full" placeholder="First Name">
                            </div>
                            <div class="flex flex-col gap-2 flex-1">
                                <label class="text-xs">Last Name <span class="text-[red]">*</span></label>
                                <input type="text" v-model="form.last_name" class="py-3 px-6 text-[black] w-full" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 flex-1 w-full">
                            <label class="text-xs">Reasons for Inquiry</label>
                            <select v-model="form.reason" class="py-3 px-6 text-[black] w-full">
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-2 flex-1 w-full">
                            <label class="text-xs">Email Address or Phone Number <span class="text-[red]">*</span></label>
                            <input type="text" v-model="form.email_or_phone" class="py-3 px-6 text-[black] w-full" placeholder="Email Address or Phone Number">
                        </div>
                        <div class="flex flex-col gap-2 flex-1 w-full">
                            <label class="text-xs">Message</label>
                            <textarea v-model="form.message" class="py-3 px-6 text-[black] w-full" cols="30" rows="8" placeholder="Write a message ..."></textarea>
                        </div>
                        <Button submit class="font-bold px-10 mt-2 w-full md:w-auto">Send</Button>
                    </form>
                </div>
            </div>
        </div>
        <!-- <img src="~/static/store-map.webp" class="w-full"> -->
        <div class="w-full mt-0">
          <iframe class="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.3279517025646!2d123.90591218082305!3d10.32879847470701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9992034d7a837%3A0xa6a28c8d6c725288!2sHwang%20Geum%20Seong!5e0!3m2!1sen!2sph!4v1719994337154!5m2!1sen!2sph"
            height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                reason: 'General Inquiry',
                email_or_phone: '',
                message: ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            // const reponse = await this.$axios.post('/contact', this.form)
            // console.log(reponse)
        }
    }
}
</script>
