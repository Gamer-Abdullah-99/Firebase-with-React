import React from "react";
import Routes from "./configs/routes";
import ContextProvider from "./context/context";
import Signup from "./screens/signup";
import Nav from "./components/navbar";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Signup />
      </Routes>
    </ContextProvider>
  );
}

export default App;
