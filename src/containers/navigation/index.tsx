import Logo from '../../components/logo';
import NavigationMainMenu from '../navigationMainMenu';
import NavigationIconMenu from '../navigationIconMenu';

const Navigation = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-3 h-25 flex items-center bg-grey-100">
        <div className="w-26 h-20 mr-1 md:mr-14 flex-none">
          <a href="#">
            <Logo />
          </a>
        </div>
        <div className="w-full flex items-center justify-between">
          <NavigationMainMenu />
          <NavigationIconMenu />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
