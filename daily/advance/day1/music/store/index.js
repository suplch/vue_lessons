
export const state = function () {
  return {
    count: 0
  }
};


export const mutations = {
  increment(state) {
    state.count++
  }
};

export const actions = {
  increment(context) {
    context.commit('increment')
  }
}
