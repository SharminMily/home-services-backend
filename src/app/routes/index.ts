import express from "express";
import { UserRoute } from "../modules/User/user.routes";
import { ServiceRouter } from "../modules/Service/service.routes";
import { AuthRoutes } from "../modules/Auth/auth.router";
import { CategoryRouter } from "../modules/Category/category.routers";
import { LocationRouter } from "../modules/AvailableLocation/location.routers";

const router = express.Router();

const moduleRoutes =[
    {
        path: '/users',
        route: UserRoute
    },
    {
        path: '/auth',
        route: AuthRoutes
    },
        {
        path: '/categories',
        route: CategoryRouter
    },

    {
        path: '/services',
        route: ServiceRouter
    },
    {
        path: '/locations',
        route: LocationRouter
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;