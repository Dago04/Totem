import { configureStore } from '@reduxjs/toolkit'
import { animeSlice } from './slices/anime'
import { authSlice } from './slices/auth'

export const store = configureStore({
    reducer: {
        anime: animeSlice.reducer,
        auth: authSlice.reducer
    },
})