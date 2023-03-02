import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
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
          path: "create-project",
          element: <CreateProjectPage />
        },
        {
          path: "all-projects",
          element: <AllProjectsPage />
        },
        {
          path: "create-project/:id",
          element: <CreateProjectPage />
        },
      ],
    },
  ]);

  return (
    <div>
      <DeviceProvider>
        <ProjectProvider>
        <RouterProvider router={router} />
        </ProjectProvider>
      </DeviceProvider>


    </div>
  );
}

export default App;
