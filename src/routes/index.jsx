import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../features/home/home";


const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                path:"home",
                element:<Home/>
            }
        ]
    }
])

export default router;