import React from "react";
import { Card,  Button } from "@windmill/react-ui";

const SectionBoxTwo = ({title, buttonTitle,text}) => {
  return (
    <Card className="my-4 p-10 shadow-lg">
      <h2 className="font-semibold text-lg">{ title }</h2>

      <div className="flex flex-col items-center justify-center">
        <p className="font-light text-sm  text-center my-2">
          {text}
        </p>

        <Button className="my-3 px-3 py-2 bg-primary">{ buttonTitle }</Button>
      </div>
    </Card>
  );
};

export default SectionBoxTwo;
