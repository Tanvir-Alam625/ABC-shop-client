import { useState } from "react";
const useToken = (user) => {
  const [token, seToken] = useState({});
  fetch("http://localhost:5000/token", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: user.email }),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
};
export default useToken;
