import React from "react";
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    let auth = {'token':true}
    return (
        auth.token ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default PrivateRoute;
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