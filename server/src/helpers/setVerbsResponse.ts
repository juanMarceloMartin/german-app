import VerbResponse from '../interaces/verb-response';
import removeDuplicateEntries from './removeDuplicateEntries';

export default function setVerbsResponse(
  data: any,
  qty: string
): VerbResponse[] {
  let result: VerbResponse[] = [];

  if (qty === 'all') {
    data.forEach((verb: any) => {
      const entry: VerbResponse = {
        ...verb.dataValues,
        auxiliaryInput: '',
        participleInput: '',
      };
      result.push(entry);
    });
  } else {
    const quantity = parseInt(qty);
    const indexArray = removeDuplicateEntries(data, quantity);
    for (let i = 0; i < quantity; i++) {
      const entry: VerbResponse = {
        ...data[indexArray[i]].dataValues,
        auxiliaryInput: '',
        participleInput: '',
      };
      result.push(entry);
    }
  }

  return result;
}
