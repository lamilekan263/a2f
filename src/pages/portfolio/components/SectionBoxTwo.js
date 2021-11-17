import React from "react";
import { Card, CardBody, Badge, Button } from "@windmill/react-ui";

const SectionBoxTwo = ({title, buttonTitle,text}) => {
  return (
    <Card className="my-4 p-10">
      <h2 className="font-sembold text-lg">{ title }</h2>

      <div className="flex flex-col items-center justify-center">
        <p className="font-light mb-2">
          {text}
        </p>

        <Button className="my-3 px-3 py-2 bg-primary">{ buttonTitle }</Button>
      </div>
    </Card>
  );
};

export default SectionBoxTwo;
