// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';


export interface IProject {
  id: number;
  title: string;
  category: string;
  img: string;
  projectHeader?: IProjectHeader;
  description: string;
}

interface IProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
}

const projects: IProject[] = [
  {
    id: 1,
    title: 'Google Health Platform',
    category: 'Web Application',
    img: WebImage2,
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic',
    projectHeader: {
      title: 'Project Management UI - From Context',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
  },
  {
    id: 2,
    title: 'Phoenix Digital Agency',
    category: 'Mobile Application',
    img: MobileImage2,
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic',
  },
  {
    id: 3,
    title: 'Project Management UI',
    category: 'UI/UX Design',
    img: UIImage1,
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic',
  },
  {
    id: 4,
    title: 'Cloud Storage Platform',
    category: 'UI/UX Design',
    img: UIImage2,
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic',
  },
  {
    id: 5,
    title: 'React Social App',
    category: 'Mobile Application',
    img: MobileImage1,
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic',
  },
  {
    id: 6,
    title: 'Apple Design System',
    category: 'Web Application',
    img: WebImage1,
    description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic',
  },
];

export default projects;