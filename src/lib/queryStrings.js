module.exports.queryString = (obj) => {
  const string = JSON.stringify(obj)
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll('"', "")
    .replaceAll(":", "=")
    .replaceAll(",", "&");

  return string;
};
