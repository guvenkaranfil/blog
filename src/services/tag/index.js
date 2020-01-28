export const getTagPosts = tagName => {
  return fetch(`http://localhost:8000/api/tag/${tagName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      return err;
    });
};
