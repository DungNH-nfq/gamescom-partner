import { render, screen, cleanup } from '@testing-library/react';

// To Test
import { Header } from '../containers/header';

// Mock Components
jest.mock('../containers/navigation', () => ({
  Navigation: () => {
    return <div data-testid="navigation-component">mock component</div>;
  },
}));
jest.mock('../containers/navigationOnTop', () => ({
  NavigationOnTop: () => {
    return <div data-testid="navigation-on-top-component">mock component</div>;
  },
}));

describe('Header', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = render(<Header />).container;
  });

  afterEach(cleanup);

  it('should instantiate without errors', async () => {
    expect(container).toBeTruthy();
  });

  it('should show the child components', async () => {
    const { getByTestId } = screen;

    const navigationComponent = getByTestId('navigation-component');
    expect(navigationComponent).toBeTruthy();

    const navigationOnTopComponent = getByTestId('navigation-on-top-component');
    expect(navigationOnTopComponent).toBeTruthy();
  });
});
