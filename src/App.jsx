import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Animals } from "./pages/Animals/Animals";
import { Animal } from "./pages/Animal/animal";
import { Error404 } from "./pages/Error/Error";
import { About } from "./pages/About/About";
import { Gallery } from "./pages/Gallery/Gallery";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header/>
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
              <Header/>
              <Animals />
            </>
          }
          errorElement={
            <><Error404/></>
          }
        ></Route>
        <Route
          path="/animal"
          element={
            <>
              <Header/>
              <Animal />
            </>
          }
          errorElement={
            <><Error404/></>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Header/>
              <About />
            </>
          }
          errorElement={
            <><Error404/></>
          }
        ></Route>
        <Route
          path="/gallery"
          element={
            <>
              <Header/>
              <Gallery />
            </>
          }
          errorElement={
            <><Error404/></>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Error404/>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
