import z from 'zod';

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
