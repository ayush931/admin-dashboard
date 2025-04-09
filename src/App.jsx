import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import MyContext from "./context/MyContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import ProductDialog from "./components/ProductDialog";
import HomeSliderBanners from "./pages/HomeSliderBanners";
import CategoryList from "./pages/CategoryList";
import SubCategoryList from "./pages/SubCategoryList";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyAccount from "./pages/VerifyAccount";
import ChangePassword from "./pages/ChangePassword";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenFullScreenPanel, setIsOpenFullSCreenPanel] = useState({
    open: false,
    model: "Add Products",
  });

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullSCreenPanel,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden transition-all ${
                isSidebarOpen ? "w-[18%]" : "w-0%"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 transition-all ${
                !isSidebarOpen ? "w-[100%]" : "w-[82%]"
              }`}
            >
              <Dashboard />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      exact: true,
      element: (
        <>
          <Signup />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden transition-all ${
                isSidebarOpen ? "w-[18%]" : "w-0%"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 transition-all ${
                !isSidebarOpen ? "w-[100%]" : "w-[82%]"
              }`}
            >
              <Products />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/homeSlider/list",
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden transition-all ${
                isSidebarOpen ? "w-[18%]" : "w-0%"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 transition-all ${
                !isSidebarOpen ? "w-[100%]" : "w-[82%]"
              }`}
            >
              <HomeSliderBanners />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/category/list",
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden transition-all ${
                isSidebarOpen ? "w-[18%]" : "w-0%"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 transition-all ${
                !isSidebarOpen ? "w-[100%]" : "w-[82%]"
              }`}
            >
              <CategoryList />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/subcategory/list",
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden transition-all ${
                isSidebarOpen ? "w-[18%]" : "w-0%"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 transition-all ${
                !isSidebarOpen ? "w-[100%]" : "w-[82%]"
              }`}
            >
              <SubCategoryList />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/users",
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden transition-all ${
                isSidebarOpen ? "w-[18%]" : "w-0%"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 transition-all ${
                !isSidebarOpen ? "w-[100%]" : "w-[82%]"
              }`}
            >
              <Users />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/orders",
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={`sidebarWrapper overflow-hidden transition-all ${
                isSidebarOpen ? "w-[18%]" : "w-0%"
              }`}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 transition-all ${
                !isSidebarOpen ? "w-[100%]" : "w-[82%]"
              }`}
            >
              <Orders />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/forgotPassword",
      exact: true,
      element: (
        <>
          <ForgotPassword />
        </>
      ),
    },
    {
      path: "/verifyAccount",
      exact: true,
      element: (
        <>
          <VerifyAccount />
        </>
      ),
    },
    {
      path: "/changePassword",
      exact: true,
      element: (
        <>
          <ChangePassword />
        </>
      ),
    },
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
      <ProductDialog />
    </MyContext.Provider>
  );
}

export default App;
