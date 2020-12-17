import Verb from '../interaces/verb';
import VerbResponse from '../interaces/verb-response';
import removeDuplicateEntries from './removeDuplicateEntries';


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
    const indexArray = removeDuplicateEntries(data, qty);
    for (let i = 0; i < qty; i++) {
      let entry: VerbResponse = {
        id: data[indexArray[i]].id,
        verb: data[indexArray[i]].verb,
        auxiliary: data[indexArray[i]].auxiliary,
        auxiliaryInput: '',
        participle: data[indexArray[i]].participle,
        participleInput: '',
        translation: data[indexArray[i]].translation
      };
      result.push(entry);
    }
  }

  return result;
}