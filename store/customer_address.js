export const state = () => ({
  address: [],
  guest_address: [],
  single: []
})

export const getters = {
  ADDRESS(state) {
      return state.address
  },
  GUEST_ADDRESS(state) {
      return state.guest_address
  },
  SINGLE(state) {
      return state.single
  },
}

export const mutations = {
  setCustomerAddress(state, data){
    state.address = data;
  },
  setGustAddress(state, data){
    state.guest_address = data;
  },
}

export const actions = {
  async fetchAddressList(context, customer_id) {
      let url = `/address/`+customer_id

      let response = await this.$axios.get(url);
      if (response.status == 200) {
          context.commit('setCustomerAddress', response.data)
      }
  },

  async fetchGuestAddressList(context, data) {
      let url = `/guest/address/list`

      let response = await this.$axios.get(url, data);
      if (response.status == 200) {
          context.commit('setGustAddress', response.data)
      }
  },
}
