import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Code from "./pages/Code";
import { useState } from "react";

type User = {
  name: string;
  mobile: string;
  password: string;
};

function App() {
  const [userValue, setUserValue] = useState<User | null>(null);
  const getUserValue = (data: {
    name: string;
    mobile: string;
    password: string;
  }) => {
    if (data) setUserValue(data);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login getValue={getUserValue} />} />
          <Route
            path="/code"
            element={<Code mobile={userValue?.mobile || ""} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
