import Noun from '../interaces/noun';
import NounResponse from '../interaces/noun-response';
import removeDuplicateEntries from './removeDuplicateEntries';

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
    const indexArray = removeDuplicateEntries(data, qty);
    for (let i = 0; i < qty; i++) {
      let entry: NounResponse = {
        id: data[indexArray[i]].id,
        noun: data[indexArray[i]].noun,
        article: data[indexArray[i]].article,
        articleInput: '',
        plural: data[indexArray[i]].plural,
        pluralInput: '',
        translation: data[indexArray[i]].translation
      };
      result.push(entry);
    }
  }

  return result;
}