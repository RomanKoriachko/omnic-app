import { createSlice } from '@reduxjs/toolkit'

type ActiveCellType = {
    xxs: boolean
    xs: boolean
    s: boolean
    m: boolean
    l: boolean
    xl: boolean
    xxl: boolean
    xxxl: boolean
    isBtnDisabled: boolean
}

const initialState: ActiveCellType = {
    xxs: false,
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
    xxxl: false,
    isBtnDisabled: true,
}

export const activeCellReducer = createSlice({
    name: 'activeCell',
    initialState,
    reducers: {
        selectXxsCell: (state) => ({
            xxs: !state.xxs,
            xs: false,
            s: false,
            m: false,
            l: false,
            xl: false,
            xxl: false,
            xxxl: false,
            isBtnDisabled: state.xxs,
        }),
        selectXsCell: (state) => ({
            xxs: false,
            xs: !state.xs,
            s: false,
            m: false,
            l: false,
            xl: false,
            xxl: false,
            xxxl: false,
            isBtnDisabled: state.xs,
        }),
        selectSCell: (state) => ({
            xxs: false,
            xs: false,
            s: !state.s,
            m: false,
            l: false,
            xl: false,
            xxl: false,
            xxxl: false,
            isBtnDisabled: state.s,
        }),
        selectMCell: (state) => ({
            xxs: false,
            xs: false,
            s: false,
            m: !state.m,
            l: false,
            xl: false,
            xxl: false,
            xxxl: false,
            isBtnDisabled: state.m,
        }),
        selectLCell: (state) => ({
            xxs: false,
            xs: false,
            s: false,
            m: false,
            l: !state.l,
            xl: false,
            xxl: false,
            xxxl: false,
            isBtnDisabled: state.l,
        }),
        selectXlCell: (state) => ({
            xxs: false,
            xs: false,
            s: false,
            m: false,
            l: false,
            xl: !state.xl,
            xxl: false,
            xxxl: false,
            isBtnDisabled: state.xl,
        }),
        selectXxlCell: (state) => ({
            xxs: false,
            xs: false,
            s: false,
            m: false,
            l: false,
            xl: false,
            xxl: !state.xxl,
            xxxl: false,
            isBtnDisabled: state.xxl,
        }),
        selectXxxlCell: (state) => ({
            xxs: false,
            xs: false,
            s: false,
            m: false,
            l: false,
            xl: false,
            xxl: false,
            xxxl: !state.xxxl,
            isBtnDisabled: state.xxxl,
        }),
    },
})

export const {
    selectXxsCell,
    selectXsCell,
    selectSCell,
    selectMCell,
    selectLCell,
    selectXlCell,
    selectXxlCell,
    selectXxxlCell,
} = activeCellReducer.actions
export default activeCellReducer.reducer
