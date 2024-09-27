import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PostPreviewType {
  media: string;
  type: 'image' | 'video';
}

export const initialState: PostPreviewType = {
  media: '',
  type: 'image'
};

export const postPreviewSlice = createSlice({
  name: 'postPreview',
  initialState,
  reducers: {
    initializePostPreview(state) {
      state = { ...initialState };
    },
    setMedia(state, action: PayloadAction<PostPreviewType['media']>) {
      state.media = action.payload;
    },
    setType(state, action: PayloadAction<PostPreviewType['type']>) {
      state.type = action.payload;
    }
  }
});

export const { initializePostPreview, setMedia, setType } =
  postPreviewSlice.actions;

// Other code such as selectors/getters can use the imported `RootState` type

export default postPreviewSlice.reducer;
