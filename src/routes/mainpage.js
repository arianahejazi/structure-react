import React from "react";
const LandingPage = React.lazy(() => import('../app/scenes/landingPage'));
const Login = React.lazy(() => import('../app/scenes/login'));
const routes= [
    {
        path:'/',
        component:LandingPage,
        permission:'all', ///all,trust,guest
        layout:'global'
    },
    {
        path:'/login',
        component:Login,
        permission:'guest', ///all,trust,guest
        layout:'auth'
    }

];


export default routes;