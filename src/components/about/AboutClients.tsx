import { clientsData } from '../../data';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light">
        Some of the brands that trust me
      </p>
      <div className="clients-grid mt-10 sm:mt-14 gap-2">
        {clientsData.map((client) => (
          <AboutClientSingle
            title={client.title}
            image={client.img}
            key={client.id}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutClients;
