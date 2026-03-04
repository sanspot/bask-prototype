import { createBrowserRouter } from "react-router";
import ChoosePlan from "./pages/ChoosePlan";
import ShippingDetails from "./pages/ShippingDetails";
import ReviewOrder from "./pages/ReviewOrder";
import OrderConfirmation from "./pages/OrderConfirmation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ChoosePlan,
  },
  {
    path: "/shipping",
    Component: ShippingDetails,
  },
  {
    path: "/review",
    Component: ReviewOrder,
  },
  {
    path: "/confirmation",
    Component: OrderConfirmation,
  },
]);
