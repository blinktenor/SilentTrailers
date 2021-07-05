import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './playersSlice';
import documentReducer from './documentSlice';

const rootStore = configureStore({
  reducer: {
    players: playersReducer,
    document: documentReducer,
  }
})

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;