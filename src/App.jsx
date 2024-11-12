import { Route, Routes } from "react-router-dom";
import { Landing } from "./Landing_Page/Landing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
