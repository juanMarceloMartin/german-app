export default function removeDuplicateEntries(data: any, qty: number) {
    const indexes: number[] = [];
    data.forEach((element: any) => indexes.push(element.dataValues.id));
    const randomIndex: number[] = [];

    for (let i = 0; i < qty; i++) {
        const index = Math.floor(Math.random() * indexes.length);
        randomIndex.push(index);
        indexes.splice(indexes.indexOf(index), 1);
    }
    return randomIndex;
}