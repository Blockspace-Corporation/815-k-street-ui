<template>
  <div class="w-full">

    <div class="grid">
      <p class="text-lg font-bold">{{ name }} </p>
      <p class="text-gray-100">{{ email_address }}</p>
    </div>
    <br>
    <br>

    <div class="grid md:flex md:flex-wrap">
      <h2 class="text-lg font-bold mb-4 md:w-full">Order Summary</h2>
    </div>

    <div class="w-full grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-2">
      <div class="md:flex md:justify-between">
        <p class="text-lg">Subtotal:</p>
        <p class="text-lg font-bold md:text-right">{{ data.sub_total }}&nbsp;PHP</p>
      </div>

      <div class="md:flex md:justify-between">
        <p class="text-lg">Shipping:</p>
        <p class="text-lg font-bold md:text-right">{{ data.shipping }}&nbsp;PHP</p>
      </div>

      <div class="md:flex md:justify-between">
        <p class="text-lg">Discount (20%):</p>
        <p class="text-lg font-bold md:text-right">{{ data.discount }}&nbsp;PHP</p>
      </div>

      <div class="md:flex md:justify-between">
        <p class="text-lg">Tax (12%):</p>
        <p class="text-lg font-bold md:text-right">{{ data.tax }}&nbsp;PHP</p>
      </div>

      <div class="md:flex md:justify-between">
        <p class="text-lg">Total:</p>
        <p class="text-lg font-bold md:text-right">{{ data.total }}&nbsp;PHP</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  props: {
    params: {
      type: Object,
      // required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
        data: 'order/SUMMARY',
        customer_data: 'customer/SINGLE',
    }),
    name() {
      let _name='';
      _name = this.params ? this.params.first_name +' '+ this.params.last_name : this.customer_data ? this.customer_data.first_name +' '+ this.customer_data.last_name : '';
      return _name;
    },
    email_address(){
      return this.params ?  this.params.email : this.customer_data ? this.customer_data.email : ''
    }
  },
}
</script>
