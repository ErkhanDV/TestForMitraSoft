import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPosts {
  posts: IPost[];
}

const initialState: IPosts = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
    },
  },
});

export const postsActions = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
