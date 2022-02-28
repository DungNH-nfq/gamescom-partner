import aboutMeLogo from '../../assets/aboutMeLogo.jpg';
import { ReadMore } from '../../components/readmore';

const AboutMe = () => {
  return (
    <div className="px-4 md:px-auto mt-18 max-w-3xl w-full flex flex-col items-start justify-center text-white">
      <img src={aboutMeLogo} alt="about me log" />
      <div className="text-[28px] md:text-34 leading-[34px] md:leading-10 font-extrabold mt-10 mb-6">
        Lorem ipsum dolor sit amet
      </div>
      <div className="inline font-normal text-base leading-5.5">
        <ReadMore maxWord={1000}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam.
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam.
        </ReadMore>
      </div>
    </div>
  );
};

export default AboutMe;
