import { random } from "lodash";

const getRandomChar = () => String.fromCharCode(random(97, 122));

const randomizeStr = str => {
  let res = "";
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = getRandomChar();
    set.add(str[i]);
    if (set.has(char)) {
      i -= 1;
    } else {
      set.add(char);
      res += char;
    }
  }

  return res;
};

export default randomizeStr;
