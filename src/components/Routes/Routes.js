import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import PhotoGallery from "../Pages/GalleryPage/PhotoGallery/PhotoGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
        path:'/photo-gallery',
        element:<PhotoGallery></PhotoGallery>
    }]
  },
]);

export default router;
