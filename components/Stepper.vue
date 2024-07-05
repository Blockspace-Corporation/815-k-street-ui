<template>
  <div class="md:mt-0">
    <h1 class="text-3xl font-bold">Checkout</h1>
    <div class="grid grid-cols-3 gap-1 grid-auto-flow">
      <div class="p-4" :style="{ backgroundColor: first_BackgroundColor }">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"  style="font-weight: bold;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg> &nbsp;
          Personal Information
        </span>
      </div>
      <div class="p-4" :style="{ backgroundColor: second_BackgroundColor }">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path v-if="currentStep >= 2" stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg> &nbsp;
          Address
        </span>
      </div>
      <div class="p-4" :style="{ backgroundColor: third_BackgroundColor }">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path v-if="currentStep == 3" stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg> &nbsp;
          Payment
        </span>
      </div>
    </div>
    <div class="sm:rounded-lg">
      <div class="py-5 sm:p-6" v-if="currentStep === 1">
        <div class="flex space-x-4">
          <div class="flex-1" >
            <!-- STEPPER CONTENT -->
            <!-- <FormsCustomerInfo @next-step="nextStep"/> -->
            <div class="border-b border-gray-900/10">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-1 grid-auto-flow">
                <div class="p-4 col-span-2 lg:w-4/5 md:w-full sm:w-full">
                  <SectionsBillingInformation @next-step="nextStep"/>
                </div>
                <div class="p-4 w-full">
                  <SectionsOrderSummary :params="user" class="w-full" />
                </div>
              </div>
            </div>
            <!-- STEPPER CONTENT -->
          </div>
        </div>
      </div>
      <div class="px-4 py-5 sm:p-6" v-if="currentStep === 2">
        <div class="flex space-x-4">
          <div class="flex-1">

            <div class="border-b border-gray-900/10 pb-12">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-1 grid-auto-flow">
                <div class="p-4  col-span-2">
                  <SectionsBillingAddress @next-step="nextStep" @prev-step="prevStep"/>
                </div>
                <div class="p-4">
                  <SectionsOrderSummary :params="user" class="w-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="px-4 py-5 sm:p-6" v-if="currentStep === 3" >
        <div class="flex space-x-4">
          <div class="flex-1">
            <!-- <FormsReservationSummary @prev-step="prevStep"/> -->

            <div class="border-b border-gray-900/10 pb-12">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-1 grid-auto-flow">
                <div class="p-4  col-span-2">
                  <SectionsPayment />
                </div>
                <div class="p-4">
                  <SectionsOrderSummary :params="user"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      guest_customer: true,
      currentStep: 1,
      customer: null,
      reservation: null,
    };
  },
  computed: {
    ...mapState('auth', {
      user: state => state.user
    }),
    tourName() {
      return  'Header Text'//decodeURIComponent(this.$route.query.name);
    },
    first_BackgroundColor() {
      return this.currentStep >= 1 ? '#C00A27' : '#F4B618';
    },
    second_BackgroundColor() {
      return this.currentStep >= 2 ? '#C00A27' : '#F4B618';
    },
    third_BackgroundColor() {
      return this.currentStep == 3 ? '#C00A27' : '#F4B618';
    }
  },
  methods: {
    goToStep(step) {
      if (step < this.currentStep) {
        this.currentStep = step
      } else if (step > this.currentStep && step <= 3) {
        this.currentStep = step
      }
    },
    guestCustomer() {
      return 'Customer Name'//this.agreed_to_terms;
    },
    guestCustomerClass() {
      return this.guestCustomer ? 'block' : 'hidden';
    },
    nextStep(num) {
      this.goToStep(num)
    },
    prevStep(num) {
      this.goToStep(num)
    },
    create_account(){
      this.guest_customer = false;
    }
  },
  created() {
    // const queryString = this.$route.query;
    // for (const key in queryString) {
    //   if (queryString.hasOwnProperty(key)) {
    //     this.tour[key] = decodeURIComponent(queryString[key]);
    //   }
    // }
    // this.tour.id = parseInt(this.tour.id);
  },
};
</script>

<style scoped>
.steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ccc;
}

.step-button {
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  outline: none;
}

.step-button:hover {
  text-decoration: underline;
}

.is-active {
  color: #007bff;
}
</style>
