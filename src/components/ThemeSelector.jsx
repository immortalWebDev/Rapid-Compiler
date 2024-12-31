import React from "react";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";
import { themeStyles} from "../config/themeStyles";

const ThemeSelector = ({ handleThemeChange, theme }) => {

  return (
    <Select
      placeholder="Select Theme"
      value={theme}
      styles={themeStyles}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeSelector;
