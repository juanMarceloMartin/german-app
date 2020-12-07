export default interface Verb {
    id: number;
    verb: string;
    auxiliary: string;
    participle: string;
    translation: string;
    level: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}