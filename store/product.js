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
    setProducts(state, data) {
        state.data = data;
    },

    setProduct(state, data) {
        state.single = data;
    },
}

export const actions = {
    async fetchList(context, payload = null) {
        let url = `/products`

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
            context.commit('setProducts', response.data)
        }
    },

    async fetchOne(context, id) {
        context.commit('setProduct', null)
        let response = await this.$axios.get(`/products/${id}`);
        if (response.status == 200) {
            context.commit('setProduct', response.data)
            return response.data;
        }
    },

    async add(context, data) {
        try {
            let response = await this.$axios.post('/products', data);
            if (response.status == 201) {
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },

    async edit(context, data) {
        try {
            let response = await this.$axios.put(`/products/${data.id}`, data);
            if (response.status == 201) {
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },

    async delete(context, data) {
        try {
            let response = await this.$axios.delete(`/products/${data.id}`);
            if (response.status == 201) {
            }
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}