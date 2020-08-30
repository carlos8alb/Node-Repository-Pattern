const { Router } = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function({ StudentRoutes, TeacherRoutes, CourseRoutes, PersonaRoutes }) {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json())
        .use(compression());

    apiRoute.use("/student", StudentRoutes);
    apiRoute.use("/teacher", TeacherRoutes);
    apiRoute.use("/course", CourseRoutes);
    apiRoute.use("/persona", PersonaRoutes);
    router.use("/api", apiRoute);

    return router;
};