import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { PropsGalleryItem } from '../../typings/gallery';
import noThumbnailImage from '../../assets/noThumbnail.jpg';

const GalleryItem = (props: PropsGalleryItem) => {
  const {
    thumbnail = null,
    title = '',
    hasSubscribe = false,
    isSubscribed = false,
    onToggleSubscribe = (isSubscribed: boolean) => {},
  } = props;
  const thumbnailElement = getThumbnailElement(thumbnail);
  const subscribeElement = getSubscribeElement(
    hasSubscribe,
    isSubscribed,
    onToggleSubscribe,
  );

  return (
    <div className="flex flex-col items-start">
      {thumbnailElement}
      <div className="flex items-start justify-between w-full px-0 md:px-[7px] mt-[14px] md:mt-5.5">
        <div className="text-white text-sm font-bold mr-3">{title}</div>
        {subscribeElement}
      </div>
    </div>
  );
};

function getThumbnailElement(thumbnail: string | null) {
  if (thumbnail) {
    return (
      <img
        src={thumbnail}
        alt="thumbnail"
        className="min-w-[162px] md:min-w-[267px] w-auto"
      />
    );
  }

  return (
    <img
      src={noThumbnailImage}
      alt="no-thumbnail"
      className="min-w-[162px] md:min-w-[267px] w-auto"
    />
  );
}

function getSubscribeElement(
  hasSubscribe: boolean = false,
  isSubscribed: boolean = false,
  onToggleSubscribe: (isSubscribed: boolean) => void,
) {
  if (!hasSubscribe) {
    return null;
  }

  if (isSubscribed) {
    return (
      <button
        className="cursor-pointer text-2xl leading-6 text-blue-100"
        onClick={() => onToggleSubscribe(false)}
      >
        <FontAwesomeIcon icon={faBell} />
      </button>
    );
  }

  return (
    <button
      className="cursor-pointer text-2xl leading-6 text-white hover:text-grey-60"
      onClick={() => onToggleSubscribe(true)}
    >
      <FontAwesomeIcon icon={faBell} />
    </button>
  );
}

export default GalleryItem;
