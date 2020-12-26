import NounResponse from '../interaces/noun-response';
import removeDuplicateEntries from './removeDuplicateEntries';

export default function setNounsResponse(
  data: any,
  qty: string
): NounResponse[] {
  let result: NounResponse[] = [];

  if (qty === 'all') {
    data.forEach((noun: any) => {
      const entry: NounResponse = {
        ...noun.dataValues,
        articleInput: '',
        pluralInput: '',
      };
      result.push(entry);
    });
  } else {
    const quantity = parseInt(qty);
    const indexArray = removeDuplicateEntries(data, quantity);
    for (let i = 0; i < quantity; i++) {
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
