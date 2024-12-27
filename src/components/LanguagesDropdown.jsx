import React from "react";
import Select from "react-select";

const LanguagesDropdown = ({ onSelectChange }) => {
  return (
    <Select
      options={languageOptions}
      styles={themeStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;


