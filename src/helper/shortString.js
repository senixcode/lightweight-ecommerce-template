export const shortString = (value, number = 70) => {
  if (value.length > 70) {
    return value.slice(0, number) + " ...";
  }
  return value;
};
