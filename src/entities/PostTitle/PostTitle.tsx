import { Card } from 'react-bootstrap';

export interface PostTitle {
  postTitle: string;
}

export const PostTitle = ({ postTitle }: PostTitle) => {
  return <Card.Title>{postTitle}</Card.Title>;
};
