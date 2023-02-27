import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/Layout/ErrorPage";
import { FirmesLayout } from "./components/Layout/FirmesLayout";
import { MouseTracker } from "./components/UI/MouseTracker";
import { DeviceProvider } from "./context/DeviceContext";
import { AboutUs } from "./pages/About Us/AboutUs";
import { ChillLayout } from "./pages/Chill/ChillLayout";
import { ContactLayout } from "./pages/Contact";
import { CreatorsLayout } from "./pages/Creators/CreatorsLayout";
import { HomeLayout } from "./pages/Home/HomeLayout";
import { SouvenirsLayout } from "./pages/Souvenirs/SouvenirsLayout";
import { WorkLayout } from "./pages/Work/index";
import { WorkDetailLayout } from "./pages/WorkDetail/WorkDetailLayout";

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
      ],
    },
  ]);

  return (
    <div>
      <DeviceProvider>
        <MouseTracker />
        <RouterProvider router={router} />
      </DeviceProvider>


    </div>
  );
}

export default App;
