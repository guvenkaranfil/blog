export const login = (email, password) => {
  return fetch("http://localhost:8000/api/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      return err;
    });
};
