import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Animals } from "./pages/Animals/Animals";
import { Error404 } from "./pages/Error/Error";
import { About } from "./pages/About/About";
import { Gallery } from "./pages/Gallery/Gallery";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";
import { Animal } from "./pages/Animal/Animal";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Error404 />
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
          errorElement={
            <>
              <Header />
              <Error404 />
            </>
          }
        ></Route>
        <Route
          path="/animals"
          element={
            <>
              <Header />
              <Search />
              <Animals />
              <Footer />
            </>
          }
          errorElement={
            <>
              <Header />
              <Error404 />
            </>
          }
        ></Route>
        <Route
          path="/animal"
          element={
            <>
              <Header />
              <Search />
              <Animal />
              <Footer />
            </>
          }
          errorElement={
            <>
              <Header />
              <Error404 />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
          errorElement={
            <>
              <Header />
              <Error404 />
            </>
          }
        ></Route>
        <Route
          path="/gallery"
          element={
            <>
              <Header />
              <Gallery />
              <Footer />
            </>
          }
          errorElement={
            <>
              <Header />
              <Error404 />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
