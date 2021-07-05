import { createSlice } from '@reduxjs/toolkit';

export const documentSlice = createSlice({
  name: 'document',
  initialState: {
    value: '',
    containerOpen: false,
    playerCallback: undefined,
  },
  reducers: {
    toggleTray: state => { state.containerOpen = !state.containerOpen },
    setVideoName: (state, action) => { state.value = action.payload },
    setCallback: (state, action) => { state.playerCallback = action.payload }
  }
});

// Action creators are generated for each case reducer function
export const { toggleTray, setVideoName, setCallback } = documentSlice.actions;

export default documentSlice.reducer;