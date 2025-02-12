import React from "react";

export default function Result() {
  return (
    <div className="flex flex-col justify-center items-center mt-5 h-[80vh]">
      <h1 className="text-4xl text-green-600 font-medium mb-5">Irnr</h1>
      <p className="text-lg font-medium mb-10">Questions Right: 0111</p>

      <button className="bg-green-600 text-white font-bold py-2 px-4 ">
        TRY ANOTHER QUIZ
      </button>
    </div>
  );
}
