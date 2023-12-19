import {
  Navigate,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import HomePage from "./Views/HomePage/HomePage";
import Dashboard from "./Views/DashBoard/Dashboard";
import View from "./Views/View/View";
import NewItemPage from "./Views/NewItem/NewItemPage";
import ItemDetail from "./Views/ItemDetail/itemDetail";
import EditItem from "./Views/EditItem/EditItem";
import Login from "./Views/Login/Login";
import GustLayout from "./Views/GustLayout/GustLayout";
import SignUp from "./Views/Signup/SignUp";

const router = createHashRouter([
  {
    path: "/",
    element: <View />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/home", element: <HomePage /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/details/:id", element: <ItemDetail /> },
      { path: "/Admin/create", element: <NewItemPage /> },
      { path: "/Admin/:id/edit", element: <EditItem /> },
    ],
  },
  {
    path: "/",
    element: <GustLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
export default router;
