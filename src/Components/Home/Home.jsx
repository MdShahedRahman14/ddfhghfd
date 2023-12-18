import { Avatar } from "@mui/material";
import { useState } from "react";

import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [details, setDetails] =useState([]);
  
  const data = useLoaderData();
  // console.log(data);
console.log(details);
  const showDetails = (id) => {
    fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
      .then((res) => res.json())
      .then((res) =>setDetails(res));
  };
  return (
    <div className="container d-flex justify-content-between">
      <div>
        <p className="fs-4 px-3 py-2 fw-bold bg-primary-subtle text-center">
          USERS LIST {data.length}
        </p>
        <div>
          {data.map((user, i) => (
            <div
              className="d-flex align-content-center gap-3 my-2 bg-body-tertiary p-2"
              key={i}
            >
              <Avatar src={user.avatar}></Avatar>

              <button
                onClick={() => showDetails(user.id)}
                className="fw-bold border-0 fs-5 bg-body-tertiary"
              >
                {user?.profile?.firstName + " " + user?.profile?.lastName}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="fs-4 px-3 py-2 fw-bold bg-primary-subtle text-center">
          USER DETAILS{details?.Bio}
        </p>
      </div>
    </div>
  );
};

export default Home;
