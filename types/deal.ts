export type Deal = {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  discount: {
    percentage: number;
    expiresIn: number;
  };
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  implementation: {
    phases: string[];
    timeline: string;
    support: string;
  };
  schedule: {
    duration: string;
    format: string;
    implementation: string;
  };
}; 