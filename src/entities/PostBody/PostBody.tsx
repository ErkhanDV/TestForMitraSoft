import { FC } from 'react';
import { Card } from 'react-bootstrap';

type Props = {
  postBody: string;
};

export const PostBody: FC<Props> = ({ postBody }) => {
  return <Card.Text>{postBody}</Card.Text>;
};
