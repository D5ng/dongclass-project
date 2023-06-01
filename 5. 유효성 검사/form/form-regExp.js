import { emailRegExp, idRegExp, passwordRegExp} from '../utils/regExp.js';

export const inputRegExp = {
  "input-name": emailRegExp,
  "input-id": idRegExp,
  "input-password": passwordRegExp,
};