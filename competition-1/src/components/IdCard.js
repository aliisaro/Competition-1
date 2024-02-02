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


export default function Gallery() {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}
