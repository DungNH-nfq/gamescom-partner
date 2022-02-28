const NavigationOnTop = () => {
  return (
    <div className="text-xs font-normal leading-9 bg-grey-90 invisible md:visible h-0 md:h-auto">
      <div className="max-w-6xl mx-auto px-3 flex items-center justify-between">
        <div className="text-left">
          gamescom digital 26.8. - 27.8 | devcom: 17.-30.08.2020 | #gamescom
        </div>
        <div className="text-right">
          <a href="#">FAQ</a>
          <a href="#" className="ml-8">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationOnTop;
