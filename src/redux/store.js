import { configureStore, createSlice } from "@reduxjs/toolkit";

// Get stored user & users list from localStorage
const storedUser = JSON.parse(localStorage.getItem("user"));
const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: !!storedUser, // If user exists in storage, set as authenticated
        loggedInUser: storedUser || null, // Store logged-in user
        users: storedUsers, // Registered users
    },
    reducers: {
        registerUser: (state, action) => {
            const { email, password, name } = action.payload;
            const userExists = state.users.some(user => user.email === email);

            if (!userExists) {
                const newUser = { email, password, name };
                const updatedUsers = [...state.users, newUser]; // Create new array (immutability)

                state.users = updatedUsers;
                localStorage.setItem("users", JSON.stringify(updatedUsers));
            }
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(user => user.email === email && user.password === password);

            if (user) {
                state.isAuthenticated = true;
                state.loggedInUser = user;
                localStorage.setItem("user", JSON.stringify(user));
            }
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.loggedInUser = null;
            localStorage.removeItem("user");
        }
    }
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export const selectAuth = (state) => state.auth.isAuthenticated;

export const store = configureStore({ reducer: { auth: authSlice.reducer } });
