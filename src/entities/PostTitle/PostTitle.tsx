import { FC } from 'react';
import { Card } from 'react-bootstrap';

type Props = {
  postTitle: string;
};

export const PostTitle: FC<Props> = ({ postTitle }) => {
  return <Card.Title>{postTitle}</Card.Title>;
};
