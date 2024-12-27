import React from "react";

const ResultDetails = ({ outputDetails }) => {
  return (
    <div className="">
      <p className="text-sm font-medium text-gray-700">
        Status:{outputDetails?.status?.description}
      </p>

      <p className="text-sm font-medium text-gray-700">
        Memory:{outputDetails?.memory}
      </p>

      <p className="text-sm font-medium text-gray-700">
        Time:{outputDetails?.time}
      </p>
    </div>
  );
};

export default ResultDetails;

//till here
