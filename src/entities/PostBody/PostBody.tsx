import { Card } from 'react-bootstrap';

export interface PostBody {
  postBody: string;
}

export const PostBody = ({ postBody }: PostBody) => {
  return <Card.Text>{postBody}</Card.Text>;
};
