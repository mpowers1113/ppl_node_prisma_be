import Router from '@koa/router';
import { getCompoundExercises, getIsolationExercises } from '../services/compound_isolation';
import * as exerciseCategory from '../services/exercise_category';
import {
  getExerciseById,
  listAllExercises,
  searchExerciseByName,
  updateExercise,
} from '../services/exercise_services';
import { getPullExercises, getPushExercises, getStaticExercises } from '../services/force_type';
import {
  getBeginnerExercises,
  getExpertExercises,
  getIntermediateExercises,
} from '../services/level';

const exerciseCategoryServiceMap: { [key: string]: () => Promise<any> } = {
  strength: exerciseCategory.getStrengthExercises,
  stretching: exerciseCategory.getStretchingExercises,
  plyometrics: exerciseCategory.getPlyometricsExercises,
  strongman: exerciseCategory.getStrongmanExercises,
  olympic_weightlifting: exerciseCategory.getOlympicWeightliftingExercises,
  weighted_bodyweight: exerciseCategory.getWeightedBodyweightExercises,
  assisted_bodyweight: exerciseCategory.getAssistedBodyweightExercises,
  cardio: exerciseCategory.getCardioExercises,
  crossfit: exerciseCategory.getCrossfitExercises,
};

const exerciseRouter = new Router({ prefix: '/exercise' });

exerciseRouter.get('/category/:category', async ctx => {
  const category = ctx.params.category;

  try {
    if (!category || !(category in exerciseCategoryServiceMap)) {
      ctx.throw(400, 'Invalid category');
    }

    const exerciseCategoryService = exerciseCategoryServiceMap[category];
    ctx.body = await exerciseCategoryService();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/compound', async ctx => {
  try {
    ctx.body = await getCompoundExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/isolation', async ctx => {
  try {
    ctx.body = await getIsolationExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/search', async ctx => {
  const name = ctx.query.name as string;
  try {
    if (!name) {
      ctx.throw(400, 'Invalid query');
    }
    ctx.body = await searchExerciseByName(name);
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/list', async ctx => {
  try {
    ctx.body = await listAllExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/:id', async ctx => {
  try {
    const id = ctx.params.id;
    if (!id) {
      ctx.throw(400, 'Invalid id');
    }
    ctx.body = await getExerciseById(id);
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/pull', async ctx => {
  try {
    ctx.body = await getPullExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/push', async ctx => {
  try {
    ctx.body = await getPushExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/static', async ctx => {
  try {
    ctx.body = await getStaticExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/level/beginner', async ctx => {
  try {
    ctx.body = await getBeginnerExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/level/intermediate', async ctx => {
  try {
    ctx.body = await getIntermediateExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

exerciseRouter.get('/level/expert', async ctx => {
  try {
    ctx.body = await getExpertExercises();
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

// TODO: the put route below is going to need some validation

exerciseRouter.put('/', async ctx => {
  try {
    const input = ctx.request.body;
    if (!input) {
      ctx.throw(400, 'Invalid input');
    }
    ctx.body = await updateExercise(input);
  } catch (e) {
    console.error(e);
    ctx.throw(500, 'Internal Server Error');
  }
});

export default exerciseRouter;
