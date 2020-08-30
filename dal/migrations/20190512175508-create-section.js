"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Sections", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            teacherId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Teachers",
                    key: "id"
                }
            },
            subjectId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Subjects",
                    key: "id"
                }
            },
            courseId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Courses",
                    key: "id"
                }
            },
            status: {
                type: Sequelize.STRING
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Sections");
    }
};