import Noun from "../interaces/noun";
import Verb from "../interaces/verb";

export default function removeDuplicateEntries(data: Noun[] | Verb[], qty: number) {
    const indexes: number[] = [];
    data.forEach((element: Noun | Verb) => indexes.push(element.id));
    const randomIndex: number[] = [];

    for (let i = 0; i < qty; i++) {
        const index = Math.floor(Math.random() * indexes.length);
        randomIndex.push(index);
        indexes.splice(indexes.indexOf(index), 1);
    }

    return indexes;
}