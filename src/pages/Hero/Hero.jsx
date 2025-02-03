import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1>Vítejte v Krčmě u Kellyho</h1>
        <p>
          Zastav se poutníče v těchto časech hektických a přenes se s námi do
          doby, kdy tyto prostory obývali věhlasní alchymisté ve službách
          posledních pánu z Rožmberka
        </p>
        <button onClick={() => navigate("/home")}>Vstupte</button>
      </div>
    </div>
  );
}
