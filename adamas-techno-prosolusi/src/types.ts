export type TemplateType = 'minimal' | 'immersive' | 'bold' | 'sophisticated' | 'corporate' | 'minimal-professional' | 'premium-v1' | 'premium-v2';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface CompanyData {
  name: string;
  tagline: string;
  about: string;
  mission: string;
  vision: string;
  services: Service[];
  projects: Project[];
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
