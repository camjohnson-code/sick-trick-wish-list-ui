export const getTricks = (url) => {
  return fetch(url).then((response) => response.json());
};
