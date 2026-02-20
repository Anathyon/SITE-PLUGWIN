export interface BlogPost {
  id: number;
  title: string;
  image: string;
  content: string;
}

export interface Testimonial {
  name: string;
  image: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  link: string;
  logo?: string;
  features?: { title: string; description: string }[];
  benefits?: { title: string; description: string }[];
  heroCards?: {
    icon: string;
    title: string;
    description: string;
  }[];
  detailedFeatures?: {
    title: string;
    description: string;
    checkList?: string[];
    image?: string;
  }[];
  structuredBenefits?: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}
