const NavigationMainMenu = () => {
  return (
    <div className="font-bold text-sm uppercase invisible md:visible w-0 md:w-auto inline-flex">
      <a href="#" className="hidden md:block mr-10 hover:text-grey-30">
        Games
      </a>
      <a href="#" className="hidden md:block mr-10 hover:text-grey-30">
        Community
      </a>
      <a href="#" className="hidden md:block mr-10 hover:text-grey-30">
        Universe
      </a>
      <a href="#" className="hidden md:block hover:text-grey-30">
        Program
      </a>
    </div>
  );
};

export default NavigationMainMenu;
