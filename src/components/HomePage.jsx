import React, { useEffect, useState} from "react";
import { toast, Toaster } from "react-hot-toast"; 
import { languageOptions } from "../config/languageOptions";
import { useCompile, useTheme } from "../hooks/hooksExpo";
import {
  CodeEditor,
  ResultWindow,
  ResultDetails,
  ThemeSelector,
  LanguagesDropdown,
  Navbar,
  Footer,
} from "./componentsExpo";


const HomePage = () => {
  const [code, setCode] = useState(`code here`);

  return (
    <>
      <Navbar handleThemeChange={handleThemeChange} />
      <div className="flex flex-row gap-8 mt-4 flex-wrap md:flex-nowrap">
        <div className="px-4 py-2 flex items-center gap-4">
          <span className="text-xl font-bold text-gray-800">🌐</span>

          <h1 className="text-xl font-bold text-gray-800 font-mono">
            Language:
          </h1>

        <div className="px-4 py-2">
          <span className="text-xl font-bold text-gray-800"></span>

          <h1 className="text-xl font-bold text-gray-800 font-mono">Theme:</h1>
        </div>
      </div>

      <div className="flex flex-row space-x-4 items-start px-4 pt-4 flex-wrap md:flex-nowrap">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <CodeEditor
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>

        <div className="right-container flex flex-shrink-0 sm:w-[30%] flex-col">

          <ResultWindow outputDetails={outputDetails} />
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-12">
              <button
                onClick={handleCompile}
                disabled={!code}
                className={`mt-4 w-full  min-w-[200px] border-2 border-indigo-600 text-indigo-600 rounded-md px-6 py-3 font-medium transition-all duration-200 ease-in-out hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 ${
                  !code ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {processing ? "Processing..." : "Compile and Execute"}
              </button>

              {outputDetails && <ResultDetails outputDetails={outputDetails} />}
            </div>
          </div>
        </div>
      </div>

      {/* footer here */}
    </>
  );
};

export default HomePage;
