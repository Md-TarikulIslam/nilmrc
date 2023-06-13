import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import HomeFlex from "../Pages/Homepage/HomeFlex";
import NOCFlex from "../Pages/NOCPage/NOCFlex";
import ContactUsPageFlex from "../Pages/ContactUsPage/ContactUsPageFlex";
import InvestigationsPricePageFlex from "../Pages/InvestigationsPricePage/InvestigationsPricePageFlex";
import ICTPageFlex from "../Pages/ICTPage/ICTPageFlex";
import ResearchPageFlex from "../Pages/ResearchPage/ResearchPageFlex";
import JournalPageFlex from "../Pages/JournalPage/JournalPageFlex";
import NoticePageFlex from "../Pages/NoticePage/NoticePageFlex";
import PhotoGalleryFlex from "../Pages/GalleryPage/PhotoGallery/PhotoGalleryFlex";
import Dashboard from "../Shared/Dashboard/Dashboard";

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
        path: "/contact-us",
        element: <ContactUsPageFlex></ContactUsPageFlex>,
      },
      {
        path: "/investigations-price",
        element: <InvestigationsPricePageFlex></InvestigationsPricePageFlex>,
      },
      {
        path: "/ict",
        element: <ICTPageFlex></ICTPageFlex>,
      },
      {
        path: "/research",
        element: <ResearchPageFlex></ResearchPageFlex>,
      },
      {
        path: "/journal",
        element: <JournalPageFlex></JournalPageFlex>,
      },
      {
        path: "/notice",
        element: <NoticePageFlex></NoticePageFlex>,
      },
      {
        path: "/photo-gallery",
        element: <PhotoGalleryFlex></PhotoGalleryFlex>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
 
]);

export default router;
