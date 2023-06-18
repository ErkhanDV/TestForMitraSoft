import { ThemeProvider } from 'react-bootstrap';

export const withTheme = (component: () => React.ReactNode) => () =>
  (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      {component()}
    </ThemeProvider>
  );
