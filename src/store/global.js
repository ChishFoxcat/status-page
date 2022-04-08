const state = {
    siteTitle: "",
}

const getters = {
    siteTitle: () => state.siteTitle,
}

const mutations = {
    changeSiteTitle(state, title) {
        state.siteTitle = title
    },
}

const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
