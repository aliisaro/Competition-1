import IdCard from "./components/IdCard.js";
import Random from "./components/Random.js";
import CreditCard from "./components/CreditCard.js";
import Greetings from "./components/Greetings.js";
import BoxColor from "./components/BoxColor.js";

export default function App() {
  return (
    <section>
      <h1>Iteration 1: Component IdCard</h1>
      <IdCard />
      <br></br>
      <h1>Iteration 2 Component Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Pablo</Greetings>
      <br></br>
      <h1>Iteration 3: Component Random</h1>
      <Random />

      <br></br>
      <h1>Iteration 4: Component BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <br></br>
      <h1>Iteration 5: Component CreditCard</h1>
      <CreditCard />
    </section>
  );
}
