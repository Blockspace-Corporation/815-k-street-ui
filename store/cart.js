export const state = () => ({
  data: [],
  single: null,
  temporary_cart: []
})

export const getters = {
  DATA(state) {
      return state.data.data;
  },
  SINGLE(state) {
      return state.single;
  },
  total(state) {
      return state.data.total;
  },
  CART(state){
    return state.temporary_cart;
  }
}

export const mutations = {
  setCarts(state, customerData) {
    state.data = customerData;
  },
  setCart(state, customerData) {
    state.single = customerData;
  },
  setTemporaryCart(state, temporaryCart){
    const existingItem = state.temporary_cart.find(item => {
      return item.product.id === temporaryCart.product.id && item.product_combination_id === temporaryCart.product_combination_id;
    });

    if (existingItem) {
      existingItem.quantity += temporaryCart.quantity;
    } else {
      state.temporary_cart.push(temporaryCart);
    }
  },
  removeItemFromCart(state, item) {
    state.temporary_cart = state.temporary_cart.filter(i =>
      !(i.product.id === item.product.id && i.product_combination_id === item.product_combination_id)
     )
  },
  incrementQuantity(state, item) {
    const index = state.temporary_cart.findIndex(i => i.id === item.id);
    if (index !== -1) {
      state.temporary_cart[index].quantity++;
    }
  },
  decrementQuantity(state, item) {
    const index = state.temporary_cart.findIndex(i => i.id === item.id)
    if (index !== -1) {
      if (state.temporary_cart[index].quantity > 1) {
        state.temporary_cart[index].quantity--
      } else {
        state.temporary_cart = state.temporary_cart.filter(i => i.id !== item.id)
      }
    }
  }
}

export const actions = {
  async storeTemporaryCartObject(context,data){
    context.commit('setTemporaryCart', data)
  },

  async storeCartObject(context, data) {
    context.commit('setCart', data)
  },

  async increaseQty(context, data){
    context.commit('incrementQuantity', data)
  },
  async decreaseQty(context, data){
    context.commit('decrementQuantity', data)
  },
  async removeItem(context, data){
    context.commit('removeItemFromCart', data)
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
