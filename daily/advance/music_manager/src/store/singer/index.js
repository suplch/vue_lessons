import axios from 'axios';
const singer = {
    namespaced: true,
    state: {
        singer_list: []
    },
    mutations: {
        update_singer_list(state, singers) {
            state.singer_list = singers;
        }
    },
    actions: {
        query_singers(context, payload) {
            axios.post('/api/query_singers', {
                singer: payload.singer
            }).then((result) => {
                if (result.data.status === 10000) {
                    context.commit('update_singer_list', result.data.data.singers);
                }
            })
        },
        get_singer(context) {
            axios.get('/api/get_singers').then((result) => {
                if (result.data.status === 10000) {
                    context.commit('update_singer_list', result.data.data.singers);
                }
            });
        },
        new_singer(context, payload) {
            return axios.post('/api/new_singer', {
                singer: payload.singer
            }).then((result) => {
                return {
                    isOk: result.data.status === 10000,
                    msg: result.data.msg
                };
            });
        },
        edit_singer(context, payload) {
            return axios.post('/api/edit_singer', {
                _id: payload._id,
                singer: payload.singer
            }).then((result) => {
                return {
                    isOk: result.data.status === 10000,
                    msg: result.data.msg
                }
            });
        }
    }
};

export default singer;
