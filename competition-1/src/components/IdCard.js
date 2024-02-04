function IdCard({ lastName, firstName, gender, height, birth, picture, }) {
  return (
    <section className="IdCard">
      <img
        src={picture}
        alt="aPicture"
      />
      <ul>
        <li><b>First name: </b>{firstName}</li>
        <li><b>Last name: </b>{lastName}</li>
        <li><b>Gender: </b>{gender}</li>
        <li><b>Height: </b>{height}m</li>
        <li><b>Birth: </b>{birth.toDateString()}</li>
      </ul>
    </section>
  );
}

export default IdCard;