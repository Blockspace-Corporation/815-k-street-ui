<template>
    <BodyPaperField>
        <div class="flex flex-col gap-2 items-center justify-center text-grey">
            <h1 class="text-2xl font-bold">Contact Us</h1>
            <p>Need to get in touch with us?</p>
        </div>
        <br />
        <br />
        <div class="flex flex-col md:flex-row gap-6 justify-center">
            <div class="md:w-5/12">
                <label class="font-bold">Address</label>
                <p class="text-sm">Space 101, The Walk, IT Park, Lahug, Cebu City</p>
                <br />
                <label class="font-bold">Business Hours</label>
                <p class="text-sm">Sun - Sat 09:00 AM - 03:00 AM</p>
                <br />
                <label class="font-bold">Phone</label>
                <p class="text-sm">+63 917 117 7392</p>
                <br />
                <label class="font-bold">Email Address</label>
                <p class="text-sm">reservations@hwangguemsoeng.com</p>
                <br />
            </div>
            <FormsContactForm class="md:w-5/12" />
        </div>
        <br />
        <br />
        <img src="store-map.webp" alt="">
        <br />
        <br />
        <BodyNewsLetterSignup />
    </BodyPaperField>
</template>