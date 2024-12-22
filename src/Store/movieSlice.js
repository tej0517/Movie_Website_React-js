import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  topRated: [],
  upcoming: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPopular(state, action) {
      state.popular = action.payload;
    },
    setTopRated(state, action) {
      state.topRated = action.payload;
    },
    setUpcoming(state, action) {
      state.upcoming = action.payload;
    },
  },
});

export const { setPopular, setTopRated, setUpcoming } = movieSlice.actions;
export default movieSlice.reducer;
