import AboutMe from '../aboutMe';
import Gallery from '../gallery';
import FooterOnMobile from '../footerOnMobile';

const Home = () => {
  return (
    <div className="mx-auto m-0 p-0">
      <div className="flex flex-cols items-center justify-center text-left">
        <AboutMe />
      </div>
      <Gallery />
      <div className="bg-grey-90 font-extrabold text-3xl text-white px-4 md:py-24 py-20 flex items-center justify-center text-center">
        <div className="max-w-xl">
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor"
        </div>
      </div>
      <FooterOnMobile />
    </div>
  );
};

export default Home;
