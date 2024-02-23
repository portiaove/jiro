export const JIRO_FORM_INPUTS = [
  {
    type: "text",
    id: "name",
    name: "name",
    labelText: "Nombre",
    pattern: "^.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*$",
    errorMessage: "Por favor, introduce un nombre válido",
    required: true,
  },
  {
    type: "text",
    id: "surname",
    name: "surname",
    labelText: "Apellidos",
    pattern: "^.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*$",
    errorMessage: "Por favor, introduce apellidos válidos",
    required: true,
  },
  {
    type: "text",
    id: "dni",
    name: "dni",
    labelText: "DNI/NIF",
    // pattern: "^[A-Va-w][0-9]{8}[A-Z]$|^[0-9]{7}[0-9A-Ja]$",
    errorMessage: "Por favor, introduzco 8 digitos + Letra de control",
    required: true,
  },
  {
    type: "email",
    id: "email",
    name: "email",
    labelText: "Email",
    // prettier-ignore
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$",
    errorMessage: "Por favor, introduzca un email válido",
    required: true,
  },
  {
    type: "text",
    id: "phone",
    name: "phone",
    labelText: "Teléfono",
    pattern: "^[0-9]{9,13}$",
    errorMessage: "Por favor, introduzca un número de teléfono válido",
    required: true,
  },
];

export const FACTURA_CARD_INPUTS = [
  {
    type: "text",
    id: "direction",
    name: "direction",
    labelText: "Dirección",
    pattern: "^[A-Za-z0-9s,.'-]{3,}$",
    errorMessage: "Por favor, introduzca una dirección",
    required: true,
  },
  {
    type: "text",
    id: "cp",
    name: "cp",
    labelText: "Código Postal",
    pattern: "^[0-9]{5}$",
    errorMessage: "Por favor, introduzca un código postal válido",
    required: true,
  },
];
