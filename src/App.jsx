import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import NewCustomer from "./pages/NewCustomer";
import NewWorkOrder from "./pages/NewWorkOrder";
import NewInvoice from "./pages/NewInvoice";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
