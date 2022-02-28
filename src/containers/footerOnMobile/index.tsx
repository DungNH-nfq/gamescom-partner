import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGamepad,
  faVideo,
  faBell,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const FooterOnMobile = () => {
  return (
    <div className="sticky md:relative visible md:invisible h-18 md:h-0 bottom-0 left-0 w-full uppercase bg-grey-100 flex justify-around items-center text-white font-semibold text-[9px]">
      <a href="#" className="hover:text-grey-30 w-[75px] h-auto text-center">
        <FontAwesomeIcon icon={faGamepad} className="w-6 h-6 mb-1" />
        <div className="truncate">Games</div>
      </a>
      <a href="#" className="hover:text-grey-30 w-[75px] h-auto text-center">
        <FontAwesomeIcon icon={faVideo} className="w-6 h-6 mb-1" />
        <div className="truncate">Program</div>
      </a>
      <a href="#" className="hover:text-grey-30 w-[75px] h-auto text-center">
        <FontAwesomeIcon icon={faBell} className="w-6 h-6 mb-1" />
        <div className="truncate">Community</div>
      </a>
      <a href="#" className="hover:text-grey-30 w-[75px] h-auto text-center">
        <FontAwesomeIcon icon={faUser} className="w-6 h-6 mb-1" />
        <div className="truncate">Explore</div>
      </a>
      <a href="#" className="hover:text-grey-30 w-[75px] h-auto text-center">
        <FontAwesomeIcon icon={faUser} className="w-6 h-6 mb-1" />
        <div className="truncate">Watch-list</div>
      </a>
    </div>
  );
};

export default FooterOnMobile;
