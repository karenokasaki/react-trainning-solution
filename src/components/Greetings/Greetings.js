import './Greetings.css';

/* function Greetings(props) {
  if (props.lang === 'de') {
    return <p>Hallo {props.children}</p>;
  }
  if (props.lang === 'fr') {
    return <p>Bonjour {props.children}</p>;
  }
  if (props.lang === 'es') {
    return <p>Ola {props.children}</p>;
  }
  if (props.lang === 'en') {
    return <p>Hii {props.children}</p>;
  }
} */

function Greetings(props) {
  let sayingHi = '';

  if (props.lang === 'de') {
    sayingHi = 'Hallo';
  }
  if (props.lang === 'fr') {
    sayingHi = 'Bonjour';
  }
  if (props.lang === 'es') {
    sayingHi = 'Ola';
  }
  if (props.lang === 'en') {
    sayingHi = 'Hi';
  }

  return (
    <div className='greetings'>
      {sayingHi} {props.children}
    </div>
  );
}

export default Greetings;
