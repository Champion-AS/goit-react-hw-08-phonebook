import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter: '',
}

export const filterSlise = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilterAction: (state, action) => {
            state.filter = action.payload;
        }
    }
})

export const { changeFilterAction } = filterSlise.actions
export default filterSlise.reducer
