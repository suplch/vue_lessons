export const state = () => {
    return {
        counter: 0,
        url: ''
    }
};

export const mutations = {
    increment(state, num) {
        state.counter += num;
    },
    seturl(state, url) {
        state.url = url;
    }
};

export const actions = {
    nuxtServerInit({ commit }, {req}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('seturl', req.url + new Date());
                resolve();
            }, 3000)
        });
    },

    increment({commit}, num) {
        setTimeout(() => {
            commit('increment', num);
        }, 1000);
    }
};
