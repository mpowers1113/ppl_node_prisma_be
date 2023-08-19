import Router from '@koa/router';
import * as equipmentService from '../services/equipment';

const equipmentRouter = new Router({ prefix: '/equipment' });

const equipmentServicesMap: { [key: string]: () => Promise<any> } = {
  machine: equipmentService.getMachineExercises,
  body_only: equipmentService.getBodyOnlyExercises,
  bands: equipmentService.getBandsExercises,
  cable: equipmentService.getCableExercises,
  ez_curl_bar: equipmentService.getEZCurlBarExercises,
  barbell: equipmentService.getBarbellExercises,
  medicine_ball: equipmentService.getMedicineBallExercises,
  kettlebells: equipmentService.getKettlebellsExercises,
  foam_roll: equipmentService.getFoamRollExercises,
  other: equipmentService.getOtherEquipmentExercises,
};

equipmentRouter.get('/:equipment', async ctx => {
  const equipmentType = ctx.params.equipment;

  try {
    if (!equipmentType || !(equipmentType in equipmentServicesMap)) {
      ctx.throw(400, 'Invalid equipment type');
    }

    const equipmentService = equipmentServicesMap[equipmentType];
    ctx.body = await equipmentService();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

export default equipmentRouter;
