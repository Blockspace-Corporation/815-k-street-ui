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
  setOrderSummary(state, customerData) {
    state.single = customerData;
  },
}

export const actions = {
  async storeOrderSummaryObject(context, data) {
    console.log(data)
    context.commit('setOrderSummary', data)
  },
}
