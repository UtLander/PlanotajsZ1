export function Input({ value, onChange, placeholder, className }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-md p-2 w-full ${className}`}
      />
    );
  }
  