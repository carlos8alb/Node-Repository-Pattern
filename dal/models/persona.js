"use strict";
module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define(
        "Persona", {
            nombre: DataTypes.STRING,
            apellido: DataTypes.STRING,
            estado: DataTypes.STRING
        }, { timestamps: false }
    );
    Persona.associate = function(models) {
        // Persona.associate = function(models) {
        //     Persona.hasMany(models.Section, {
        //         foreignKey: "personaId",
        //         as: "sections"
        //     });
        // };
    };
    return Persona;
};