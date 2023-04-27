import aboutMeText from '../../data/aboutMeText';
import profileImage from '../../images/profile.jpeg';

const AboutMeBio = () => {
  return (

    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/3 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="" />
      </div>

      <div className="font-general-regular w-full sm:w-3/4 text-left">
        <p
          className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
        >
          {aboutMeText}
        </p>
      </div>
    </div>

  );
};

export default AboutMeBio;