const models = require('./models');

const consultaProyectos = async () => {
    r = await models.DonadorProyectos.findAll();
    await r.forEach(p => {
        console.log(p.dataValues);
    });
    models.sequelize.close();
}

const agregaPropietarios = async () => {
    const prop = await models.Proyectos.findByPk(1);
    //console.log(prop.dataValues);
    const per1 = await models.Donadores.findByPk(2);
    const per2 = await models.Donadores.findByPk(1);
    //console.log(per.dataValues)
    await prop.addDonadorProyecto([per1,per2]);
    const propietarios = await prop.getDonadorProyecto();
    await propietarios.forEach(p => {
        console.log(p.nombre);
        
    });



    models.sequelize.close();
}

agregaPropietarios();