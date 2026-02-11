export type ArticlePreview = {
    slug: string;
    title: string;
    date: string; // ISO string is easiest
    excerpt?: string;
};