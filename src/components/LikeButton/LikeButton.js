import { useState } from 'react';

function LikeButton(props) {
  let array = ['karen', 'milene'];
  const [INDEX0, INDEX1] = array;
  console.log(INDEX0); // karen
  console.log(INDEX1); // milene

  //let counter = 0;
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('red');
  const [colors, setColors] = useState([
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ]);

  function handleClick() {
    //preciso aumentar o state chamado counter + 1
    console.log('cliquei');
    let result = counter + 1;
    setCounter(result);

    let randomIndex = Math.floor(Math.random() * colors.length); // cria um index aleatório ENTRE o começo e o fnal da array
    setColor(colors[randomIndex]);
  }

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {counter} Likes
      </button>
    </div>
  );
}

export default LikeButton;
