module.exports = app => {
    const companies = require("../controllers/company.controller.js");
    const router = require("express").Router();

    router.post("/", companies.create);
    router.get("/", companies.findAll);
    router.get("/:company_id", companies.findOne);
    router.put("/:company_id", companies.update);
    router.delete("/:company_id", companies.delete);

    app.use('/api/companies', router);
};
