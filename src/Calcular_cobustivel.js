import { useState } from "react";
import "./Style/styles.css";
import logo from './images/posto-de-gasolina.png'

export default function Calcular_cobustivel() {
  const [Alcool_price, setAlcool] = useState(0);
  const [Gasolina_price, setGasolina] = useState(0);
  const [message, setMessage] = useState("");
  var resultado = 0
  const textdefault = (value_alcool, value_gasolina) => {
    resultado = value_alcool / value_gasolina;

    if (resultado < 0.7) {
      setMessage("Abastercer com Álcool");
    } else if (isNaN(resultado)) {
      setMessage("");
    } else {
      setMessage("Abastercer com gasolina");
    }
  };

  return (
    <div className="div_centralisar">
      <img
        src={logo}
        className="imagem"
      />

      <h1>
        <strong>Qual a melhor opção?</strong>
      </h1>
      <p>Álcool (preço por litro): </p>

      <input
        type="number"
        step="0.01"
        value_alcool={Alcool_price}
        onChange={(e) => setAlcool(parseFloat(e.target.value))}
      />

      <p>Gasolina (preço por litro): </p>

      <input
        type="number"
        step="0.01"
        value_gasolina={Gasolina_price}
        onChange={(e) => setGasolina(parseFloat(e.target.value))}
      />
      <br />
      
      <button onClick={() => textdefault(Alcool_price, Gasolina_price)}>
        <strong>Calcular</strong>
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}
