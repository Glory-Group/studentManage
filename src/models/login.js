import {loginRequest} from "../services/login"
export default {
    namespace: 'login',

    state: {
        username: "1111"
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
         async handleLogin({ params }){
            const result=await loginRequest(params)
            console.log(result,"mmmmmmmmmm")
              return "aaa";
          }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};
