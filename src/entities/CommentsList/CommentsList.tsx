import { Loader } from '@/shared';
import { Comment } from '@/entities';
import { Accordion } from 'react-bootstrap';

import { TComment } from '@/features/CommentsBlock';

export const CommentsList = ({ comments }: { comments: TComment[] }) => {
  return (
    <Accordion.Body>
      {comments.length ? (
        comments.map((comment, index) => (
          <Comment comment={comment} commentIndex={index} key={comment.id} />
        ))
      ) : (
        <Loader />
      )}
    </Accordion.Body>
  );
};
