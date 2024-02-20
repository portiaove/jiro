import { useState } from "react";
import { FACTURA_CARD_INPUTS } from "../../constants";
import InputComponent from "../Input/Input";
import "./FacturaCard.css";

const FacturaCard = ({ factura, nombre = "" }) => {
  const [solicitante, setSolicitante] = useState(true);
  return (
    <div className="facturaCard">
      <div>
        <h3>{factura.name}</h3>
        {FACTURA_CARD_INPUTS.map((input, index) => (
          <InputComponent key={index} {...input} />
        ))}
        <div style={{ display: "flex", gap: "1rem" }}>
          <label htmlFor="solicitante" style={{ paddingTop: "2px" }}>
            Mismo Solicitante
          </label>
          <input
            type="checkbox"
            id="solicitante"
            name="solicitante"
            checked={solicitante}
            onChange={(event) => setSolicitante(event.target.checked)}
            required
          />
        </div>
        {!solicitante && (
          <div>
            <h5>Datos del solicitante</h5>
            <InputComponent
              type="text"
              id="name"
              name="name"
              labelText="Nombre"
              pattern="^[a-zA-Z]{3,}$"
              errorMessage="Por favor, introduce un nombre válido"
              disabled
              value={nombre}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FacturaCard;
