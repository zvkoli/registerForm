const Field = ({ className , maxLength , type , placeholder , value , onChange}) => {
  return (
    <input
    className={className}
    maxLength={maxLength}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    />
  );
}

export default Field;