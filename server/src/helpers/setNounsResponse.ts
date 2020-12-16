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
        articleTries: 2,
        plural: noun.plural,
        pluralInput: '',
        pluralTries: 3  ,
        translation: noun.translation,
      };
      result.push(entry);
    });
  } else {
    for (let i = 0; i < qty; i++) {
      const index = Math.floor(Math.random() * data.length);
      let entry: NounResponse = {
        id: data[index].id,
        noun: data[index].noun,
        article: data[index].article,
        articleInput: '',
        articleTries: 2,
        plural: data[index].plural,
        pluralInput: '',
        pluralTries: 3,
        translation: data[index].translation
      };
      result.push(entry);
    }
  }

  return result;
}