const state = {
    thisSite: {
        site: {
            name: process.env.VUE_APP_SITE_TITLE
        }
    }
}

const getters = {
    thisSite: () => state.thisSite
}

const mutations = {}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
