import { createBrowserRouter } from "react-router-dom";
import Carousel from "../Pages/Homepage/Carousel/Carousel";
import Main from "../Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
        path:'/'
    }]
  },
]);

export default router;
