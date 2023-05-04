import React, { useState, createContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/Layout/ErrorPage";
import { FirmesLayout } from "./components/Layout/FirmesLayout";
import { DeviceProvider } from "./context/DeviceContext";
import { AboutUs } from "./pages/About Us/AboutUs";
import { ContactLayout } from "./pages/Contact";
import { HomeLayout } from "./pages/Home/HomeLayout";
import { WorkLayout } from "./pages/Work/index";
import { WorkDetailLayout } from "./pages/WorkDetail/WorkDetailLayout";
import CreateProjectPage from "./pages/CreateProject/CreateProject.page";
import AllProjectsPage from "./pages/AllProjects/AllProjects.page";
import { ProjectProvider } from "./context/ProjectsContext";
import AdminLoginPage from "./pages/AdminLogin/AdminLogin.page";

export const UserContext = createContext();



const ProtectedAdminRoute = ({ user, redirectPath = '/admin-login', children }) => {

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;

};


function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    document.querySelectorAll('.js-marquee').forEach(function (e) {
      var letter = e.querySelector('p');
      for (let counter = 1; counter <= 3; ++counter) {
        var clone = letter.cloneNode(true);
        letter.after(clone);
      }
    })
  }, [])


  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirmesLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "", element: <HomeLayout />,
        },
        {
          path: "work",
          element: <WorkLayout />,
        },
        {
          path: "work/:id",
          element: <WorkDetailLayout />
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
        },
        {
          path: "*",
          element: <HomeLayout />,
        },
        {
          path: "create-project",
          element: <ProtectedAdminRoute user={user}><CreateProjectPage /></ProtectedAdminRoute>
        },
        {
          path: "all-projects",
          element: <ProtectedAdminRoute user={user}><AllProjectsPage /></ProtectedAdminRoute>
        },
        {
          path: "edit-project/:id",
          element: <ProtectedAdminRoute user={user}><CreateProjectPage /></ProtectedAdminRoute>
        },
        {
          path: "admin-login",
          element: <AdminLoginPage />
        },
        {
          path: "admin-create",
          element: <AdminLoginPage />
        }
      ],
    },
  ]);

  return (

    <UserContext.Provider value={{ user, setUser }}>
      <DeviceProvider>
        <ProjectProvider>
          <RouterProvider router={router} />
        </ProjectProvider>
      </DeviceProvider>
    </UserContext.Provider>

  );
}

export default App;
