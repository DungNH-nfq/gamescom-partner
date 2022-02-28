import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faVideo,
  faBell,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const NavigationIconMenu = () => {
  return (
    <div className="text-sm">
      <a href="#" className="hover:text-grey-30">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
      <a href="#" className="ml-7.5 hover:text-grey-30">
        <FontAwesomeIcon icon={faVideo} />
      </a>
      <a href="#" className="ml-7.5 hover:text-grey-30">
        <FontAwesomeIcon icon={faBell} />
      </a>
      <a href="#" className="hover:text-grey-30 ml-7.5">
        <FontAwesomeIcon icon={faUser} />
      </a>
    </div>
  );
};

export default NavigationIconMenu;
