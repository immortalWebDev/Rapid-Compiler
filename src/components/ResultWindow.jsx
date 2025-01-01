import React from "react";

const ResultWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-400">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-400">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    }
  };
  return (
    <>
      <h1 className="">Output here:</h1>
      <div className="w-full h-50 ">
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </>
  );
};

export default ResultWindow;
