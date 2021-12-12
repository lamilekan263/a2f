import React from "react";
import { Card } from "@windmill/react-ui";
import { Link } from "react-router-dom";

const SectionBoxTwo = ({title, buttonTitle,text}) => {
  return (
    <Card className="my-4 p-10 shadow-lg">
      <h2 className="font-semibold text-lg">{title}</h2>

      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm  text-center my-2">{text}</p>

        <Link
          to="/app/portfolio/assets"
          className="my-3 px-3 py-2 bg-primary text-white"
        >
          {buttonTitle}
        </Link>
      </div>
    </Card>
  );
};

export default SectionBoxTwo;
