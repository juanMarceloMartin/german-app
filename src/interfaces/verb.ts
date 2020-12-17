export interface IVerb {
    id: number;
    auxiliary: string;
    participle: string;
    translation: string;
    level: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}