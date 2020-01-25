export const createPost = (title, content, trailerContent, tags) => {
  return fetch(
    "http://localhost:8000/api/post/create/5e2ac9a3b22bf774255127d5",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJhYzlhM2IyMmJmNzc0MjU1MTI3ZDUiLCJpYXQiOjE1Nzk4NzIyOTJ9.HKTF0B6Law0mAtJyKGWslCEgnA7JY9PwCM69avmSp4o"
      },
      body: JSON.stringify({ title, content, trailerContent, tags })
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(err => {
      return err;
    });
};

export const read = () => {
  return fetch("http://localhost:8000/api/post/read/5e2ac9a3b22bf774255127d5", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTJhYzlhM2IyMmJmNzc0MjU1MTI3ZDUiLCJpYXQiOjE1Nzk4NzIyOTJ9.HKTF0B6Law0mAtJyKGWslCEgnA7JY9PwCM69avmSp4o"
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      return err;
    });
};
