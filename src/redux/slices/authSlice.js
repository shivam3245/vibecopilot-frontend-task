import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loggedInUser: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.users.push(action.payload);
            console.log("Users after registration:", state.users);
        },

        loginUser: (state, action) => {
            console.log("Attempting login with:", action.payload);

            const user = state.users.find(
                (u) => u.email === action.payload.email && u.password === action.payload.password
            );

            console.log("User found:", user);

            if (user) {
                state.loggedInUser = user;
                console.log("Logged in user:", state.loggedInUser);
            } else {
                console.log("Login failed: Invalid credentials");
            }
        },
        logoutUser: (state) => {
            console.log("Logging out user:", state.loggedInUser);
            state.loggedInUser = null;
            console.log("User after logout:", state.loggedInUser);
        },
    },
});



export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;