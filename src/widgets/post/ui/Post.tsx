import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';

import { PostTitle } from '@/entities';
import { PostBody } from '@/entities';
import { CommentsBlock } from '@/features/CommentsBlock';

export interface Post {
  title: string;
  body: string;
  id: number;
}

export const Post = ({ post }: { post: Post }) => {
  return (
    <Card className="bd-highlight mb-3">
      <Container className="d-flex flex-row">
        <Image
          src="./public/img/avatar.jpg"
          roundedCircle
          className="m-4"
          width={200}
          height={200}
        />
        <Card.Body>
          <PostTitle postTitle={post.title} />
          <PostBody postBody={post.body} />
        </Card.Body>
      </Container>
      <Card.Footer>
        <CommentsBlock postId={post.id} />
      </Card.Footer>
    </Card>
  );
};
