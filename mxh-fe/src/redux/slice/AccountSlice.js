import {createSlice} from "@reduxjs/toolkit";
import {
    changePassword,
    findById,
    AccountsEdit,
    AccountsLogin,
    AccountsLogout,
    AccountsRegister,
    AccountsLoginGG,
    searchOtherAccount
} from "../../services/AccountService";

const initialState = {
    account: [],
    accountShow: localStorage.getItem('accountShow'),
    checkUser: null,
    otherAccount:{},
    currentAccount:JSON.parse(localStorage.getItem('account')),
}
const accountSlice = createSlice({
    name: 'account', initialState, reducers: {}, extraReducers: builder => {
        builder.addCase(AccountsRegister.fulfilled, (state, {payload}) => {
            state.account.push(payload);
        });
        builder.addCase(findById.fulfilled, (state, action) => {
            state.account = action.payload;
        });
        builder.addCase(AccountsEdit.fulfilled, (state, action) => {
            state.currentAccount = action.payload;
            localStorage.setItem('account',JSON.stringify(action.payload));
        });
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.currentAccount = action.payload
        });
        builder.addCase(AccountsLogin.fulfilled, (state, {payload}) => {
            state.account = payload.data;
            state.currentAccount = payload.data;
            localStorage.setItem('account',JSON.stringify(payload.data));
            if (state.account !== 'User is not exit' && state.account !== 'Password is wrong') {
                localStorage.setItem("isAccount", payload.data.idAccount)
                localStorage.setItem("access_token", payload.data.token)
                localStorage.setItem("status", payload.data)
                localStorage.setItem("nameAccount", payload.data.username)
                localStorage.setItem("avatar", payload.data.avatar)
                state.accountShow = false
                localStorage.setItem('AccountShow', state.accountShow)
            }

        });
        builder.addCase(AccountsLogout.fulfilled, (state, {payload}) => {
            state.accountShow = true
            localStorage.setItem('accountShow', state.accountShow)
            localStorage.clear()
        })
        builder.addCase(AccountsLoginGG.fulfilled, (state, {payload}) => {
            state.checkUser = payload.data
        })
        builder.addCase(searchOtherAccount.fulfilled, (state, action) => {
            state.otherAccount = action.payload
        })
    }
})
export default accountSlice.reducer;
