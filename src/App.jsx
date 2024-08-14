import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import NewCustomer from "./pages/NewCustomer";
import NewWorkOrder from "./pages/NewWorkOrder";
import NewInvoice from "./pages/NewInvoice";
import SearchCustomer from "./pages/SearchCustomer";
import NewStatement from "./pages/NewStatement";
import SearchWorkOrder from "./pages/SearchWorkOrder";
import SearchInvoice from "./pages/SearchInvoice";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/new-customer",
          element: <NewCustomer />,
        },
        {
          path: "/new-work-order",
          element: <NewWorkOrder />,
        },
        {
          path: "/new-invoice",
          element: <NewInvoice />,
        },
        {
          path: "/new-statement",
          element: <NewStatement />,
        },
        {
          path: "/search-customer",
          element: <SearchCustomer />,
        },
        {
          path: "/search-Workorder",
          element: <SearchWorkOrder />,
        },
        {
          path: "/search-invoice",
          element: <SearchInvoice />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
