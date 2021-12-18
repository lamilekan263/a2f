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
      
        >
           <button
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            
          >
           {buttonTitle}
          </button>
         
        </Link>
      </div>
    </Card>
  );
};

export default SectionBoxTwo;
