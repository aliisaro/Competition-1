import IdCard from "./components/IdCard.js";
import Random from "./components/Random.js";
import CreditCard from "./components/CreditCard.js";
import Greetings from "./components/Greetings.js";
import BoxColor from "./components/BoxColor.js";

export default function App() {
  return (
    <section>
      <h1>Iteration 1: Component IdCard</h1>
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

      <br></br>

      <h1>Iteration 2 Component Greetings</h1>
      <Greetings lang="en">Ludwig</Greetings>
      <Greetings lang="de">Michael</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Pablo</Greetings>

      <br></br>

      <h1>Iteration 3: Component Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <br></br>

      <h1>Iteration 4: Component BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <br></br>

      <h1>Iteration 5: Component CreditCard</h1>
      <CreditCard
        type="visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={21}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="mastercard"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={21}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={19}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
    </section>
  );
}
