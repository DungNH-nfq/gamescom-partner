import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// To Test
import { FooterOnMobile } from '../containers/footerOnMobile';

configure({ adapter: new Adapter() });

let mountedComponent: any;

describe('FooterOnMobile', () => {
  beforeEach(() => {
    mountedComponent = shallow(<FooterOnMobile />);
  });

  it('should be defined', () => {
    expect(mountedComponent).toBeDefined();
    expect(mountedComponent.type()).toEqual('div');
    expect(mountedComponent.first().hasClass('sticky')).toBeTruthy();
  });
});
