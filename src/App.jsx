import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Gallery } from "./pages/Gallery/Gallery";
import { Catalog } from "./pages/Catalog/Catalog";
import { Animal } from "./pages/Animal/Animal";
import { Error404 } from "./pages/Error/Error";
import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Footer } from "./components/Footer/Footer";

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
          path="/catalog "
          element={
            <>
              <Header />
              <Search />
              <Catalog />
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
