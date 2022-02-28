import { NavigationOnTop } from '../navigationOnTop';
import { Navigation } from '../navigation';

export const Header = () => {
  return (
    <div className="text-white">
      <NavigationOnTop />
      <Navigation />
    </div>
  );
};
