import { Post } from '@/widgets';

import { withProviders } from './providers';

const App = () => {
  return (
    <Post title={'Post about...'} body={'This is post about my friends'} />
  );
};

export default withProviders(App);
