import z from 'zod';
import { publicProcedure } from '..';

const MuscleEnum = z.enum([
  'abdominals',
  'hamstrings',
  'adductors',
  'quadriceps',
  'biceps',
  'shoulders',
  'chest',
  'middle_back',
  'calves',
  'glutes',
  'lower_back',
  'lats',
  'triceps',
  'traps',
  'forearms',
  'neck',
  'abductors',
]);

// Enum for ForceType
const ForceTypeEnum = z.enum(['pull', 'push', 'static']);

// Enum for LevelType
const LevelTypeEnum = z.enum(['beginner', 'intermediate', 'expert']);

// Enum for MechanicType
const MechanicTypeEnum = z.enum(['compound', 'isolation']);

// Enum for EquipmentType
const EquipmentTypeEnum = z.enum([
  'body_only',
  'machine',
  'other',
  'foam_roll',
  'kettlebells',
  'dumbbell',
  'cable',
  'barbell',
  'bands',
  'medicine_ball',
  'exercise_ball',
  'ez_curl_bar',
]);

// Enum for CategoryType
const CategoryTypeEnum = z.enum([
  'strength',
  'stretching',
  'plyometrics',
  'strongman',
  'powerlifting',
  'cardio',
  'olympic_weightlifting',
  'crossfit',
  'weighted_bodyweight',
  'assisted_bodyweight',
]);

export const updateExerciseInput = publicProcedure.input(
  z.object({
    id: z.string(),
    name: z.string(),
    level: LevelTypeEnum.optional(),
    force: ForceTypeEnum.optional(),
    mechanic: MechanicTypeEnum.optional(),
    equipment: EquipmentTypeEnum.optional(),
    category: CategoryTypeEnum.optional(),
    primaryMuscles: z.array(MuscleEnum).optional(),
    secondaryMuscles: z.array(MuscleEnum).optional(),
    instructions: z.array(z.string()),
  }),
);

export const updatePrimaryMusclesInput = publicProcedure.input(
  z.object({
    id: z.string(),
    primaryMuscles: z.array(z.string()),
  }),
);

export const updateSecondaryMusclesInput = publicProcedure.input(
  z.object({
    id: z.string(),
    secondaryMuscles: z.array(z.string()),
  }),
);

export const updateInstructionsInput = publicProcedure.input(
  z.object({
    id: z.string(),
    instructions: z.array(z.string()),
  }),
);

export const updateEquipmentInput = publicProcedure.input(
  z.object({
    id: z.string(),
    equipment: z.string(),
  }),
);

export const updateForceInput = publicProcedure.input(
  z.object({
    id: z.string(),
    force: z.string(),
  }),
);

export const updateLevelInput = publicProcedure.input(
  z.object({
    id: z.string(),
    level: z.string(),
  }),
);

export const updateMechanicInput = publicProcedure.input(
  z.object({
    id: z.string(),
    mechanic: z.string(),
  }),
);

export const updateCategoryInput = publicProcedure.input(
  z.object({
    id: z.string(),
    category: z.string(),
  }),
);

export const updateNameInput = publicProcedure.input(
  z.object({
    id: z.string(),
    name: z.string(),
  }),
);
