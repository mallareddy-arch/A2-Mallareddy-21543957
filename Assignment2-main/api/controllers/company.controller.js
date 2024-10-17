const db = require("../models");
const Company = db.companies;

exports.create = async (req, res) => {
    try {
        const { company_name, company_address, contact_id } = req.body;
        const company = await Company.create({ company_name, company_address, contact_id });
        res.status(201).send(company);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.send(companies);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.company_id;
    try {
        const company = await Company.findByPk(id);
        if (company) {
            res.send(company);
        } else {
            res.status(404).send({ message: 'Company not found.' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.update = async (req, res) => {
    const id = req.params.company_id;
    try {
        const num = await Company.update(req.body, { where: { company_id: id } });
        if (num == 1) {
            res.send({ message: "Company was updated successfully." });
        } else {
            res.send({ message: `Cannot update Company with id=${id}. Maybe Company was not found or req.body is empty!` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.company_id;
    try {
        const num = await Company.destroy({ where: { company_id: id } });
        if (num == 1) {
            res.send({ message: "Company was deleted successfully!" });
        } else {
            res.send({ message: `Cannot delete Company with id=${id}. Maybe Company was not found!` });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
