import Verb from '../interaces/verb';
import VerbResponse from '../interaces/verb-response';

export default function setVerbsResponse(data: Verb[], qty = 0): VerbResponse[] {
  let result: VerbResponse[] = [];

  if (!qty) {
    data.forEach((verb) => {
      let entry: VerbResponse = {
        id: verb.id,
        verb: verb.verb,
        auxiliary: verb.auxiliary,
        auxiliaryInput: '',
        participle: verb.participle,
        participleInput: '',
        translation: verb.translation,
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
      
      let entry: VerbResponse = {
        id: data[index].id,
        verb: data[index].verb,
        auxiliary: data[index].auxiliary,
        auxiliaryInput: '',
        participle: data[index].participle,
        participleInput: '',
        translation: data[index].translation
      };
      result.push(entry);
    }
  }

  return result;
}