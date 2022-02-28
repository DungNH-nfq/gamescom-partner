import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

type ReadMoreState = {
  children: any;
  maxWord: number;
};

export const ReadMore = ({ children, maxWord = 300 }: ReadMoreState) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const readMoreElement = (
    <button
      className="h-12 cursor-pointer uppercase text-sm font-bold underline underline-offset-3 decoration-blue-100 hover:text-grey-70"
      onClick={toggleReadMore}
    >
      Read more
      <FontAwesomeIcon icon={faChevronDown} className="w-5 ml-3" />
    </button>
  );
  const showLessElement = (
    <button
      className="h-12 cursor-pointer uppercase text-sm font-bold underline underline-offset-3 decoration-blue-100 hover:text-grey-70"
      onClick={toggleReadMore}
    >
      Show less
      <FontAwesomeIcon icon={faChevronUp} className="w-5 ml-3" />
    </button>
  );
  const classNameOfGradientToReadMore = isReadMore
    ? 'h-32 w-full absolute bottom-12 bg-gradient-to-b from-transparent to-grey-100'
    : '';

  return (
    <div>
      <div className="hidden md:inline w-full">{text}</div>
      <div className="inline md:hidden w-full">
        {isReadMore ? text.slice(0, maxWord) : text}
        <div className="flex flex-col justify-center items-center relative">
          <div className={classNameOfGradientToReadMore}></div>
          {isReadMore ? readMoreElement : showLessElement}
        </div>
      </div>
    </div>
  );
};
