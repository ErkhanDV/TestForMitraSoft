import { FC } from 'react';

import Card from 'react-bootstrap/Card';
import { Container, Image } from 'react-bootstrap';

import { PostTitle } from '@/entities';
import { PostBody } from '@/entities';
import { CommentsBlock } from '@/features';

type Props = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

export const Post: FC<Props> = ({ post }) => {
  const { title, body, id } = post;

  return (
    <Card className="bd-highlight mb-3">
      <Container className="d-flex flex-row">
        <Image
          src="./img/avatar.jpg"
          roundedCircle
          className="m-4"
          width={200}
          height={200}
        />
        <Card.Body>
          <PostTitle postTitle={title} />
          <PostBody postBody={body} />
        </Card.Body>
      </Container>
      <Card.Footer>
        <CommentsBlock postId={id} />
      </Card.Footer>
    </Card>
  );
};
