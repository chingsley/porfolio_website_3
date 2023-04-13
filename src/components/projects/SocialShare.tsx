import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

const SocialShare = () => {
  const socials = [
    {
      id: 1,
      name: 'Twitter',
      icon: <FiTwitter />,
      url: 'https://twitter.com/realstoman',
    },
    {
      id: 2,
      name: 'Instagram',
      icon: <FiInstagram />,
      url: 'https://instagram.com/realstoman',
    },
    {
      id: 3,
      name: 'Facebook',
      icon: <FiFacebook />,
      url: 'https://facebook.com/',
    },
    {
      id: 4,
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/',
    },
    {
      id: 5,
      name: 'Youtube',
      icon: <FiYoutube />,
      url: 'https://www.youtube.com/c/StomanStudio',
    },
  ];
  return (
    <>
      {socials.map(
        (social) => {
          return (
            <a
              key={social.id}
              href={social.url}
              target="__blank"
              aria-label="Share Project"
              className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
            >
              <span className="text-lg lg:text-2xl">
                {social.icon}
              </span>
            </a>
          );
        }
      )}
    </>
  );
};

export default SocialShare;