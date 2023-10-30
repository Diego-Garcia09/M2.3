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
    // await Persona.setProyecto(prop);
    await prop.addDonadores([per1,per2]);
    const propietarios = await prop.getDonadores();
    await propietarios.forEach(p => {
        console.log(p.nombre);
    });
    const proyecto = await models.Proyectos.findByPk(1);
    const persona = await models.Persona.findByPk(1);
  
    // Asignar a la persona como donatario del proyecto
    proyecto.donatarioId = persona.id;
    await proyecto.save();
  
    // Verificar la asignación
    const donatario = await proyecto.getDonatario();
    if (donatario) {
      console.log(`Persona ${donatario.name} asignada como donatario para el proyecto ${proyecto.nombre}.`);
    } else {
      console.log('No se pudo asignar un donatario.');
    }
    models.sequelize.close();
}

const asignarDonatario = async () => {
    const proyecto = await models.Proyectos.findByPk(1);
    const persona = await models.Persona.findByPk(1);
  
    // Asignar a la persona como donatario del proyecto
    proyecto.donatarioId = persona.id;
    await proyecto.save();
  
    // Verificar la asignación
    const donatario = await proyecto.getDonatario();
    if (donatario) {
      console.log(`Persona ${donatario.name} asignada como donatario para el proyecto ${proyecto.nombre}.`);
    } else {
      console.log('No se pudo asignar un donatario.');
    }
  
    models.sequelize.close();
  };
//   asignarDonatario();

agregaPropietarios();