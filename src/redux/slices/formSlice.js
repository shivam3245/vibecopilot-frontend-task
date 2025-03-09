import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    formData: [],
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        submitForm: (state, action) => {
            state.formData.push(action.payload);
        },
    },
});

export const { submitForm } = formSlice.actions;
export default formSlice.reducer;
