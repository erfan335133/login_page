import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Code from "./pages/Code";
import Dashboard from "./pages/Dashboard";

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
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
