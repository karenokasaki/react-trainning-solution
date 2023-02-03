import { useState } from 'react';
import json from '../../data/berlin.json';

function FacebookAd() {
  const [data, setData] = useState(json);
  const [clicked, setClicked] = useState('');
  const [search, setSearch] = useState('');

  let countries = Array.from(new Set(data.map((user) => user.country)));

  function handleCountry(country) {
    if (clicked === country) {
      setClicked('');
    } else {
      setClicked(country);
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <input
        placeholder="Pesquise pelo nome"
        value={search}
        onChange={handleChange}
      />
      <div>
        {countries.map((country) => {
          return (
            <button
              className="facebookButton"
              style={{
                backgroundColor: country === clicked ? 'teal' : 'white',
              }}
              onClick={(e) => handleCountry(country)}
            >
              {country}
            </button>
          );
        })}
      </div>

      {data
        .filter((user) =>
          user.firstName.toLowerCase().includes(search.toLowerCase())
        )
        .map((user) => {
          return (
            <div
              className="facebookCard"
              style={{
                backgroundColor: clicked === user.country ? 'teal' : 'white',
              }}
            >
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

export default FacebookAd;
