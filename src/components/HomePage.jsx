import React, { useState } from "react";
import Navbar from "./Navbar";
import CodeEditor from "./CodeEditor";

const HomePage = () => {
  const [code, setCode] = useState(`code here`);

  return (
    <>
      <Navbar handleThemeChange={handleThemeChange} />
      <div className="flex">
        <span className="text-xl font-bold text-gray-800"></span>

        <h1 className="text-xl font-mono">Language:</h1>

        <div className="px-4 py-2">
          <span className="text-xl font-bold text-gray-800"></span>

          <h1 className="text-xl font-bold text-gray-800 font-mono">Theme:</h1>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="">
          <CodeEditor code={code} onChange={onChange} />
        </div>

        <div className=""></div>
      </div>

      {/* footer here */}
    </>
  );
};

export default HomePage;
