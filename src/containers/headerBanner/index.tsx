import bannerOnHeader from '../../assets/banner-on-header.jpg';

const HeaderBanner = () => {
  return (
    <img
      className="object-cover w-full h-[350px] md:h-auto"
      src={bannerOnHeader}
      alt="banner"
    />
  );
};

export default HeaderBanner;
