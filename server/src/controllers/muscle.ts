import Router from '@koa/router';
import * as muscleService from '../services/muscle';

const muscleRouter = new Router({ prefix: '/muscle' });

const muscleServicesMap: { [key: string]: () => Promise<any> } = {
  glutes: muscleService.getGlutesExercises,
  chest: muscleService.getChestExercises,
  lower_back: muscleService.getLowerBackExercises,
  shoulders: muscleService.getShouldersExercises,
  quadriceps: muscleService.getQuadricepsExercises,
  biceps: muscleService.getBicepsExercises,
  hamstrings: muscleService.getHamstringsExercises,
  traps: muscleService.getTrapsExercises,
  calves: muscleService.getCalvesExercises,
  adductors: muscleService.getAdductorsExercises,
  neck: muscleService.getNeckExercises,
  forearms: muscleService.getForearmsExercises,
  lats: muscleService.getLatsExercises,
  middle_back: muscleService.getMiddleBackExercises,
  abdominals: muscleService.getAbdominalsExercises,
};

muscleRouter.get('/:muscle', async ctx => {
  const muscleGroup = ctx.params.muscle;
  try {
    if (!muscleGroup || !(muscleGroup in muscleServicesMap)) {
      ctx.throw(400, 'Invalid muscle group');
    }
    const muscleService = muscleServicesMap[muscleGroup];
    ctx.body = await muscleService();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

export default muscleRouter;
