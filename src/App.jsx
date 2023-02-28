import React, { useState, createContext } from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/Layout/ErrorPage";
import { FirmesLayout } from "./components/Layout/FirmesLayout";
import { MouseTracker } from "./components/UI/MouseTracker";
import { AboutUs } from "./pages/About Us/AboutUs";
import { ChillLayout } from "./pages/Chill/ChillLayout";
import { ContactLayout } from "./pages/Contact";
import { CreatorsLayout } from "./pages/Creators/CreatorsLayout";
import { HomeLayout } from "./pages/Home/HomeLayout";
import { SouvenirsLayout } from "./pages/Souvenirs/SouvenirsLayout";
import { WorkLayout } from "./pages/Work/index";
import { WorkDetailLayout } from "./pages/WorkDetail/WorkDetailLayout";
import CreateProjectPage from "./pages/CreateProject/CreateProject.page";
import AllProjectsPage from "./pages/AllProjects/AllProjects.page";
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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirmesLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomeLayout /> },
        {
          path: "creators",
          element: <CreatorsLayout />,
        },
        {
          path: "work",
          element: <WorkLayout />,
        },
        {
          path: "work/work-detail/:id",
          element: <WorkDetailLayout />
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "skills",
          element: <CreatorsLayout />,
        },
        {
          path: "souvenirs",
          element: <SouvenirsLayout />,
        },
        ,
        {
          path: "chill",
          element: <ChillLayout />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
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
      <div>
        <MouseTracker />
        <RouterProvider router={router} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
