import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import MyContext from "./context/MyContext";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const values = { isSidebarOpen, setIsSidebarOpen };

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
  ]);

  return (
    <MyContext.Provider value={values}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}

export default App;
