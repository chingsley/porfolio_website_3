

export interface IProject {
  id: number;
  title: string;
  category: string;
  img: string;
  projectHeader?: IProjectHeader;
  description: string;
  images: IProjectImage[];
  projectInfo?: IProjectInfo;
}

interface IProjectHeader {
  title: string;
  publishDate: string;
  tags: string;
}


interface IProjectImage {
  id: number;
  title: string;
  img: string;
}

interface IProjectInfo {
  objective?: string;
  client?: IClientInfo;
  technologies?: string[];
  challenge?: string;
}

interface IClientInfo {
  name: string;
  services: string;
  website: string;
  phone: string;
}