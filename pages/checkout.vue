<template>
  <div>
    <BodyImageBanner bg="banners/about-banner.webp">
    </BodyImageBanner>

    <BodyPaperField>
      <div class="flex min-h-full flex-1 flex-col bg-white">
        <div class="mx-auto w-full px-8 py-16 sm:px-6 sm:py-24 lg:w-3/4 lg:px-8">
          <Stepper/>
        </div>
      </div>
    </BodyPaperField>

  </div>
</template>

<script>
import Stepper from '../components/Stepper.vue';


export default {
  auth: false,
  data() {
    return {
      currentStep: 1,
       products:
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },
    }
  },
  methods: {
    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    }
  }
}
</script>
