export const getTricks = (url) => {
  return fetch(url).then((response) => response.json());
};

export const addTrick = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
