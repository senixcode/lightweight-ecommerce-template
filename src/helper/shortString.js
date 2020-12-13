export const shortString = (value) => {
  if (value.length > 70) {
    return value.slice(0, 73) + " ...";
  }
  return value;
};
