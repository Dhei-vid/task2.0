import React, { ChangeEvent } from "react";
import "./text-input.styles.scss";

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder = "Enter text...",
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={"input"}
    />
  );
};

export default TextInput;
