import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Animals } from "./pages/Animals/Animals";
import { Animal } from "./pages/Animal/animal";
import { Error404 } from "./pages/Error/Error";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
          errorElement={
            <><Error404/></>
          }
        ></Route>
        <Route
          path="/animals"
          element={
            <>
              <Animals />
            </>
          }
        ></Route>
        <Route
          path="/animal"
          element={
            <>
              <Animal />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
