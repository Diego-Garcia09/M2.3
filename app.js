const models = require('./models');

const consultaProyectos = async () => {
    r = await models.Donadores.findAll();
    await r.forEach(p => {
        console.log(p.dataValues);
    });
    models.sequelize.close();
}

const agregaPropietarios = async () => {
    const prop = await models.Proyectos.findByPk(1);
    //console.log(prop.dataValues);
    const per1 = await models.Persona.findByPk(2);
    const per2 = await models.Persona.findByPk(1);
    //console.log(per.dataValues)
    await prop.addDonadores([per1,per2]);
    const propietarios = await prop.getDonadores();
    await propietarios.forEach(p => {
        console.log(p.nombre);
    });
    models.sequelize.close();
}

agregaPropietarios();