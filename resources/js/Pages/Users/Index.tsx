import React from "react";

interface IndexProps {
  name: string;
  company: string;
}

const index: React.FC<IndexProps> = (props) => {
  return (
    <div>
      <h1 className="font-medium leading-tight text-5xl mt-0 mb-2">
        Users Index Page
      </h1>
      <div>Name: {props.name}</div>
      <div>Company: {props.company}</div>
    </div>
  );
};

export default index;
