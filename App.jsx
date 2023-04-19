import React, { useState } from "react";

let count = 0;
function App() {
  const [count, setCount] = useState(0);

  function decreaseHandeler() {
    setCount(count - 1);
  }

  function increaseHandeler() {
    setCount(count + 1);
  }

  function resetHandeler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment & Decrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
          onClick={decreaseHandeler}
        >
          {" "}l
          -{" "}
        </button>
        <div className="font-bol gap-12 text-5xl">{count}</div>

        <div>
          <button
            className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
            onClick={increaseHandeler}
          >
            +
          </button>
        </div>
        <button
          className="bg-[#0398d4 text-blue px-5 py-5 rounded sm text-lg border-r-2  "
          onClick={resetHandeler}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
