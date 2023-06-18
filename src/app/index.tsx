import { Container } from 'react-bootstrap';
import { withProviders } from './providers';
import { Main } from '@/pages';

const App = () => {
  return (
    <div className="bg-secondary">
      <Container>
        <Main />
      </Container>
    </div>
  );
};

export default withProviders(App);
