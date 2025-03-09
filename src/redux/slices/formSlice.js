import { createSlice } from "@reduxjs/toolkit";

let storedFormData = JSON.parse(localStorage.getItem("formData")) || [];

const formSlice = createSlice({
    name: "form",
    initialState: {
        submissions: storedFormData,
    },
    reducers: {
        updateForm: (state, action) => {
            state.submissions.push(action.payload);
            localStorage.setItem("formData", JSON.stringify(state.submissions));
        },
        resetForm: (state) => {
            state.submissions = [];
            localStorage.removeItem("formData");
        },
    },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
