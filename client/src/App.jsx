import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper !overflow-hidden ${
                  "w-[18%]"
                } transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 px-5 transition-all ${
                   "w-[82%]"
                }`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
