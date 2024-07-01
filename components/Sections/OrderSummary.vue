<template>
  <div class="w-full">

    <div class="grid">
      <p class="text-lg font-bold">{{ user.first_name }} {{ user.last_name }}</p>
      <p class="text-gray-100">{{ user.email }}</p>
    </div>
    <br>
    <br>
    <div class="grid">
      <h2 class="text-lg font-bold mb-4">Order Summary</h2>
    </div>
    <div class="w-full grid grid-cols-2 gap-4">
        <div>
          <p class="text-lg ">Subtotal:</p>
          <p class="text-lg ">Shipping:</p>
          <p class="text-lg ">Discount (20%):</p>
          <p class="text-lg  border-b border-gray-900/10 pb-12">Tax (12%):</p>
          <p class="text-lg ">Total:</p>
        </div>
        <div align="right">
          <p class="text-lg font-bold">{{ data.sub_total }}&nbsp;PHP</p>
          <p class="text-lg font-bold">{{ data.shipping }}&nbsp;PHP</p>
          <p class="text-lg font-bold">{{ data.discount }}&nbsp;PHP</p>
          <p class="text-lg font-bold border-b border-gray-900/10 pb-12">{{ data.tax }}&nbsp;PHP</p>
          <p class="text-lg font-bold ">{{ data.total }}&nbsp;PHP</p>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
        data: 'order_summary/SINGLE',
    }),
    ...mapState('auth', {
      user: state => state.user
    }),
  },
}
</script>
