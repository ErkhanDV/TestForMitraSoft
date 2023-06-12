import { Comment } from '@/entities';
import { useState } from 'react';
import { Accordion, Spinner } from 'react-bootstrap';

export const CommentsBlock = () => {
  const [isOpen, toToggle] = useState<boolean>(false);

  const [isLoading, setLoading] = useState<boolean>(false);

  const [comments, setComments] = useState<Comment[]>([]);

  const accordionHandler = async () => {
    if (!isOpen) {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts/1/comments'
      );
      const resped: Comment[] = await response.json();
      setTimeout(() => {
        setComments(resped);
        setLoading(false);
      }, 1000);
    } else {
      setComments([]);
    }
    toToggle(!isOpen);
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={accordionHandler}>
          {!isOpen ? 'Show comments' : 'Hide comments'}
        </Accordion.Header>
        <Accordion.Body>
          {!isLoading ? (
            comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))
          ) : (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
