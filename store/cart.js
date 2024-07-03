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

  async fetchList(context, payload = null) {
    let url = `/cart`

    if (payload) {
        const str = []
        for (const p in payload) {
        // eslint-disable-next-line no-prototype-builtins
        if (payload.hasOwnProperty(p)) {
            if (payload[p]) {
            str.push(encodeURIComponent(p) + '=' + payload[p])
            }
        }
        }
        url += '?' + str.join('&')
    }

    let response = await this.$axios.get(url);
    if (response.status == 200) {
        context.commit('setCarts', response.data)
    }
  },
}
