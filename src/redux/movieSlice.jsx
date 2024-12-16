// redux/movieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = "916b0a8";

// Thunk untuk mengambil data film dari API
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Search || [];
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    searchTerm: 'Iron Man'
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  }
});

export const { setSearchTerm } = movieSlice.actions;
export default movieSlice.reducer;