import NounResponse from '../interaces/noun-response';
import Noun from '../models/Noun';
import removeDuplicateEntries from './removeDuplicateEntries';

export default function setNounsResponse(
  data: any,
  qty = 0
): NounResponse[] {
  let result: NounResponse[] = [];

  if (!qty) {
    data.forEach((noun: any) => {
      const entry: NounResponse = { ...noun.dataValues, articleInput: '', pluralInput: '' };
      result.push(entry);
    });
  } else {
    const indexArray = removeDuplicateEntries(data, qty);
    for (let i = 0; i < qty; i++) {
      const entry: NounResponse = {
        ...data[indexArray[i]].dataValues,
        articleInput: '',
        pluralInput: '',
      };
      result.push(entry);
    }
  }

  return result;
}
