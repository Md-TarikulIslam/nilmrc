import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import PhotoGallery from "../Pages/GalleryPage/PhotoGallery/PhotoGallery";
import NOCPage from "../Pages/NOCPage/NOCPage";
import MainGrid from "../Pages/Homepage/MainGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainGrid></MainGrid>,
      },
      {
        path: "/noc",
        element: <NOCPage></NOCPage>,
      },
      {
        path: "/photo-gallery",
        element: <PhotoGallery></PhotoGallery>,
      },
    ],
  },
]);

export default router;
