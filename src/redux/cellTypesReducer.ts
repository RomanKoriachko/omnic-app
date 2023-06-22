import { createSlice } from '@reduxjs/toolkit'

type CellType = {
    has_empty: boolean
    params?: {
        width: number
        height: number
    }
}

const initialState: CellType[] = [
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
    {
        has_empty: false,
    },
]

export const cellTypeReducer = createSlice({
    name: 'cellType',
    initialState,
    reducers: {
        getCellData: (state, action) => {
            return action.payload
        },
    },
})

export const { getCellData } = cellTypeReducer.actions
export default cellTypeReducer.reducer
