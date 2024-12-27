import React, { useState } from "react";

const CodeEditor = (props) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
  };

  return <div className="w-full h-full">
    //Editor component
    </div>;
};
export default CodeEditor;
