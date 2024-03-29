const routes = require("express").Router();

routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/demo", (require("../controllers/DemoController")));
routes.use("/api/country", (require("../controllers/CountryController")));
routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/sendmail", (require("../controllers/SendMailController")));
routes.use("/api/auth", (require("../controllers/AuthController")));

routes.use("/api/user", (require("../controllers/UserController")));
routes.use("/api/user-profile", (require("../controllers/UserProfileController")));
routes.use("/api/admin-auth", require("../controllers/AdminAuthController"));
routes.use("/api/category", require("../controllers/CategoryController"));
routes.use("/api/product", require("../controllers/ProductController"));
routes.use("/api/product-category", require("../controllers/ProductCategoryController"));
routes.use("/api/subcategory", require("../controllers/SubCategoryController"));
routes.use("/api/category-subcategory", require("../controllers/CategorySubCategoryController"));
routes.use("/api/student", require("../controllers/StudentController"));
// localhost:8080/api/category

// routes.use("/about", require("../controllers/AboutController"));

module.exports = routes;