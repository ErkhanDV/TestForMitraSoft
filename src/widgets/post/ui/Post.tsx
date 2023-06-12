import Card from 'react-bootstrap/Card';

import { IPost } from '@/shared';
import { PostTitle } from '@/entities';
import { PostBody } from '@/entities';
import { CommentsBlock } from '@/features/CommentsBlock';

export const Post = ({ title, body }: IPost) => {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <PostTitle postTitle={title} />
        <PostBody postBody={body} />
        <CommentsBlock />
      </Card.Body>
    </Card>
  );
};
