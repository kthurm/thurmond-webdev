import { useState } from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen z-10">
      <div className="flex-grow">
        <div className="fixed top-0 w-full h-20 flex flex-col bg-dark">
          <div className="max-w-screen-lg mx-auto text-5xl p-6 rounded-full  text-light">
            Kara Thurmond
          </div>
        </div>
        <div className="mt-20 w-full h-full flex flex-col bg-light">
          <div className="max-w-screen-lg mx-auto text-midtone py-20 text-5xl">
            Skills
          </div>
        </div>
        <div className="w-full h-full flex flex-col bg-lightest z-20">
          <div className="max-w-screen-lg mx-auto text-midtone py-20 text-5xl">
            Sites
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col bg-dark">
        <div className="max-w-screen-lg mx-auto text-light">footer</div>
      </div>
    </div>
  );
}

export default App;
