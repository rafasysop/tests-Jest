module.exports.queryString = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => {
      const isObject = typeof value === "object" && !Array.isArray(value);
      if (isObject) {
        throw new Error("Only accept Strings");
      }
      return `${key}=${value}`;
    })
    .join("&");
