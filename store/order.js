export const state = () => ({
  data: [],
  order_summary:[],
  single: []
})

export const getters = {
  DATA(state) {
      return state.data
  },
  SINGLE(state) {
      return state.single
  },
  SUMMARY(state){
    return state.order_summary
  }
}
export const mutations = {
  setOrderSummary(state, customerData) {
    state.order_summary = customerData;
  },
}

export const actions = {
  async storeOrderSummaryObject(context, data) {
    console.log(data)
    context.commit('setOrderSummary', data)
  },
}
