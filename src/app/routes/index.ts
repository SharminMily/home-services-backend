import express from "express";
import { UserRoute } from "../modules/User/user.routes";
import { ServiceRouter } from "../modules/Service/service.routes";
import { AuthRoutes } from "../modules/Auth/auth.router";
import { CategoryRouter } from "../modules/Category/category.routers";
import { LocationRouter } from "../modules/AvailableLocation/location.routers";
import LocationsRouter from "../modules/Location/location.routers";
import { DivisionRouter } from "../modules/Location/Division/division.router";
import { DistrictRouter } from "../modules/Location/District/district.router";

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
        path: '/available-locations',
        route: LocationRouter
    },
    {
        path: '/locations',
        route: LocationsRouter
    },
    {
        path: "/divisions",
        route: DivisionRouter
    },
    {
        path: "/district",
        route: DistrictRouter
    },
    // {
    //     path: "/upazila",
    //     route: DivisionRouter
    // },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;