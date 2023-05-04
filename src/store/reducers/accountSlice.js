import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    address: null,
    isConnected: false,
    balance: 0,
}

export const accoutSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        connectWallet: (state, action) => {
            state.address = action.payload;
            state.isConnected = true;
        },
        disconnectWallet: (state, action) => {
            state.address = null;
            state.isConnected = false;
        }

    },
})

// Action creators are generated for each case reducer function
export const { connectWallet, disconnectWallet } = accoutSlice.actions

export default accoutSlice.reducer;
