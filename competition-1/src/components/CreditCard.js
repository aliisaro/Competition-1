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
  if (number === "0995") {
    return (
      <section className="CreditCard" style={{ background: bgColor }}>
        <img class="img2" src={type} alt="logo" />
        <p style={{ color: color, fontSize: 30, marginLeft: 30 }}>
          •••• •••• •••• {number}
        </p>
        <li style={{ color, fontSize: 13, marginLeft: 15 }}>
          Expires: {expirationMonth} / {expirationYear} {bank}
        </li>
        <li style={{ color, fontSize: 13, marginLeft: 15, marginBottom: 30 }}>
          {owner}
        </li>
      </section>
    );
  } else {
    return (
      <section className="CreditCard" style={{ background: bgColor }}>
        <img class="img1" src={type} alt="logo" />
        <p style={{ color: color, marginLeft: 30 }}>•••• •••• •••• {number}</p>
        <li style={{ color, fontSize: 13, marginLeft: 15 }}>
          Expires: {expirationMonth} / {expirationYear} {bank}
        </li>
        <li style={{ color, fontSize: 13, marginLeft: 15 }}>{owner}</li>
      </section>
    );
  }
}

export default function Cards() {
  return (
    <div>
      <CreditCard
        type="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
        number="8845"
        expirationMonth="3"
        expirationYear="21"
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="https://armoniacoin.com/wp-content/uploads/2022/10/MasterCard_Logo.png"
        number="0995"
        expirationMonth="3"
        expirationYear="21"
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
        number="6984"
        expirationMonth="12"
        expirationYear="19"
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </div>
  );
}
