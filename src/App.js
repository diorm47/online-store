import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import Error404 from "./components/error/error";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";
import Navbar from "./components/nav-bar/nav-bar";
import Search from "./components/search/search";
import { setAuthorized } from "./redux/auth-reducer";

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

const Cart = React.lazy(() => import("./pages/added-to-cart/cart"));

function App() {
  const serchingItem = useSelector((state) => state.search.searched);
  const dispatch = useDispatch();

  if (localStorage.getItem("authorized")) {
    dispatch(setAuthorized(true));
  }

  return (
    <div className="main_wrapper">
      <Navbar />

      <div className="content">
        {serchingItem ? (
          <Search />
        ) : (
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to={"/home"} />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/clothes" element={<ClothesPage />} />
              <Route path="/shoes" element={<ShoesPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/profile/*" element={<ProfilePage />} />
              <Route path="/cart/*" element={<Cart />} />

              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;

// {order.reduce((acc, item) => {
//   return acc + item.price;
// }, 0)}
