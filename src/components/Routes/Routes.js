import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import PhotoGallery from "../Pages/GalleryPage/PhotoGallery/PhotoGallery";
import HomeFlex from "../Pages/Homepage/HomeFlex";
import NOCFlex from "../Pages/NOCPage/NOCFlex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomeFlex></HomeFlex>,
      },
      {
        path: "/noc",
        element: <NOCFlex></NOCFlex>,
      },
      {
        path: "/photo-gallery",
        element: <PhotoGallery></PhotoGallery>,
      },
    ],
  },
]);

export default router;
