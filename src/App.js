import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";
import ScrollToTop from "react-scroll-to-top";
import icon from "../src/components/assets/images/main/up.png";

function App() {
  return (
    <div className="main-card max-w-screen-xl mx-auto">
      <ScrollToTop
        smooth
        component={<img style={{ padding: "5px" }} src={icon} alt="up" />}
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
