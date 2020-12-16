export default interface NounResponse {
    id: number;
    noun: string;
    article: string;
    articleInput: string;
    articleTries: number;
    plural: string;
    pluralInput: string;
    pluralTries: number;
    translation: string;
}