import { Suspense, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";

import Routes from "./router/Pages";
import Pages from "./router/Pages";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-stone-800" : "bg-white"} w-full h-screen`}>
      <Navbar setDark={setDark} dark={dark} />
      <Suspense fallback={<p>Loading...</p>}>
        <Pages />
      </Suspense>

      {/* <Dashboard dark={dark} />
     <Login /> */}
    </div>
  );
}

export default App;
