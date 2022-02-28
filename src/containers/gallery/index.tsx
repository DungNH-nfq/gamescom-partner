import { PropsGalleryItem } from '../../typings/gallery';
import game_1 from '../../assets/game_1.jpg';

import { GalleryItems } from '../galleryItems';

const items: PropsGalleryItem[] = [
  {
    id: 1,
    thumbnail: game_1,
    title: 'Game 1 dsdf sdfs dfds dfds dfdsfds sdasd dasdasdsad  asd',
    hasSubscribe: true,
    isSubscribed: false,
    onToggleSubscribe: () => {},
  },
  {
    id: 2,
    thumbnail: game_1,
    title: 'Game 2',
    hasSubscribe: false,
    isSubscribed: false,
    onToggleSubscribe: () => {},
  },
  {
    id: 3,
    thumbnail: game_1,
    title: 'Game 3',
    hasSubscribe: true,
    isSubscribed: true,
    onToggleSubscribe: () => {},
  },
  {
    id: 4,
    thumbnail: game_1,
    title: 'Game 4',
    hasSubscribe: true,
    isSubscribed: false,
    onToggleSubscribe: () => {},
  },
  {
    id: 5,
    thumbnail: null,
    title: 'Game 5',
    hasSubscribe: true,
    isSubscribed: false,
    onToggleSubscribe: () => {},
  },
];

const Gallery = () => {
  return (
    <div className="text-white my-18">
      <div className="max-w-6xl mx-auto px-3 flex flex-col items-start">
        <div className="text-34 leading-10 font-extrabold mb-8">All Games</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4.5 gap-y-4.5 md:gap-y-8">
          <GalleryItems items={items} />
        </div>
        <button className="w-full md:w-auto self-center font-bold text-sm uppercase mt-6 md:mt-12 py-3.5 px-7.5 border-white border hover:bg-white hover:text-black">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Gallery;
