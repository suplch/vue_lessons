export const state = function () {
  return {
    childCount: 0
  }
};

export const mutations = {
  increment(state) {
    state.childCount++
  }
};

export const actions = {
  increment(context) {
    context.commit('increment')
  }
};
