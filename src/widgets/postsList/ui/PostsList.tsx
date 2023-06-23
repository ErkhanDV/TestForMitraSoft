import { FC, useEffect } from 'react';

import { Stack } from 'react-bootstrap';

import { Post } from '@/widgets';
import { Loader, useAppSelector, useAppActions } from '@/shared';

export const PostsList: FC = () => {
  const { posts } = useAppSelector((state) => state.postListReducer);
  const { loadPosts } = useAppActions();

  useEffect(() => {
    loadPosts();
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
