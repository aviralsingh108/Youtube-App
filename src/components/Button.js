import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <ul>
        <li className="bg-gray-200 rounded-md m-2 px-5 py-2">{name}</li>
      </ul>
    </div>
  );
};

export default Button;
