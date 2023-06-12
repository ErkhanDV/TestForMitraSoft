import { Card } from 'react-bootstrap';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IComment {
  comment: Comment;
}

export const Comment = ({ comment }: IComment) => {
  return (
    <Card>
      <Card.Header>{`Comment #${comment.id}`}</Card.Header>
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
