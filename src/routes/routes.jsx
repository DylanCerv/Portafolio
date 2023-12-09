import { createBrowserRouter } from "react-router-dom";

/** **** **** **** **** *****
 * PAGES
 **** **** **** **** ***** */
import Landing from "../pages/Landing";
import PageNotFound from "../pages/Errors/PageNotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        children: [

        ]
    },



    {
        path: '*',
        element: <PageNotFound />
    }
]);