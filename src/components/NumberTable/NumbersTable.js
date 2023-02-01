import style from './NumbersTable.module.css';
import { useState } from 'react';

function NumbersTable({ limit }) {
  const [lim, setLim] = useState(0);
  const [numberList, setNumberList] = useState([]);

  function handleChange(e) {
    setLim(e.target.value);

    for (let i = 1; i <= e.target.value; i++) {
      setNumberList([...numberList, i]);
    }
  }

  console.log(numberList);

  return (
    <div className={style.table}>
      <input type="number" value={lim} onChange={handleChange} />
      {numberList.map((number) => {
        return (
          <div
            className={style.number}
            style={
              number % 2 === 0
                ? { backgroundColor: `red` }
                : { backgroundColor: `white` }
            }
            key={number}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
