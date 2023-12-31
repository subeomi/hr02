import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import { Suspense, lazy } from "react";
import LoadingPage from "../pages/LoadingPage";

const Loading = <LoadingPage></LoadingPage>
const Board_Index = lazy(() => import("../pages/board/IndexPage"))
const Board_List = lazy(() => import("../pages/board/ListPage"))
const Board_Read = lazy(() => import("../pages/board/ReadPage"))
const Board_Reg = lazy(() => import("../pages/board/RegisterPage"))
const Board_Mod = lazy(() => import("../pages/board/ModifyPage"))

const router = createBrowserRouter([
    {
        path: "",
        element: <MainPage></MainPage>
    },
    {
        path: "about",
        element: <AboutPage></AboutPage>
    },
    {
        path: "board",
        element: <Suspense fallback={Loading}><Board_Index/></Suspense>,
        children: [
            {
                path: "list",
                element: <Suspense fallback={Loading}><Board_List/></Suspense>
            },
            {
                path: "read/:bno",
                element: <Suspense fallback={Loading}><Board_Read/></Suspense>
            },
            {
                path: "register",
                element: <Suspense fallback={Loading}><Board_Reg/></Suspense>
            },
            {
                path: "modify/:bno",
                element: <Suspense fallback={Loading}><Board_Mod/></Suspense>
            }
        ]
    }
])

export default router;