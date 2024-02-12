import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

const SelectComponent = ({ options, setSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (event) => {
    const code = event.target.value;
    const selectedObj = options.find((option) => option.code === code);
    setSelectedOption(selectedObj);
    setSelected(selectedObj);
  };

  return (
    <>
      {options.length && (
        <Select
          size="md"
          variant="flushed"
          placeholder="Choose a color"
          code={selectedOption?.code || ""}
          onChange={handleChange}
        >
          {options.map((option) => (
            <option key={option.code} value={option.code}>
              {option.displayName}
            </option>
          ))}
        </Select>
      )}
    </>
  );
};

export default SelectComponent;
