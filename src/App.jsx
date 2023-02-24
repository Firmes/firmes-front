import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

function App() {
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
      <MouseTracker />
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
