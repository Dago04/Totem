import { configureStore } from '@reduxjs/toolkit'
import { animeSlice } from './slices/anime'

export const store = configureStore({
    reducer: {
        anime: animeSlice.reducer
    },
})