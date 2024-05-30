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
    setCategories(state, data) {
        state.data = data;
    },

    setCategory(state, data) {
        state.single = data;
    },
}

export const actions = {
    async fetchList(context, payload = null) {
        let url = `/categories`

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
            context.commit('setCategories', response.data)
        }
    },

    async fetchOne(context, id) {
        context.commit('setCategory', null)
        let response = await this.$axios.get(`/categories/${id}`);
        if (response.status == 200) {
            context.commit('setCategory', response.data)
            return response.data;
        }
    },

    async add(context, data) {
        try {
            let response = await this.$axios.post('/categories', data);
            if (response.status == 201) {
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },

    async edit(context, data) {
        try {
            let response = await this.$axios.put(`/categories/${data.id}`, data);
            if (response.status == 201) {
            }
            return response;
        } catch (error) {
            return error.response;
        }
    },

    async delete(context, data) {
        try {
            let response = await this.$axios.delete(`/categories/${data.id}`);
            if (response.status == 201) {
            }
            return response;
        } catch (error) {
            console.log(error)
        }
    }
}