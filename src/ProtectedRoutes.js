// import React from "react";
// import { Outlet, Navigate } from 'react-router-dom';
//
// const PrivateRoute = () => {
//     let auth = {'token':true}
//     return (
//         auth.token ? <Outlet/> : <Navigate to='/login'/>
//     )
// }
//
// export default PrivateRoute;
// import { Navigate, Route } from "react-router-dom";
//
// function PrivateRoute({ component: Component, ...restOfProps }) {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     console.log("this", isAuthenticated);
//
//     return (
//         <Route
//             {...restOfProps}
//             render={(props) =>
//                 isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />
//             }
//         />
//     );
// }
//
// export default PrivateRoute;
import {Outlet, Navigate} from "react-router";
import Login from "./views/pages/anons/Login";


    const useAuth = () => {
        const user = {loggedIn: false};
        return user && user.loggedIn;
    };

    const ProtectedRoutes = () => {
        const isAuth = useAuth();
        return isAuth ? <Outlet/> : <Navigate to={<Login/>}/>;
    };

export default ProtectedRoutes;