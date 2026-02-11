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
  features?: string[];
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}
