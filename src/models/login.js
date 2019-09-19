import { loginRequest, registryRequest } from "../services/login"
export default {
    namespace: 'login',

    state: {
        username: "1111"
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        async handleLogin({ params }) {
            const result = await loginRequest(params)           
            if (result.code === 1) {
                alert(result.msg)
            }
            return "aaa";
        },
        async handleRegistry({ params }) {
            const result = await registryRequest(params)
            if (result.code === 1) {
                alert(result.msg)
            }
            return result
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
