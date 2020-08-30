const mapper = require("automapper-js");
const { PersonaDto } = require("../dtos");

class PersonaController {
    constructor({ PersonaService }) {
        this._personaService = PersonaService;
    }

    async getPersonas(req, res) {
        let personas = await this._personaService.getAll();
        personas = personas.map(persona => mapper(PersonaDto, persona));
        return res.status(200).json({
            success: true,
            data: personas
        })
    }

    async getPersona(req, res) {
        const { id } = req.params;
        let persona = await this._personaService.get(id);
        if (!persona) {
            return res.status(404).json({
                success: false,
                message: 'No existe la persona'
            })
        }
        persona = mapper(PersonaDto, persona);
        return res.status(200).json({
            success: true,
            data: persona
        })
    }

    async createPersona(req, res) {
        const { body } = req;
        const createdPersona = await this._personaService.create(body);
        const persona = mapper(PersonaDto, createdPersona);
        return res.status(201).json({
            success: true,
            data: persona,
            message: 'Persona creada con éxito'
        })
    }

    async updatePersona(req, res) {
        const { body } = req;
        const { id } = req.params;

        const persona = await this._personaService.update(id, body);
        if (!persona) {
            return res.status(404).json({
                success: false,
                message: 'No existe la persona'
            })
        }
        return res.status(200).json({
            success: true,
            data: persona,
            message: 'Persona actualizada con éxito'
        })
    }

    async deletePersona(req, res) {
        const { id } = req.params;

        const persona = await this._personaService.delete(id);
        if (!persona) {
            return res.status(404).json({
                success: false,
                message: 'No existe la persona'
            })
        }
        return res.status(200).json({
            success: true,
            message: 'Persona eliminada con éxito'
        })
    }
}

module.exports = PersonaController;