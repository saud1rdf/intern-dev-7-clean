// src/app/docs/types.ts

export type Topic = {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // بالدقائق
  codeExample: string;
  resources?: {
    title: string;
    titleAr: string;
    links: {
      label: string;
      url: string;
    }[];
  };
};

