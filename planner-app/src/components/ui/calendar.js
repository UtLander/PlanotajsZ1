import { useState } from "react";

export function Calendar({ selected, onSelect }) {
  const [date, setDate] = useState(selected || new Date());

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
    onSelect(newDate);
  };

  return (
    <input
      type="date"
      value={date.toISOString().split("T")[0]}
      onChange={handleDateChange}
      className="border rounded-md p-2"
    />
  );
}
