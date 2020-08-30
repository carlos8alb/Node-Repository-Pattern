const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// routes
const Routes = require("../api/routes");
const StudentRoutes = require("../api/routes/student.routes");
const TeacherRoutes = require("../api/routes/teacher.routes");
const CourseRoutes = require("../api/routes/course.routes");
const PersonaRoutes = require("../api/routes/persona.routes");

// business
const { StudentBusiness, TeacherBusiness, CourseBusiness, PersonaBusiness } = require("../domain/");

// controllers
const { StudentController, TeacherController, CourseController, PersonaController } = require("../api/controllers");

// services
const { StudentService, TeacherService, CourseService, PersonaService } = require("../services");

// repositories
const { StudentRepository, TeacherRepository, CourseRepository, PersonaRepository } = require("../dal/repositories");

// db
const db = require("../dal/models");

const container = createContainer();

container
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        StudentController: asClass(StudentController).singleton(),
        StudentRoutes: asFunction(StudentRoutes).singleton(),
        TeacherController: asClass(TeacherController).singleton(),
        TeacherRoutes: asFunction(TeacherRoutes).singleton(),
        CourseController: asClass(CourseController).singleton(),
        CourseRoutes: asFunction(CourseRoutes).singleton(),
        PersonaController: asClass(PersonaController).singleton(),
        PersonaRoutes: asFunction(PersonaRoutes).singleton()
    })
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db)
    })
    .register({
        StudentService: asClass(StudentService).singleton(),
        TeacherService: asClass(TeacherService).singleton(),
        CourseService: asClass(CourseService).singleton(),
        PersonaService: asClass(PersonaService).singleton()
    })
    .register({
        StudentRepository: asClass(StudentRepository).singleton(),
        TeacherRepository: asClass(TeacherRepository).singleton(),
        CourseRepository: asClass(CourseRepository).singleton(),
        PersonaRepository: asClass(PersonaRepository).singleton()
    })
    .register({
        StudentBusiness: asClass(StudentBusiness).singleton(),
        TeacherBusiness: asClass(TeacherBusiness).singleton(),
        CourseBusiness: asClass(CourseBusiness).singleton(),
        PersonaBusiness: asClass(PersonaBusiness).singleton()
    });

module.exports = container;