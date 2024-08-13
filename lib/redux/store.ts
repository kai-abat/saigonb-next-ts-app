import { configureStore } from '@reduxjs/toolkit';

// import userReducer from "./utils/redux/userSlice";
import userReducer from './features/userSlice';
import postPreviewReducer from './features/postPreviewSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      postPreview: postPreviewReducer
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
