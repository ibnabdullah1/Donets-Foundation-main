import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CardItemDetails from "../pages/CardItemDetails/CardItemDetails";
import Donations from "../pages/Donations/Donations";
// import CardItems from "../pages/CardItems/CardItems";

const DonationRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },

      {
        path: "/cards/:id",
        element: <CardItemDetails />,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <Donations />,
      },
      {
        path: "/statistics",
        element: <h2>Statistics</h2>,
      },
    ],
  },
]);

export default DonationRoute;
