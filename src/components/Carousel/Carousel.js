import { useState } from 'react';

function Carousel(props) {
  const images = props.images;

  const [index, setIndex] = useState(0);

  function handleRight() {
    if (index < images.length - 1) {
      //se eu não estiver na ultima foto, adiciona +1 no index (vai me levar pra próxima)
      setIndex(index + 1);
    } else {
      //caso eu esteja no ultimo index, me levar pro começo da array
      setIndex(0);
    }
  }

  function handleLeft() {
    if (index === 0) {
      //se eu estiver na primeira imagem e tentar voltar mais, vou ser enviada pro ultimo item da array
      setIndex(images.length - 1);
    } else {
      //caso eu não esteja no começo da array, subtraio 1 do index.
      setIndex(index - 1);
    }
  }

  return (
    <div className='photos'>
      <button onClick={handleLeft}>Left</button>
      <img src={images[index]} alt="pessoa aleatória" />
      <button onClick={handleRight}>Right</button>
    </div>
  );
}

export default Carousel;
