export interface INoun {
    id: number;
    noun: string;
    article: string;
    plural: string;
    translation: string;
    level: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}