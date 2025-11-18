import BaseLayout from "@/layouts/baseLayout"
import { Route,Routes } from "react-router-dom"
import { authRoutesPaths, chatRoutesPaths } from "./routes"
import AppLayout from "@/layouts/appLayout"
import RouteGuard from "./route-guard"
const AppRoutes = () =>{
    return (
        <Routes>
            {/* public auth  */}
            <Route path="/" element = {<RouteGuard requireAuth={false}/>}>
                <Route element = {<BaseLayout />}>
                    {/* auth routes */}
                    {authRoutesPaths?.map((route)=>(
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))}
                </Route>
            </Route>

             {/* protected (user login) */}
             <Route path="/" element={<RouteGuard requireAuth={true}/>}>
                <Route element = {<AppLayout />}>
                    {/* auth routes */}
                    {chatRoutesPaths?.map((route)=>(
                        <Route key={route.path} path={route.path} element={route.element}/>
                    ))}
                </Route>
            </Route>


        </Routes>
    )
}
export default AppRoutes