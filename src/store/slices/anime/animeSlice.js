import { createSlice } from '@reduxjs/toolkit';
import { camisasAnime } from '../../../totem/data/animeShirts';

export const animeSlice = createSlice({
    name: 'anime',
    initialState: {
        filteredShirts: camisasAnime,
        searchText: "",
        currentPage: 1,
        shirtsPerPage: 12,
    },
    reducers: {
        setFilteredShirts: (state, action) => {
            state.filteredShirts = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setShirtsPerPage: (state, action) => {
            state.shirtsPerPage = action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setFilteredShirts, setSearchText, setCurrentPage, setShirtsPerPage } = animeSlice.actions;