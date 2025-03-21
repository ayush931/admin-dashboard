import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createContext, useState } from "react";

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
  };

  let sidebarClass = "sidebarWrapper transition-all";
  if (isSidebarOpen == true) {
    sidebarClass += " w-[18%]";
  } else {
    sidebarClass += " w-[0%]";
  }

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <section className="main">
          <Header />
          <div className="contentMain flex">
            <div
              className={sidebarClass}
            >
              <Sidebar />
            </div>
            <div
              className={`px-4 py-2 ${
                isSidebarOpen === false ? "w-[100%]" : "w-[82%]"
              } transition-all`}
            >
              <Dashboard />
            </div>
          </div>
        </section>
      ),
    },
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export { MyContext };
export default App;
