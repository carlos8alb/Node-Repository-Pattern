'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.updateTable('Personas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            apellido: {
                type: Sequelize.STRING
            },
            nombre: {
                type: Sequelize.STRING
            },
            estado: {
                type: Sequelize.STRING
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Personas');
    }
};