import { useEffect } from 'react';

import { Stack } from 'react-bootstrap';

import { Post } from '@/widgets';
import { Loader, useAppSelector, useAppActions } from '@/shared';

export const PostsList = () => {
  const { posts } = useAppSelector((state) => state.postListReducer);
  const { toLoadPosts } = useAppActions();

  useEffect(() => {
    toLoadPosts();
  }, []);

  return (
    <Stack gap={2}>
      {posts.length ? (
        posts.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <Loader />
      )}
    </Stack>
  );
};
