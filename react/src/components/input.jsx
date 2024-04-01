export default function InputField({ id, label, type, name, value, onChange }) {
  return (
    <div className="inputField">
      <label>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
    </div>
  );
}
