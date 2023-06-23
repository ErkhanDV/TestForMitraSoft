import { FC, useState } from 'react';

import { Accordion } from 'react-bootstrap';

import { CommentsList } from '@/entities';

import { fetchingComments } from '../api/fetchingComments';

export type TComment = {
  email: string;
  body: string;
  id: number;
};

type Props = {
  postId: number;
};

export const CommentsBlock: FC<Props> = ({ postId }) => {
  const [isVisibility, setVisibility] = useState<boolean>(false);
  const [comments, setComments] = useState<TComment[]>([]);

  const commentsHandler = () => {
    isVisibility ? setComments([]) : fetchingComments(postId, setComments);
    setVisibility(!isVisibility);
  };

  return (
    <Accordion>
      <Accordion.Item eventKey={`${postId}`}>
        <Accordion.Header onClick={commentsHandler}>
          {isVisibility ? 'Hide comments' : 'Show comments'}
        </Accordion.Header>
        {isVisibility ? <CommentsList comments={comments} /> : null}
      </Accordion.Item>
    </Accordion>
  );
};
