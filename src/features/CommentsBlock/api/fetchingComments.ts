import axios from 'axios';

import { TComment } from '@/shared';

export const fetchingComments = async (
  postId: number,
  callback: (comments: TComment[]) => void
) => {
  const comments = axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  setTimeout(async () => {
    callback((await comments).data);
  }, 500);
};
