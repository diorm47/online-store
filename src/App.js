import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error404 from "./components/error/error";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import Navbar from "./components/nav-bar/nav-bar";

const HomePage = React.lazy(() => import("./pages/home-page/home-page"));
const ShoesPage = React.lazy(() => import("./pages/shoes-page/shoes-page"));
const ClothesPage = React.lazy(() =>
  import("./pages/clothes-page/clothes-page")
);
const AccessoriesPage = React.lazy(() =>
  import("./pages/accessories-page/accessories")
);
const ProfilePage = React.lazy(() =>
  import("./pages/profile-page/profile-page")
);

const AddedToCart = React.lazy(() =>
  import("./pages/added-to-cart/addedto-cart")
);

function App() {
  return (
    <div className="main_wrapper">
      <Navbar />

      <div className="content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/clothes" element={<ClothesPage />} />
            <Route path="/shoes" element={<ShoesPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="/cart" element={<AddedToCart />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
}

export default App;
