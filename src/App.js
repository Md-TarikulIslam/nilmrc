import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";

function App() {
  return (
    <div className="main-card max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
