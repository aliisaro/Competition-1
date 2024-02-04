function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  if (type === "mastercard") {
    return (
      <section className="CreditCard" style={{ background: bgColor }}>
        <img
          class="img2"
          src={
            "https://armoniacoin.com/wp-content/uploads/2022/10/MasterCard_Logo.png"
          }
          alt="logo"
        />
        <p style={{ color: color }}>{number.replace(/.{12}/, '•••• •••• •••• ')}</p>
        <li style={{ color: color}}>Expires: {expirationMonth} / {expirationYear} {bank}</li>
        <li style={{ color: color, marginBottom: 30 }}>{owner}</li>
      </section>
    );
  } else {

    return (
      <section className="CreditCard" style={{ background: bgColor }}>
        <img
          class="img1"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          }
          alt="logo"
        />
        <p style={{ color: color }}>{number.replace(/.{12}/, '•••• •••• •••• ')}</p>
        <li style={{ color: color}}>Expires: {expirationMonth} / {expirationYear} {bank}</li>
        <li style={{ color: color, marginBottom: 30 }}>{owner}</li>
      </section>
    );
  }
}

export default CreditCard;