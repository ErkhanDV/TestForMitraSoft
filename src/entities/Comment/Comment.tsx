import { TComment } from '@/features/CommentsBlock';
import { Card } from 'react-bootstrap';

export const Comment = ({
  comment,
  commentIndex,
}: {
  comment: TComment;
  commentIndex: number;
}) => {
  const commentNumber = commentIndex + 1;

  return (
    <Card>
      <Card.Header>{`Comment #${commentNumber}`}</Card.Header>
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  );
};
