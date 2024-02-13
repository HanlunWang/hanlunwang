import React from "react";

const EducationResume = ({
  universityName,
  universityDate,
  universityPara,
}) => {
  return (
    <div className="mt-2">
      <h2 className="text-lg">{universityName}</h2>
      <h3 className="text-sm opacity-75">{universityDate}</h3>
      <p className="text-sm mt-2 opacity-50">
        {universityPara}
      </p>
    </div>
  );
};

export default EducationResume;
