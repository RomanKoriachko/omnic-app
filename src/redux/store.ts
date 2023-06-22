import { configureStore } from '@reduxjs/toolkit'
import cellTypeReducer from './cellTypesReducer'
import activeCellReducer from './activeCellReducer'

export const store = configureStore({
    reducer: {
        cellTypeState: cellTypeReducer,
        activeCellState: activeCellReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
