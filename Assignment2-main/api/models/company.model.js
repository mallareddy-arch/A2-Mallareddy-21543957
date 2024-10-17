module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define('Company', {
        company_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        company_address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        contact_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'contacts', // This must match the table name
                key: 'id'
            }
        }
    }, {
        tableName: 'companies'
    });

    return Company;
};
