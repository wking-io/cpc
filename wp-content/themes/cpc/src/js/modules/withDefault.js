const withDefault = (fallback, prop, obj) =>
  obj.hasOwnProperty(prop) ? obj[prop] : fallback;

export default withDefault;
