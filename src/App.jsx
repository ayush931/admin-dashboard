import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useEffect, useState } from "react";
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
import toast, { Toaster } from "react-hot-toast";
import { fetchDataFromApi } from "./utils/api";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isOpenFullScreenPanel, setIsOpenFullSCreenPanel] = useState({
    open: false,
    model: "Add Products",
    id: ""
  });
  const [categoryData, setCategoryData] = useState([])

  function openAlertBox(status, message) {
    console.log(status);
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }

  useEffect(() => {
    fetchDataFromApi("/api/category").then((res) => {
      setCategoryData(res.data)
    })
  }, [isOpenFullScreenPanel])

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token !== null && token !== undefined && token !== "") {
      fetchDataFromApi("/api/user/userDetails").then((res) => {
        console.log(res);
        if (res?.message === "You have not login") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          openAlertBox("error", "Your session is closed, please login");
          window.location.href = "/login";
          setIsLogin(false);
        }
        setIsLogin(true);
        setUserData(res.user);
      });
    }
  }, [isLogin]);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLogin,
    setIsLogin,
    isOpenFullScreenPanel,
    setIsOpenFullSCreenPanel,
    loading,
    setLoading,
    openAlertBox,
    userData,
    setUserData,
    categoryData,
    setCategoryData
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
    {
      path: "/profile",
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
              <Profile />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: "/product/:id",
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
              <ProductDetails />
            </div>
          </div>
        </section>
      ),
    },
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
      <ProductDialog />
      <Toaster
        position="top-right"
        gutter={8}
        toastOptions={{
          success: {
            style: {
              background: "#2c8790", // Green background for success
              color: "#ffffff", // White text
              padding: "16px",
              borderRadius: "8px",
              width: "1000px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            },
            iconTheme: {
              primary: "#ffffff", // White icon
              secondary: "#2c8790", // Green background for icon
            },
          },
          error: {
            style: {
              background: "#e84344", // Red background for error
              color: "#ffffff", // White text
              padding: "16px",
              borderRadius: "8px",
              width: "1000px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            },
            iconTheme: {
              primary: "#ffffff", // White icon
              secondary: "#e84344", // Red background for icon
            },
          },
        }}
      />
    </MyContext.Provider>
  );
}

export { MyContext };
export default App;
