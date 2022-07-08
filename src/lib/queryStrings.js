const keyValueToString = ([key, value]) => {
  const isObject = typeof value === "object" && !Array.isArray(value);
  if (isObject) {
    throw new Error("Only accept Strings");
  }
  return `${key}=${value}`;
};

const strintToObject = (string) =>
  string.split("&").map((item) => {
    const arr = item.split("=");
    if (arr[1].includes(",")) {
      arr[1] = arr[1].split(",");
    }
    return arr;
  });

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join("&");
}

export function parse(string) {
  return Object.fromEntries(strintToObject(string));
}
