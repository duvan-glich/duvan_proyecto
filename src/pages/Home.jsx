import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { enrutadorApp } from "../routes/enrutador"; 

const Home = () => {
    const router = createBrowserRouter(enrutadorApp);
    return <RouterProvider router={router} />;
};

export default Home;
