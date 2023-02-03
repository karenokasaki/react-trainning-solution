import style from './NumbersTable.module.css';

function NumbersTable({ limit }) {
  let numberList = [];

  for (let i = 1; i <= limit; i++) {
    numberList.push(i);
  }

  return (
    <div className={style.table}>
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
