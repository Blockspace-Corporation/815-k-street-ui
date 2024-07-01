<template>
  <div class="w-full">

    <div class="grid">
      <p class="text-lg font-bold">{{ name }} </p>
      <p class="text-gray-100">{{ email_address }}</p>
    </div>
    <br>
    <br>
    <div class="grid">
      <h2 class="text-lg font-bold mb-4">Order Summary</h2>
    </div>
    <div class="w-full grid grid-cols-2 gap-4">
        <div>
          <p class="text-lg ">Subtotal:</p>
        </div>
        <div align="right">
          <p class="text-lg font-bold">{{ data.sub_total }}&nbsp;PHP</p>
        </div>

        <div>
          <p class="text-lg ">Shipping:</p>
        </div>
        <div align="right">
          <p class="text-lg font-bold">{{ data.shipping }}&nbsp;PHP</p>
        </div>

        <div>
          <p class="text-lg ">Discount (20%):</p>
        </div>
        <div align="right">
          <p class="text-lg font-bold">{{ data.discount }}&nbsp;PHP</p>
        </div>

        <div>
          <p class="text-lg  border-b border-gray-900/10 pb-12">Tax (12%):</p>
        </div>
        <div align="right">
          <p class="text-lg font-bold border-b border-gray-900/10 pb-12">{{ data.tax }}&nbsp;PHP</p>
        </div>

        <div>
          <p class="text-lg ">Total:</p>
        </div>
        <div align="right">
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
        customer_data: 'customer/SINGLE',
    }),
    ...mapState('auth', {
      user: state => state.user,
    }),
    name() {
      let _name='';
      if(this.user){
        _name = this.user.first_name + ' ' + this.user.last_name;
      }else{
        if(this.customer_data){
          _name = this.customer_data.first_name + ' ' + this.customer_data.last_name;
        }else{
          _name = '';
        }
      }
      return _name;
    },
    email_address(){
      return this.user ?  this.user.email : this.customer_data ? this.customer_data.email : ''
    }
  },
}
</script>
