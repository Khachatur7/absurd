import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Loading from "./pages/Loading/Loading";
import Prequel from "./pages/Prequel/Prequel";
import Layout from "./layout/Layout";
import Shop from "./pages/Shop/Shop";
import Territories from "./pages/Territories/Territories";
import Tasks from "./pages/Tasks/Tasks";
import Warehouse from "./pages/Warehouse/Warehouse";
import Profile from "./pages/Profile/Profile";
import Statisics from "./pages/Statisics/Statisics";
import Alliance from "./pages/Alliance/Alliance";
import AllianceManagement from "./pages/AllianceManagement/AllianceManagement";
import Wallet from "./pages/Wallet/Wallet";
import Rating from "./pages/Rating/Rating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/prequel",
    element: <Prequel />,
  },
  {
    path: "/absurd",
    element: <Layout />,
    children: [
      { path: "", element: <Territories /> },
      { path: "territories", element: <Territories /> },
      { path: "shop", element: <Shop /> },
      { path: "warehouse", element: <Warehouse /> },
      { path: "tasks", element: <Tasks /> },
      { path: "profile", element: <Profile /> },
      { path: "statistics", element: <Statisics /> },
      { path: "alliance", element: <Alliance /> },
      { path: "managment", element: <AllianceManagement /> },
      { path: "wallet", element: <Wallet /> },
      { path: "rating", element: <Rating /> },
    ],
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
