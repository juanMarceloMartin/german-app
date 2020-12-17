import Noun from '../interaces/noun';
import NounResponse from '../interaces/noun-response';

export default function setNounsResponse(data: Noun[], qty = 0): NounResponse[] {
  let result: NounResponse[] = [];

  if (!qty) {
    data.forEach((noun) => {
      let entry: NounResponse = {
        id: noun.id,
        noun: noun.noun,
        article: noun.article,
        articleInput: '',
        plural: noun.plural,
        pluralInput: '',
        translation: noun.translation,
      };
      result.push(entry);
    });
  } else {
    const indexes: number[] = [];
    data.forEach(noun => indexes.push(noun.id));
    const randomIndex: number[] = [];

    for (let i = 0; i < qty; i++) {
      const index = Math.floor(Math.random() * indexes.length);
      randomIndex.push(index);
      indexes.splice(indexes.indexOf(index), 1);

      let entry: NounResponse = {
        id: data[index].id,
        noun: data[index].noun,
        article: data[index].article,
        articleInput: '',
        plural: data[index].plural,
        pluralInput: '',
        translation: data[index].translation
      };
      result.push(entry);
    }
  }

  return result;
}