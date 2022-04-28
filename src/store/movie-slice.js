import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: JSON.parse(localStorage.getItem("movies")),
    favMovies: [],
    search: "",
    selectedMov: [],
    nameOfMov: "",
    id: [JSON.parse(localStorage.getItem("id"))],
    _id: "",
    loading: false,
    error: false,
    msg: "",
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setMovies(state, action) {
      state.movies = action.payload;
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
    setMovie(state, action) {
      state.selectedMov = action.payload;
    },
    setFavMovies(state, action) {
        state.favMovies = action.payload;
    },
    setId(state, action) {
      // state.id.push(action.payload);
      state.id = [action.payload];
      localStorage.setItem("id", JSON.stringify(state.id));
    },
    set_id(state, action) {
      state._id = action.payload;
    },
    removeId(state, action) {
      const index = state.id.indexOf(action.payload);
      state.id.splice(index);
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
    setError(state,action) {
      state.error = !state.error;
      state.msg = action.payload
    },
  },
});

export const movieSliceActions = movieSlice.actions;
export default movieSlice;
