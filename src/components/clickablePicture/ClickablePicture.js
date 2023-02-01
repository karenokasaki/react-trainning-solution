import { useState } from 'react';

function ClickablePicture(props) {
  //definir o state
  const [img, setImg] = useState(props.img);

  function handleImage() {
    if (img === props.img) {
      //se a imagem for essa, muda pra outra
      setImg(props.imgClicked);
    }
    if (img === props.imgClicked) {
      //se a imagem for essa, muda pra outra
      setImg(props.img);
    }
  }

  return <img onClick={handleImage} src={img} width={300} alt="perfil" />;
}

export default ClickablePicture;
