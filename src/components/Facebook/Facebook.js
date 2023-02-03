import { useState } from 'react';
import json from '../../data/berlin.json';

function Facebook() {
  const [data, setData] = useState(json);

  return (
    <>
      {data.map((user) => {
        return (
          <div className="facebookCard">
            <img src={user.img} alt="" width={150} />
            <div>
              <p>First Name: {user.firstName}</p>
              <p>Last Name: {user.lastName}</p>
              <p>Country: {user.country}</p>
              <p>Type: {user.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Facebook;
