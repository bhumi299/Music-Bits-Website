import React from 'react';

const Error = ({title}) => (
  <div className="w-full flex justify-center items-center flex-col">
    <h1 className="font-bold text-5xl text-pink-300 mt-2">
      {title || "error...!"}
    </h1>
  </div>
);

export default Error;
