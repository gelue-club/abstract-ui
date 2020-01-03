export default function pickBy(object, predicate) {
  const obj = {};

  for (const key in object) {
    if (predicate(key)) {
      obj[key] = object[key];
    }
  }

  return obj;
}
