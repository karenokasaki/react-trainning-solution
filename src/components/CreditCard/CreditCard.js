import style from './CreditCard.module.css';
import visa from '../../assets/images/visa.png';
import master from '../../assets/images/visa.png';

function CreditCard(props) {
  let type = props.type === 'Visa' ? visa : master;
  let number = props.number.slice(-4);
  let bgc = { backgroundColor: props.bgColor, color: props.color };
  let expDate = String(props.expirationYear).slice(-2);

  return (
    <div className={style.card} style={bgc}>
      <img src={type} alt="bandeira do cartão"></img>
      <div className={style.numberCard}>•••• •••• •••• {number}</div>

      <p>
        <span>
          Expires {props.expirationMonth}/{expDate}
        </span>
        <span className={style.nameBank}> {props.bank}</span>
      </p>

      <div className={style.owner}>{props.owner}</div>
    </div>
  );
}

export default CreditCard;
