import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPosts {
  posts: IPost[];
  isLoading: boolean;
}

const initialState: IPosts = {
  posts: [],
  isLoading: false,
};

export const postListSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    updatePosts(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    toLoadPosts: (state) => {
      state.isLoading = true;
    },
  },
});

export const postsActions = postListSlice.actions;

export const postListReducer = postListSlice.reducer;
