import bannerOnHeader from '../../assets/banner-on-header.jpg';

export const HeaderBanner = () => {
  return (
    <img
      className="object-cover w-full h-[350px] md:h-auto"
      src={bannerOnHeader}
      alt="banner"
    />
  );
};
