import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PropsGalleryItem } from '../typings/gallery';

// To Test
import { GalleryItem } from '../containers/galleryItem';

configure({ adapter: new Adapter() });

const mountComponent = (props = {} as PropsGalleryItem) =>
  shallow(<GalleryItem {...props} />);

let mountedComponent: any;

describe('GalleryItem', () => {
  beforeEach(() => {
    mountedComponent = mountComponent();
  });

  it('should be defined', () => {
    expect(mountedComponent).toBeDefined();
    expect(mountedComponent.type()).toEqual('div');
  });

  it('should have correct classes name in the wrapper element when the component ready', () => {
    expect(mountedComponent.first().props().className).toEqual(
      'flex flex-col items-start',
    );
  });

  it('should have `no-thumbnail` defined when the prop `thumbnail` is null', () => {
    mountedComponent.setProps({ thumbnail: null });

    expect(mountedComponent.find('img').first().props().alt).toEqual(
      'no-thumbnail',
    );
  });

  it('should have `no-thumbnail` defined when the prop `thumbnail` is undefined', () => {
    mountedComponent.setProps({ thumbnail: undefined });

    expect(mountedComponent.find('img').first().props().alt).toEqual(
      'no-thumbnail',
    );
  });

  it('should have `no-thumbnail` defined when the prop `thumbnail` is empty', () => {
    mountedComponent.setProps({ thumbnail: '' });

    expect(mountedComponent.find('img').first().props().alt).toEqual(
      'no-thumbnail',
    );
  });

  it('should have `thumbnail` defined when the prop `thumbnail` is not empty', () => {
    mountedComponent.setProps({ thumbnail: 'mock thumbnail' });

    expect(mountedComponent.find('img').first().props().alt).toEqual(
      'thumbnail',
    );
  });

  it('should display the empty title element when the `title` prop is empty', () => {
    mountedComponent.setProps({ title: '' });

    const elementTitle = mountedComponent
      .find('div[data-id="gallery-item-title"]')
      .first();

    expect(elementTitle).toBeDefined();
    expect(elementTitle.text()).toEqual('');
  });

  it('should display the empty title element when the `title` prop is null', () => {
    mountedComponent.setProps({ title: null });

    const elementTitle = mountedComponent
      .find('div[data-id="gallery-item-title"]')
      .first();

    expect(elementTitle.text()).toEqual('');
  });

  it('should display the empty title element when the `title` prop is undefined', () => {
    mountedComponent.setProps({ title: undefined });

    const elementTitle = mountedComponent
      .find('div[data-id="gallery-item-title"]')
      .first();

    expect(elementTitle.text()).toEqual('');
  });

  it('should display the correct title element when the `title` prop is valid', () => {
    mountedComponent.setProps({ title: 'any title' });

    const elementTitle = mountedComponent
      .find('div[data-id="gallery-item-title"]')
      .first();

    expect(elementTitle.text()).toEqual('any title');
  });

  it('should not display the subscribe element when the `hasSubscribe` prop is FALSE', () => {
    mountedComponent.setProps({ hasSubscribe: false, isSubscribed: true });

    expect(mountedComponent.exists('button')).toEqual(false);
  });

  it('should display the subscribe element when the `hasSubscribe` prop is TRUE and the `isSubscribed` prop is TRUE', () => {
    mountedComponent.setProps({ hasSubscribe: true, isSubscribed: true });

    expect(mountedComponent.exists('button')).toEqual(true);
    expect(
      mountedComponent.exists('button[data-id="gallery-item-subscribed"]'),
    ).toEqual(true);
  });

  it('should display the unsubscribe element when the `hasSubscribe` prop is TRUE and the `isSubscribed` prop is FALSE', () => {
    mountedComponent.setProps({ hasSubscribe: true, isSubscribed: false });

    expect(mountedComponent.exists('button')).toEqual(true);
    expect(
      mountedComponent.exists('button[data-id="gallery-item-unsubscribed"]'),
    ).toEqual(true);
  });
});
