import { FC } from 'react';

import { Loader } from '@/shared';
import { Comment } from '@/entities';
import { Accordion } from 'react-bootstrap';

import { TComment } from '@/features/CommentsBlock';

type Props = {
  comments: TComment[];
};

export const CommentsList: FC<Props> = ({ comments }) => {
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
