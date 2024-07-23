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

  // async fetchList(context, payload = {}) {
  //   let url = `/customers`
  //   if(payload){
  //     const str =[]
  //     for(const p in payload){
  //       if(payload.hasOwnProperty(p)){
  //         if(payload[p]){
  //           str.push(encodeURIComponent(p) + '=' + payload[p])
  //         }
  //       }
  //     }
  //     url += '?' + str.join('&')
  //   }

  //   let response = await this.$axios.get(url);
  //   if (response.status == 200) {
  //     context.commit('setCustomers', response.data)
  //   }
  // },

  // async fetchOne(context, id) {
  //   let response = await this.$axios.get(`/customers/${id}`);
  //   if (response.status == 200) {
  //       context.commit('setCustomer', response.data)
  //       return response.data;
  //   }
  // },

  async add(context, data) {
    try {
        let response = await this.$axios.post('/order', data);
        if (response.status == 201) {
        }
        return response;
    } catch (error) {
        console.log(error)
    }
  },


  // async delete(context, data) {
  //   try {
  //       let response = await this.$axios.delete(`/${data.id}`);
  //       if (response.status == 200) {
  //       }
  //       return response;
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }
}
