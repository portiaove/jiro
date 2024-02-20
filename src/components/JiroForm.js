import React, { useState, useRef } from "react";
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
  const formRefs = useRef({});
  const setFormRef = (element) => {
    if (element) {
      formRefs.current[element.name] = element;
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    dateOfBirth: "",
    uploadedFiles: [],
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      uploadedFiles: [...formData.uploadedFiles, ...files],
    });
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...formData.uploadedFiles];
    updatedFiles.splice(index, 1);
    setFormData({
      ...formData,
      uploadedFiles: updatedFiles,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Acceder a los valores de los campos a través de formRefs.current
    const formData = Object.keys(formRefs.current).reduce((acc, key) => {
      acc[key] = formRefs.current[key].value;
      return acc;
    }, {});

    console.log(formData);
    // Aquí puedes enviar los datos recopilados en formData
  };

  console.log("hola Jiro Form!");
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
          <label htmlFor="solicitante" style={{ marginRight: "1rem" }}>
            Tipo de usuario:
          </label>
          <select id="solicitante" defaultValue="particular">
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
            onChange={handleFileUpload}
            required
          />
        </div>

        {formData.uploadedFiles.length > 0 && (
          <>
            {formData.uploadedFiles.map((factura, index) => (
              <FacturaCard factura={factura} nombre={fullName} key={index} />
            ))}
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JiroForm;
