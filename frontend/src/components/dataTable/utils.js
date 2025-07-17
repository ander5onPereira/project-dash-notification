export function getObjectData(object, propertyString) {
  const properties = propertyString.split('.');

  const result = properties.reduce((currentLevel, property) => {
    return currentLevel && currentLevel[property] !== undefined
      ? currentLevel[property]
      : undefined;
  }, object);

  return result || '';
}
