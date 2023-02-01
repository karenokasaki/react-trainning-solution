import './DriverCard.css';
import Rating from '../Rating/Rating';

function DriverCard({ name, img, rating, car }) {
  return (
    <>
      <div className="drivercard">
        <img src={img} alt="perfil" />
        <div>
          <h2 style={{ fontSize: '2rem' }}>{name}</h2>
          <Rating>{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
}

export default DriverCard;
