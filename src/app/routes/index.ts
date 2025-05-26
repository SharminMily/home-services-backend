import express from "express";
import { UserRoute } from "../modules/User/user.routes";
import { ServiceRouter } from "../modules/Service/service.routes";

const router = express.Router();

const moduleRoutes =[
    {
        path: '/users',
        route: UserRoute
    },
    {
        path: '/services',
        route: ServiceRouter
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;