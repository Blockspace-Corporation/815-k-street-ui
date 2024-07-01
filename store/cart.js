export const state = () => ({
  data: [],
  single: null
})

export const getters = {
  DATA(state) {
      return state.data.data
  },
  SINGLE(state) {
      return state.single
  },
  total(state) {
      return state.data.total
  }
}

export const mutations = {
  setCarts(state, customerData) {
    state.data = customerData;
  },
  setCart(state, customerData) {
    state.single = customerData;
  },
}

export const actions = {
  async storeCartObject(context, data) {
    context.commit('setCart', data)
  },
}
