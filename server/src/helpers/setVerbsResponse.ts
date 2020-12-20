import VerbResponse from '../interaces/verb-response';
import removeDuplicateEntries from './removeDuplicateEntries';

export default function setVerbsResponse(
  data: any,
  qty = 0
): VerbResponse[] {
  let result: VerbResponse[] = [];

  if (!qty) {
    data.forEach((verb: any) => {
      const entry: VerbResponse = {
        ...verb.dataValues,
        auxiliaryInput: '',
        participleInput: '',
      };
      result.push(entry);
    });
  } else {
    const indexArray = removeDuplicateEntries(data, qty);
    for (let i = 0; i < qty; i++) {
      const entry: VerbResponse = {
        ...data[indexArray[i]].dataValues,
        auxiliaryInput: '',
        participleInput: ''
      }
      result.push(entry);
    }
  }

  return result;
}
