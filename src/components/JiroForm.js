import React, { useState } from "react";
import InputComponent from "./Input/Input";
import { JIRO_FORM_INPUTS } from "../constants";
import FacturaCard from "./FacturaCard/FacturaCard";

const formStyles = {
  width: "90vw",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const formContainerStyles = {
  margin: "3rem 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
};

const JiroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    dateOfBirth: "",
    facturas: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFacturaUpload = (e) => {
    const files = Array.from(e.target.files);
    const factura = {
      id: formData.facturas.length + 1,
      file: files[0],
      direction: "",
      cp: "",
      solicitante: null,
    };
    setFormData({
      ...formData,
      facturas: [...formData.facturas, factura],
    });
  };

  const handleFacturaUpdate = (factura) => {
    const updatedFacturas = [...formData.facturas];
    const index = updatedFacturas.findIndex((f) => f.id === factura.id);
    updatedFacturas[index] = factura;
    setFormData({
      ...formData,
      facturas: updatedFacturas,
    });
  };

  const handleRemoveFactura = (index) => {
    const updatedFiles = [...formData.facturas];
    updatedFiles.splice(index, 1);
    setFormData({
      ...formData,
      facturas: updatedFiles,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.elements);
    console.log(event.target.direction.value);

    console.log(formData);
  };

  const fullName = `${formData.name} ${formData.surname}`;

  return (
    <div style={formContainerStyles}>
      <form style={formStyles} onSubmit={handleSubmit}>
        {JIRO_FORM_INPUTS.map((input, index) => (
          <InputComponent
            key={index}
            {...input}
            onChange={(e) => handleInputChange(e)}
          />
        ))}

        <div>
          <label htmlFor="tipo" style={{ marginRight: "1rem" }}>
            Tipo de usuario:
          </label>
          <select id="tipo" defaultValue="particular">
            <option value="particular">Particular</option>
            <option value="empresa">Empresa</option>
          </select>
        </div>

        <div>
          <label htmlFor="facturas" style={{ marginRight: "1rem" }}>
            Upload PDF:
          </label>
          <input
            type="file"
            id="facturas"
            name="facturas"
            multiple
            onChange={handleFacturaUpload}
            required
          />
        </div>

        {formData.facturas.length > 0 && (
          <>
            {formData.facturas.map((factura, index) => (
              <FacturaCard
                factura={factura}
                nombre={fullName}
                key={index}
                updateFactura={handleFacturaUpdate}
              />
            ))}
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JiroForm;
