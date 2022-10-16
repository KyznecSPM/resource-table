const secondsToMilliseconds = (sec) => sec * 1000;

const toDateString = (sec) =>
  new Date(secondsToMilliseconds(sec)).toLocaleString();

export const getCurrentRange = (sec) => `${toDateString(sec)}`;

export const convertToJSON = (data) => {
  return data
    .split('\r\n')
    .filter(Boolean)
    .map((objectString) => JSON.parse(objectString.replaceAll("'", '"')));
};
