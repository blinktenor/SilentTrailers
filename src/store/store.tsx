import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './playersSlice';

const rootStore = configureStore({
  reducer: {
    players: playersReducer
  }
})

export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;