export function tsvToData(string) {
  const [header, ...lines] = string
    .trim()
    .split("\n")
    .map((item) => item.split('\t'));

  const formedArr = lines.map((item) => {
    const object = {};
    // at() was used in the first place (instead of object[key]) but vitest has limitations with it! at(index)
    // https://tc39.es/ecma262/#sec-array.prototype.at
    // Most browsers support it tho
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at#browser_compatibility
    header.forEach((key, index) => (object[key] = item[index]));
    return object;
  });

  return formedArr;
}
