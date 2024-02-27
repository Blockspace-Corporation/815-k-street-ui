<template>
    <div class="bg-cover bg-center" :style="'background-image:url(banners/footer-bg.webp)'">
        <div class="flex px-32 py-16 justify-between text-white">
            <div class="ways-to-contact w-1/2">
                <img src="~/static/logo.webp" alt="" class="w-48">
                <br />
                <ul class="flex flex-col gap-3 text-sm">
                    <li><FooterContactListItem icon="icons/pin.png">The Walk IT Park, Lahug, Cebu City,<br />Philippines</FooterContactListItem></li>
                    <li><FooterContactListItem icon="icons/phone.png">+63 917 117 7392</FooterContactListItem></li>
                    <li><FooterContactListItem icon="icons/email.png">info@hwanggeumseong.com</FooterContactListItem></li>
                    <li><FooterContactListItem icon="icons/time.png">9.30AM - 7.30PM</FooterContactListItem></li>
                </ul>
            </div>
            <FooterLinkList title="Information" :links="informationLinks"/>
            <FooterLinkList title="Help" :links="HelpLinks"/>
            <FooterLinkList title="Legal" :links="LegalLinks"/>
        </div>
        <div class="flex bg-tertiary text-white px-32 py-4 font-light justify-between">
            <span class="text-sm"> © 2024  Hwang Geum Seong. All Right Reserved.</span>
            <FooterSocialMedia />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            informationLinks: [
                { url: '#', label: 'Store Location' },
                { url: '#', label: 'Refund & Return' },
                { url: '#', label: 'Deliveries' },
            ],
            HelpLinks: [
                { url: '#', label: 'Contact Us' },
                { url: '#', label: 'About Us' },
            ],
            LegalLinks: [
                { url: '#', label: 'Privacy Policy' },
                { url: '#', label: 'Terms of Use' },
            ]
        }
    }
}
</script>