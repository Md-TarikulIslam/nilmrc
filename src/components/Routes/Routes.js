import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import PhotoGallery from "../Pages/GalleryPage/PhotoGallery/PhotoGallery";
import HomeFlex from "../Pages/Homepage/HomeFlex";
import NOCFlex from "../Pages/NOCPage/NOCFlex";
import ContactUsPageFlex from "../Pages/ContactUsPage/ContactUsPageFlex";
import InvestigationsPricePageFlex from "../Pages/InvestigationsPricePage/InvestigationsPricePageFlex";
import ICTPageFlex from "../Pages/ICTPage/ICTPageFlex";
import ResearchPageFlex from "../Pages/ResearchPage/ResearchPageFlex";
import JournalPageFlex from "../Pages/JournalPage/JournalPageFlex";
import NoticePageFlex from "../Pages/NoticePage/NoticePageFlex";

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
        element: <PhotoGallery></PhotoGallery>,
      },
    ],
  },
]);

export default router;
