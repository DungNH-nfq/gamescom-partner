import { render, screen, cleanup } from '@testing-library/react';

// To Test
import App from '../App';

// Mock Components
jest.mock('../containers/header', () => ({
  Header: () => {
    return <div data-testid="header-component">mock component</div>;
  },
}));
jest.mock('../containers/home', () => ({
  Home: () => {
    return <div data-testid="home-component">mock component</div>;
  },
}));
jest.mock('../containers/headerBanner', () => ({
  HeaderBanner: () => {
    return <div data-testid="header-banner-component">mock component</div>;
  },
}));

describe('App', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = render(<App />).container;
  });

  afterEach(cleanup);

  it('should instantiate without errors', async () => {
    expect(container).toBeTruthy();
  });

  it('should show the main components', async () => {
    const { getByTestId } = screen;

    const headerComponent = getByTestId('header-component');
    expect(headerComponent).toBeTruthy();

    const homeComponent = getByTestId('home-component');
    expect(homeComponent).toBeTruthy();

    const headerBannerComponent = getByTestId('header-banner-component');
    expect(headerBannerComponent).toBeTruthy();
  });
});
