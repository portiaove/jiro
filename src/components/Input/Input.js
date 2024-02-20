import "./Input.css";

const InputComponent = ({
  type = "text",
  id,
  name,
  pattern,
  placeholder = " ",
  labelText,
  errorMessage,
  disabled = false,
  innerRef,
  required = false,
  ...props
}) => {
  const refProp = innerRef ? { ref: innerRef } : {};
  return (
    <div className="form-group element">
      <input
        {...refProp}
        type={type}
        id={id}
        name={name}
        className="form-control"
        placeholder={placeholder}
        pattern={pattern}
        disabled={disabled}
        required={required}
        {...props}
      />
      <label htmlFor={id} className="form-control-placeholder">
        {labelText}
      </label>
      <span className="error-msg">{errorMessage}</span>
    </div>
  );
};

export default InputComponent;
