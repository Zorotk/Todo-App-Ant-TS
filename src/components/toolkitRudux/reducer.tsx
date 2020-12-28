import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    progressValue: 11,
    login: '',
    password: +'',
    auth: {'login': 'test', 'password': 12345, 'indefinite': true}
}

const toolkitSlice = createSlice({
    name: 'toolkit', initialState
    , reducers: {
        progres(state, action) {
            state.progressValue = action.payload
        },
        setlogin(state, action) {
            state.login = action.payload
        },
        setpassword(state, {payload}) {
            state.password = payload
        },
        setauth(state, {payload}) {
            state.auth.indefinite = payload
        }
    }
})

export default toolkitSlice.reducer
export const { progres, setlogin, setpassword, setauth} = toolkitSlice.actions
