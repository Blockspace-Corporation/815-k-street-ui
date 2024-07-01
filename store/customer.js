export const state = () => ({
  data: [],
  single: []
})

export const getters = {
  DATA(state) {
      return state.data
  },
  SINGLE(state) {
      return state.single
  },
}

export const mutations = {
  setCustomer(state, customerData) {
    state.single = customerData;
  },
}

export const actions = {
  async storeCustomerObject(context, data) {
    console.log(data)
    context.commit('setCustomer', data)
  },
}
