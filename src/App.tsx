import { useState } from "react";
// [plugin:vite:import-analysis] Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
// import AxiosOutput from "./apiCaller.js";

import AxiosOutput from "./apiCaller2.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-bold">Hello React & Tailwind!</h1>
      <div className="flex flex-row items-center gap-6">
        <AxiosOutput />
        <button
          className="bg-sky-300 px-3 py-2 rounded hover:bg-sky-400"
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </button>
      </div>
    </main>
  );
}

export default App;
