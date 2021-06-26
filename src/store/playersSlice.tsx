import { createSlice } from '@reduxjs/toolkit';

export const playersSlice = createSlice({
  name: 'player',
  initialState: {
    value: ['Bob', 'Xerxes']
  },
  reducers: {
    addPlayer: (state, action) => {
      if (state.value.filter((player) => player === action.payload).length > 0) return;
      state.value = state.value.concat([action.payload]);
    },
    removePlayer: (state, action) => {
      state.value = state.value.filter((player) => player !== action.payload);
    },
  }
});

// Action creators are generated for each case reducer function
export const { addPlayer, removePlayer } = playersSlice.actions;

export default playersSlice.reducer;