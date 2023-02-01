import './IdCard.css';

function IdCard(props) {
  return (
    <div className="card">
      <img src={props.picture} alt="profile"></img>
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
