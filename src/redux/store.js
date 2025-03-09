import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        loggedInUser: null,
        users: [],
    },
    reducers: {
        registerUser: (state, action) => {
            const { email, password, name } = action.payload;
            const userExists = state.users.some(user => user.email === email);
            if (!userExists) {
                state.users.push({ email, password, name });
            }
        },
        loginUser: (state, action) => {
            const { email, password } = action.payload;
            const user = state.users.find(user => user.email === email && user.password === password);
            if (user) {
                state.isAuthenticated = true;
                state.loggedInUser = user;
            }
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.loggedInUser = null;
        }
    }
});

const formSlice = createSlice({
    name: "form",
    initialState: {
        submissions: [],
    },
    reducers: {
        updateForm: (state, action) => {
            state.submissions.push(action.payload);
        },
        resetForm: (state) => {
            state.submissions = [];
        },
    }
});

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    auth: authSlice.reducer,
    form: formSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export const { updateForm, resetForm } = formSlice.actions;
export const selectAuth = (state) => state.auth.isAuthenticated;

